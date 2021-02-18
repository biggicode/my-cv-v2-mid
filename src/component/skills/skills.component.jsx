import React, { useState, useEffect } from 'react'
import * as SS from './skills.style'
import { Header } from '../header'
import { HeaderIcon } from '../header-icon'

const Skills = () => {

  const [dateSkills, setDateSkills] = useState({})

  useEffect(
    () => {
      try {
        const getResult = async () => {
          const rezultat = await(await fetch("http://localhost:5000/contact")).json()
          setDateSkills(rezultat)
        }
        getResult()
      } catch(error) {
        console.log("Ceva nu e bine!", error)
      }


    },
    []
  )

  return (
    <SS.StyledGrid>
      <Header title={dateSkills.sectionTitle}/>

      <HeaderIcon />
    </SS.StyledGrid>
  )
}

export { Skills }
