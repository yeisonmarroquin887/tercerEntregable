import { useRef, useState } from 'react'
import './App.css'
import useFetch from './Hooks/useFetch'
import getRandomlocation from './utils/getRandomlocation'
import MainContent from './components/MainContent'

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
       <h1 className='App_title'>riky and morty</h1>
        <form className='App_form' onSubmit={handelSubmit}>
          <input className='App_input' ref={inputLocation} type="number" />
          <button className='App_btn'>Search</button>
        </form>

        {
          hasError
          ? <h1 className='App_error'>❌You can only enter a number from 1 to 120🥲</h1>
          :  <MainContent location={location}/>
        } 

       
     
      
   
    </div>
  )
}

export default App
