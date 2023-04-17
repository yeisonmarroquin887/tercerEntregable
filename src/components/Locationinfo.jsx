import './Style/Location.css'

const Locationinfo = ( {location} ) => {
  return (
    <article>
        <h2>{location?.name}</h2>
        <ul>
            <li><span>Type: </span>{location?.type}</li>
            <li><span>Dimencion: </span>{location?.dimension}</li>
            <li><span>Population: </span>{location?.residents.length}</li>
        </ul>
    </article>
  )
}

export default Locationinfo