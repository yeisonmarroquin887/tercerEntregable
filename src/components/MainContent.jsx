import ResidentCards from './ResidentCards'
import Locationinfo from './Locationinfo'
import './Style/Main.css'
const MainContent = ( {location} ) => {
  return (
    <>
     <Locationinfo location={location} />
      <div className='resident_container'>
        {
          location?.residents.map(url => (
            <ResidentCards 
            key={url}
            url={url}
            />
          ))
        }
      </div>
    </>
  )
}

export default MainContent