import React, { useState, useEffect } from 'react'

export const Proud = () => {

  const [dateProud,setDateProud] = useState({})

  useEffect(() => {
    try {
      const getResult = async () => {
        const result = await (await fetch('http://localhost:5000/proud')).json()
        setDateProud(result)
      }
      getResult()
    } catch(error) {
      console.log("Something it's wrong with proud section!",error)
    }
  },
  []
  )

  return (
    <div>
      
    </div>
  )
}
