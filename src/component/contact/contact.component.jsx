import React, { useState, useEffect } from 'react'
import * as CS from './contact.style'
import * as WS from '../welcome/welcome.style'
import { Header } from '../header'
import { youtubeConfig, crossConfig, linkConfig } from '../icomoon/config'
import { InfoBox } from '../info-box'

const Contact = () => {

  const [dateContact, schimbaDate] = useState({
    iconsList: [{}]
  })

  useEffect(
    () => {
      try {
        const getResult = async () => {
          const rezultat = await(await fetch("http://localhost:5000/contact")).json()
          schimbaDate(rezultat)
          console.log(rezultat)
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

      {dateContact.iconsList.map( ({icon}) => (
      <CS.StyledIconWrapper>
          <CS.StyledContactIcon icon={icon} />
      </CS.StyledIconWrapper>
      ))}

      <CS.StyledRow>
        <InfoBox 
          title={dateContact.iconsList[0].title}
          description={dateContact.iconsList[0].description}
          label={dateContact.iconsList[0].label} 
          crossConfig={crossConfig} 
          linkConfig={linkConfig}
        />
      </CS.StyledRow>
      
    </CS.StyledGrid>

  )
}

export { Contact }
