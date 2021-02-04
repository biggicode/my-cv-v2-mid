import React from 'react'
import * as WS from './header.style'


const Header = ({title}) => {
  return (
    <WS.StyleRow>
      <WS.StyleTitlteWrapper>
        <WS.StyleSectionTitle>{title}</WS.StyleSectionTitle>
      </WS.StyleTitlteWrapper>
    </WS.StyleRow>
  )
}

export { Header }
