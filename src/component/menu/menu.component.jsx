import React from 'react'
import * as MS from './menu.style'

export const Menu = () => {

  return (
    <MS.Menu>
      <MS.Hamburger>
        <MS.HamburgerLineOne />
        <MS.HamburgerLineTwo />
        <MS.HamburgerLineThree />
      </MS.Hamburger>
    </MS.Menu>
  )
}
