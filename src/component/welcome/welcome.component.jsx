import React, { useEffect, useState } from 'react'
import * as WS from './welcome.style'
import { youtubeConfig, downloadConfig, arrowDownConfig } from '../icomoon/config'
import { Header } from '../header'
import { HeaderIcon } from '../header-icon'


const Welcome = () => {
  const [test, modificaTest] = useState({})
  
  useEffect(
    () => {
      // fetch("http://localhost:5000/welcome")
      //   .then(result => result.json())
      //   .then(result => modificaTest(result))
      try {
        const getResult = async () => { 
          const result = await(await fetch("http://localhost:5000/welcome")).json()
          modificaTest(result)
        }
        getResult()
      } catch (error) {
        console.log("eroare", error)
      }
    },
    []
  )

  return (
    <WS.StyleGrid>
      <Header title={test.sectionTitle}/> 

      <HeaderIcon />

      <WS.StyleRow>
        <WS.StyleMainTitle>{test.name}</WS.StyleMainTitle>
      </WS.StyleRow>

      <WS.StyleRow>
        <WS.StyleProfession>{test.profession}</WS.StyleProfession>
      </WS.StyleRow>

      <WS.StyleRow>
        <WS.StyleSemiTitle>{test.welcomeInfo}</WS.StyleSemiTitle>
      </WS.StyleRow>

      <WS.StyleRow>
        <WS.StyleDescripitonBox>{test.aboutMeBoxTextList}</WS.StyleDescripitonBox>
      </WS.StyleRow>

      <WS.StyleIconWrapper>
        <WS.StyleDownloadButton>
          <WS.StyleDownloadIcon { ...downloadConfig }/>
          <WS.StyleButtonText>{test.btnDownloadText}</WS.StyleButtonText>
        </WS.StyleDownloadButton>
      </WS.StyleIconWrapper>

      <WS.StyleIconWrapper>
        <WS.StyleArrowDownIcon { ...arrowDownConfig }/>
      </WS.StyleIconWrapper>

    </WS.StyleGrid>
  )
}

export { Welcome }
