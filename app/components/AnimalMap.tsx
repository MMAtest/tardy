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
export default function AnimalMap({kind,className=""}:{kind:Kind,className?:string}){
 const m=maps[kind];
 return <div className={"animalMapReal "+className}>
  <img src={m.img} alt={m.alt}/>
  {m.spots.map(([label,href,left,top])=><a key={href} className="hotspot" style={{left,top}} href={href} data-label={label} aria-label={label}></a>)}
  <div className="animalLegend">Cliquez sur une partie de l’animal</div>
 </div>
}