import React, { useEffect, useState } from 'react'
import * as WS from './welcome.style'
import { youtubeConfig } from '../icomoon/config'

const Welcome = () => {
  const [test, modificaTest] = useState({})
  
  useEffect(
    () => {
      fetch("http://localhost:5000/welcome").then(
        result => result.json()

      ).then(result => modificaTest(result))
      // modificaTest("mere")
    },
    []
  )

  return (
    <div>
      <WS.StyleGrid>
        <WS.StyleRow>
          <WS.StyleTitlteWrapper>
            <WS.StyleSectionTitle>{test.sectionTitle}</WS.StyleSectionTitle>
          </WS.StyleTitlteWrapper>
        </WS.StyleRow>

        
        <WS.StyleIconWrapper>
          <WS.StyleIcon { ...youtubeConfig }/>
        </WS.StyleIconWrapper>
        

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
      </WS.StyleGrid>
    </div>
  )
}

export { Welcome }
