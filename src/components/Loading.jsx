import React from 'react'
import './Style/Loandingz.css'
const Loading = () => {
  return (
    <div className='loading'>
        <nav>
        <img id='img' src="./image/loading.gif" alt="" />
        <img className='img' src="./image/carga.gif" alt="" />
        </nav>
        
        <h1 className='h1'><span className='span'>Loading...</span></h1>
        
       
    </div>
  )
}

export default Loading