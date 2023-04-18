
import useFetch from '../Hooks/useFetch'
import Loading from './Loading'
import './Style/Resident.css'

const ResidentCards = ( {url} ) => {

 const [resident] = useFetch(url)
  return (
    <section className='resident'>
     <header className='resident_header'>
      {
        resident
        ?  <img className='resident_img' src={resident?.image} alt="" />
        : <img src="./image/images.gif" alt="" />
      }
      <nav className='resident_status'>
        <div className={`resident_status-circle ${resident?.status}`}></div>
        <span className='resident_status-label'>{resident?.status}</span>
      </nav>
     </header>
     <nav className='resident_body'>
      <h3 className='resident_name'>{resident?.name}</h3>
      <hr className='resident_hr' />
     <ul className='resident_list'>
      <li className='resident_item'><span className='resident_label'>Specie</span><span className='resident_value'>{resident?.species}</span></li>
      <li className='resident_item'><span className='resident_label'>Origins</span> <span className='resident_value'>{resident?.origin.name}</span></li>
      <li className='resident_item'><span className='resident_label'> Eppisodes wher appear</span> <span className='resident_value'>{resident?.episode.length}</span></li>
     </ul>
     </nav>
    </section>
  )
}

export default ResidentCards