import './Style/Location.css'

const Locationinfo = ( {location} ) => {
  return (
    <article className='location'>
        <h2 className='location_name'>{location?.name}</h2>
        <ul className='location_list'>
            <li className='location_item'><span className='location_label'>Type: </span>{location?.type}</li>
            <li className='location_item'><span className='location_label'>Dimencion: </span>{location?.dimension}</li>
            <li className='location_item'><span className='location_label'>Population: </span>{location?.residents.length}</li>
        </ul>
    </article>
  )
}

export default Locationinfo