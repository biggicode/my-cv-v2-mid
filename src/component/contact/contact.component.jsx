import React, { useState, useEffect } from 'react'
import * as CS from './contact.style'
import { Header } from '../header'

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
    </CS.StyledGrid>
  )
}

export { Contact }
