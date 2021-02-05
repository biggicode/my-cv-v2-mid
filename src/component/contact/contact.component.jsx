import React, { useState, useEffect } from 'react'
import * as CS from './contact.style'
import * as WS from '../welcome/welcome.style'
import { Header } from '../header'
import { youtubeConfig } from '../icomoon/config'

const Contact = () => {

  const [dateContact, schimbaDate] = useState({})

  useEffect(
    () => {
      try {
        const getResult = async () => {
          const rezultat = await(await fetch("http://localhost:5000/contact")).json()
          schimbaDate(rezultat)
        }
        getResult()
      } catch (error) {
        console.log("ceva nu e bine", error)
      }
    },
    []
  )


  return (
    <CS.StyledGrid>
      <Header title={dateContact.sectionTitle}/>

      <WS.StyleIconWrapper>
        <WS.StyleIcon { ...youtubeConfig }/>
      </WS.StyleIconWrapper>

      <CS.StyledImageDiv />

    </CS.StyledGrid>

  )
}

export { Contact }
