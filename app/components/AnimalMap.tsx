type Kind="porc"|"boeuf"|"mouton";
const maps={
porc:{img:"/assets/Boyaux-de-Porc-et-de-Truie.png",alt:"Schéma interactif des boyaux de porc et de truie",spots:[
["Menus de porc","/nos-produits/boyaux-de-porc/menu-de-porc/","38%","29%"],
["Suivant de porc","/nos-produits/boyaux-de-porc/suivant-de-porc/","75%","31%"],
["Chaudin de porc","/nos-produits/boyaux-de-porc/chaudin-de-porc/","53%","60%"],
["Sacs de porc","/nos-produits/boyaux-de-porc/sacs-de-porc/","19%","70%"],
["Rosettes & fuseaux","/nos-produits/boyaux-de-porc/rosettes-de-porc/","81%","46%"],
] as string[][]},
boeuf:{img:"/assets/Boyaux-de-Boeuf.png",alt:"Schéma interactif des boyaux de bœuf",spots:[
["Menus de bœuf","/nos-produits/boyaux-de-boeuf/menu-de-boeuf/","48%","17%"],
["Gros de bœuf","/nos-produits/boyaux-de-boeuf/gros-de-boeuf/","83%","52%"],
["Baudruche de bœuf","/nos-produits/boyaux-de-boeuf/baudruche-de-boeuf/","53%","54%"],
] as string[][]},
mouton:{img:"/assets/Boyaux-de-Mouton.png",alt:"Schéma interactif des boyaux de mouton",spots:[
["Menus de mouton","/nos-produits/boyaux-de-mouton/menu-de-mouton/","63%","31%"],
] as string[][]}
};
const hdMaps = {
 porc: { img: "/assets/Porc-1-1.png", width: 4500, height: 2656, positions: [[41, 37], [64, 46], [52, 60], [41, 63], [76, 44]] },
 boeuf: { img: "/assets/Boeuf-2-1.png", width: 4412, height: 2771, positions: [[45, 36], [58, 52], [43, 60]] },
 mouton: { img: "/assets/Mouton-2.png", width: 2735, height: 2359, positions: [[52, 44]] },
};
export default function AnimalMap({kind,className="",hd=true}:{kind:Kind,className?:string,hd?:boolean}){
 const m=maps[kind];
 const asset=hd ? hdMaps[kind] : null;
 return <div className={"animalMapReal "+className+(hd ? " animalMapHD" : "")} style={asset ? {aspectRatio: `${asset.width} / ${asset.height}`} : undefined}>
  <img src={asset?.img ?? m.img} alt={m.alt} width={asset?.width} height={asset?.height}/>
  {m.spots.map(([label,href,left,top],index)=><a key={href} className="hotspot" style={{left: asset ? `${asset.positions[index][0]}%` : left,top: asset ? `${asset.positions[index][1]}%` : top}} href={href} data-label={label} aria-label={label}></a>)}
  <div className="animalLegend">Cliquez sur une partie de l’animal</div>
 </div>
}