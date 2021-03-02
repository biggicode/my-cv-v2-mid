import React, { useState, useEffect } from 'react'
import * as OSS from './open-source.style'
import { Header } from '../header'
import { HeaderIcon } from '../header-icon'

export const OpenSource = () => {

  const [dateOpenSource, setDateOpenSource] = useState({})

  useEffect(
    () => {
      try {
        const getResult = async () => {
          const rezultat = await(await fetch("http://localhost:5000/open-source")).json()
          setDateOpenSource(rezultat)
        }
        getResult()
      }catch(error) {
        console.log("ceva nu functioneste",error)
      }

    },
    []
  )


  return (
    <OSS.StyledGrid>
      <Header title={dateOpenSource.sectionTitle}/>
      
      <HeaderIcon />

    </OSS.StyledGrid>
  )
}
