#!/usr/bin/env python3
"""Browser viewport smoke test for every Next.js public route; no external service."""
import os,json,time,base64
from pathlib import Path
from urllib.request import urlopen
import websocket

ROOT=Path(__file__).resolve().parents[1]
BASE=os.environ.get("QA_BASE","http://127.0.0.1:3199").rstrip("/")
routes=sorted({"/" if p.parent==ROOT/"app" else "/"+str(p.parent.relative_to(ROOT/"app"))+"/" for p in (ROOT/"app").rglob("page.tsx")})
viewports=[(390,844),(768,1024),(1440,900)]
qa=ROOT/".qa"
qa.mkdir(exist_ok=True)
tab=next(t for t in json.load(urlopen("http://127.0.0.1:9226/json")) if t.get("type")=="page")
ws=websocket.create_connection(tab["webSocketDebuggerUrl"],timeout=15,suppress_origin=True)
next_id=0
def cmd(method,params=None):
    global next_id
    next_id+=1
    ident=next_id
    ws.send(json.dumps({"id":ident,"method":method,"params":params or {}}))
    while True:
        result=json.loads(ws.recv())
        if result.get("id")==ident:return result
def evaluate(expression):
    res=cmd("Runtime.evaluate",{"expression":expression,"returnByValue":True,"awaitPromise":True})
    return res.get("result",{}).get("result",{}).get("value")
cmd("Page.enable")
cmd("Runtime.enable")
issues=[]
for width,height in viewports:
    cmd("Emulation.setDeviceMetricsOverride",{"width":width,"height":height,"deviceScaleFactor":1,"mobile":width<768})
    for route in routes:
        try:
            cmd("Page.navigate",{"url":BASE+route})
            started=time.time()
            while time.time()-started<6:
                state=evaluate("document.readyState")
                if state in ("interactive","complete"):break
                time.sleep(.15)
            time.sleep(.12)
            report=evaluate("""(() => {
              const root=document.documentElement;
              const w=window.innerWidth;
              const clipped=[...document.querySelectorAll('main h1,main h2,main h3,main section,main article,main figure,main img,.siteHeader,.siteFooter')]
                 .map(el=>({tag:el.tagName,cls:(typeof el.className==='string'?el.className:'').slice(0,65),text:(el.innerText||el.alt||'').slice(0,48),
                    r:el.getBoundingClientRect()}))
                 .filter(x=>x.r.width>0&&x.r.height>0&&(x.r.right>w+6||x.r.left < -6))
                 .slice(0,5).map(x=>({tag:x.tag,cls:x.cls,text:x.text,right:Math.round(x.r.right),left:Math.round(x.r.left)}));
              const missing=[...document.images].filter(el=>el.complete&&el.naturalWidth===0).slice(0,5).map(el=>el.getAttribute('src'));
              return {width:w,docWidth:root.scrollWidth,broken:missing,overflow:clipped,title:document.title,body:document.body.scrollWidth};
             })()""")
            if not report or not report["title"] or "127.0.0.1" in report["title"]: raise RuntimeError("Page not loaded")
            print(width,route,report["docWidth"],"broken",len(report["broken"]),"overflow",len(report["overflow"]),flush=True)
            if report["docWidth"]>width+6 or report["broken"] or report["overflow"]:
                issues.append({"viewport":width,"route":route,**report})
            if route in ("/","/epices-epicenou/","/les-mixs-complets/","/epices-naturelles/","/les-chapelures/") and width in (390,1440):
                b64=cmd("Page.captureScreenshot",{"format":"png","captureBeyondViewport":False}).get("result",{}).get("data")
                if b64:(qa/f"{width}_{route.strip('/').replace('/','-') or 'home'}.png").write_bytes(base64.b64decode(b64))
        except Exception as e:
            print("ERROR",width,route,repr(e),flush=True)
            issues.append({"viewport":width,"route":route,"error":str(e)})
report={"pages":len(routes),"viewports":[v[0] for v in viewports],"issues":issues}
(qa/"responsive.json").write_text(json.dumps(report,ensure_ascii=False,indent=2))
print("TOTAL",len(routes)*len(viewports),"ISSUES",len(issues),flush=True)
ws.close()
