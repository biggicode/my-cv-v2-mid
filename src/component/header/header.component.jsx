import React from 'react'
import * as WS from './header.style'


const Header = ({title}) => {
  return (
    <div>
      <WS.StyleRow>
        <WS.StyleTitlteWrapper>
          <WS.StyleSectionTitle>{title}</WS.StyleSectionTitle>
        </WS.StyleTitlteWrapper>
      </WS.StyleRow>
    </div>
  )
}

export { Header }
