import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [apyriky, setapyriky] = useState()
    const [hasError, setHasError] = useState(false)
   
 useEffect(() => {
    axios.get(url)
    .then(res => {
      setapyriky(res.data)
      setHasError(false)
    })
    .catch(err => {
      console.log(err)
      setHasError(true)
    })
 }, [url])
  return [apyriky, hasError]
}

export default useFetch