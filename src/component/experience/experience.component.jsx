import React, { useState, useEffect } from 'react'
import * as ES from './experience.style'
import { Header } from '../header'
import { HeaderIcon } from '../header-icon'

export const Experience = () => {

  const [dateExperience, setDateExperience] = useState({})

  useEffect(() => {
    try {
      const getResult = async () => {
        const result = await(await fetch('http://localhost:5000/experience')).json()
        setDateExperience(result)
      }
      getResult()
    } catch (error) {
      console.log("Ceva nu merge", error)
    }
  },
  []
  )

  return (
    <ES.GridContainer>
      <Header title={dateExperience.sectionTitle}/>

      <HeaderIcon />

      
    </ES.GridContainer>
  )
}
