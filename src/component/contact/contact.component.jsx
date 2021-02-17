import React, { useState, useEffect } from 'react'
import * as CS from './contact.style'
import * as WS from '../welcome/welcome.style'
import { Header } from '../header'
import { youtubeConfig, crossConfig, linkConfig } from '../icomoon/config'
import { InfoBox } from '../info-box'

const Contact = () => {

  const [dateContact, schimbaDate] = useState({})
  const [selected, setSelected] = useState([])

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

  const handleClick = (e)=> {
    const test = dateContact?.iconsList.filter(el => el.icon === e.target.id)
    test[0].icon === selected[0]?.icon ? setSelected([]) : setSelected(test)
  }

  const handleClose = () => {
    setSelected([])
  }

  const conditionalInfoBox = () => {
    if (selected.length) {
      return (
        <InfoBox
          selected={selected[0]}
          handleClose={handleClose}
          crossConfig={crossConfig} 
          linkConfig={linkConfig}
        />
      )
    }
  }
  
  return (
    <CS.StyledGrid>
      <Header title={dateContact?.sectionTitle}/>

      <WS.StyleIconWrapper>
        <WS.StyleIcon { ...youtubeConfig }/>
      </WS.StyleIconWrapper>

      <CS.StyledImageDiv />

      {dateContact?.iconsList?.map( ({icon}) => (
        <CS.StyledIconWrapper key={icon}>
            <CS.StyledContactIcon key={icon} id={icon} onClick={handleClick} icon={icon} />
        </CS.StyledIconWrapper>
      ))}

      <CS.StyledRow>
        {conditionalInfoBox()}
      </CS.StyledRow>
      
    </CS.StyledGrid>

  )
}

export { Contact }
