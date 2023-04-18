import { useRef, useState } from 'react'
import './App.css'
import useFetch from './Hooks/useFetch'
import getRandomlocation from './utils/getRandomlocation'
import MainContent from './components/MainContent'
import Loading from './components/Loading'

function App() {
  
  const [inputValue, setinputValue] = useState(getRandomlocation())


  const url = `https://rickandmortyapi.com/api/location/${inputValue}`
  const [location, hasError] = useFetch(url)

  const inputLocation = useRef()
  
 const handelSubmit = event => {
    event.preventDefault()
    setinputValue(inputLocation.current.value)
 }


  return (
    <div className="App">
      {
        location
        ?<div>
        <section className='App_inicial'>
        <nav className='App_img'>
        <img className='App_image' src="./image/riky.png" alt="" />
        <img className='App_name' src="./image/name.png" alt="" />
        <br />
        <br />
      <br />
        <h1 className='App_phrase' >Wubba Lubba Dub Dub!</h1>
        </nav>
        <nav>
        <form className='App_form' onSubmit={handelSubmit}>
            <input className='App_input' ref={inputLocation} type="number" />
            <button className='App_btn'>Search</button>
          </form>
        </nav>
        </section>
      
        
  
          {
            hasError
            ? <h1 className='App_error'>❌You can only enter a number from 1 to 120🥲</h1>
            :  <MainContent location={location}/>
          } 
  
         <h1>e</h1>
        </div>
        : <Loading/>
      }
    
    
     
      
   
    </div>
  )
}

export default App
