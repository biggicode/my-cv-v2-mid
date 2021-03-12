import React, { useState, useEffect } from 'react'
import { Header } from '../header'
import { HeaderIcon } from '../header-icon'
import { SemiTitle } from '../semi-title'
import * as SP from './proud.style'

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
    <SP.StyledGrid>
      <Header title={dateProud.sectionTitle}/>

      <HeaderIcon />

      <SemiTitle title={dateProud.semiTitle}/>

    </SP.StyledGrid>
  )
}
