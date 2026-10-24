#!/usr/bin/env python3
"""Non-destructive background cleanup of verified white studio product photographs."""
from pathlib import Path
from PIL import Image,ImageFilter,ImageDraw
ROOT=Path(__file__).resolve().parents[1]
SRC=ROOT/"public/assets"
OUT=SRC/"products/transparent"
inputs=sorted((SRC/"products/mixs").glob("*.webp")) + [SRC/"products/chapelures/chapelure.webp"]
OUT.mkdir(parents=True,exist_ok=True)
for p in inputs:
    with Image.open(p) as source:
        rgb=source.convert("RGB")
        alpha=[]
        for r,g,b in rgb.getdata():
            lo=min(r,g,b)
            delta=max(r,g,b)-lo
            if lo>=248 and delta<=27:a=0
            elif lo>=218 and delta<=11:a=max(0,min(255,int((248-lo)*7.9)))
            elif lo>=234 and delta<=21:a=max(0,min(255,int((252-lo)*12)))
            else:a=255
            alpha.append(a)
        m=Image.new("L",rgb.size);m.putdata(alpha)
        m=m.filter(ImageFilter.MedianFilter(3))
        img=rgb.convert("RGBA");img.putalpha(m)
        w,h=img.size;mw=min(w,420);mh=min(h,320)
        thumb=m.resize((mw,mh),Image.Resampling.BOX)
        bb=thumb.point(lambda a:255 if a>160 else 0).getbbox()
        if not bb:raise ValueError(p)
        # Avoid faint paper-shadow edges by requiring dense visible rows and columns.
        rows=[sum(thumb.getpixel((x,y))>160 for x in range(mw)) for y in range(mh)]
        cols=[sum(thumb.getpixel((x,y))>160 for y in range(mh)) for x in range(mw)]
        ys=[y for y,q in enumerate(rows) if q>max(3,mw*.016)]
        xs=[x for x,q in enumerate(cols) if q>max(3,mh*.016)]
        if not xs or not ys:raise ValueError(p)
        x0,x1=int(min(xs)*w/mw),int((max(xs)+1)*w/mw)
        y0,y1=int(min(ys)*h/mh),int((max(ys)+1)*h/mh)
        mx=int((x1-x0)*.09)+5;my=int((y1-y0)*.12)+5
        img=img.crop((max(0,x0-mx),max(0,y0-my),min(w,x1+mx),min(h,y1+my)))
        img.thumbnail((850,535),Image.Resampling.LANCZOS)
        out=Image.new("RGBA",(1000,720),(0,0,0,0))
        out.alpha_composite(img,((1000-img.width)//2,(720-img.height)//2))
        a=out.getchannel("A")
        cutoff=500 if p.stem in ("indienne","merguez") else 555
        ImageDraw.Draw(a).rectangle((0,cutoff,1000,720),fill=0)
        out.putalpha(a)
        dest=OUT/("mixs" if p.parent.name=="mixs" else "chapelures")/p.name
        dest.parent.mkdir(parents=True,exist_ok=True)
        out.save(dest,"WEBP",lossless=True,method=6)
        print(p.name,"=>",dest.relative_to(ROOT),"subject",img.size,flush=True)
names=sorted(OUT.rglob("*.webp"))
sheet=Image.new("RGB",(1100,((len(names)+3)//4)*205),"#f3eee6")
draw=ImageDraw.Draw(sheet)
for i,p in enumerate(names):
    pic=Image.open(p).convert("RGBA");pic.thumbnail((250,162))
    x=(i%4)*275+(275-pic.width)//2;y=i//4*205
    sheet.paste(pic,(x,y),pic)
    draw.text((i%4*275+8,y+176),p.stem[:29],fill="#211b17")
sheet.save("/tmp/tardy-transparent-proof.jpg",quality=90)
print("TOTAL",len(names),flush=True)

# Preserve the source drawings; use alpha instead of a white square for the
# illustrated mutton casing. (Never apply this to editorial white-back photos.)
source=Image.open(SRC/'menu-mouton-produit.png').convert('RGB')
opacity=[]
for r,g,b in source.getdata():
    lo=min(r,g,b)
    delta=max(r,g,b)-lo
    opacity.append(0 if lo>=246 and delta<=12 else int(max(0,min(255,(246-lo)*255/29))) if lo>=217 and delta<20 else 255)
alpha=Image.new('L',source.size);alpha.putdata(opacity)
mark=source.convert('RGBA');mark.putalpha(alpha)
mark.save(SRC/'menu-mouton-produit-clean.webp','WEBP',lossless=True,method=6)

# The low-resolution golden breadcrumbs show a round physical dish.
# Crop only the external white corners, retaining the entire dish.
plate=Image.open(SRC/'products/chapelures/chapelure-doree.webp').convert('RGBA')
w,h=plate.size
mask=Image.new('L',(w*3,h*3),0)
ImageDraw.Draw(mask).ellipse((6,6,w*3-7,h*3-7),fill=255)
mask=mask.resize((w,h),Image.Resampling.LANCZOS).filter(ImageFilter.GaussianBlur(.5))
plate.putalpha(mask)
plate.thumbnail((430,420),Image.Resampling.LANCZOS)
image=Image.new('RGBA',(1000,720),(0,0,0,0))
image.alpha_composite(plate,((1000-plate.width)//2,(720-plate.height)//2))
image.save(OUT/'chapelures/chapelure-doree.webp','WEBP',lossless=True,method=6)
print('Additional cleaned: mutton illustration + golden breadcrumbs',flush=True)
