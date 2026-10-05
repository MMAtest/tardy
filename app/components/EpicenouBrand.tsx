export default function EpicenouBrand({compact=false}:{compact?:boolean}){
  return <div className={`epicenouBrand ${compact?"is-compact":""}`} aria-label="Epicenou — marque d'épices Tardy">
    <img src="/assets/epicenou/epicenou-logo.png" alt="Epicenou"/>
  </div>
}
