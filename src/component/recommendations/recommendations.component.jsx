import React, { useState, useEffect } from 'react'
import * as RS from './recommendations.style'

export const Recommendations = () => {

  const [dateRecom, setDateRecom] = useState({})

  useEffect(() => {
    try {
      const getResult = async () => {
        const result = await(await fetch('http://localhost:5000/recommendations')).json()
        setDateRecom(result)
      }
      getResult()
    } catch(error) {
      console.log("Something it's wrong",error)
    }
  },
  []
  )

  return (
    <div>
      
    </div>
  )
}
