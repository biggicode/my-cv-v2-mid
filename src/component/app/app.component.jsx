import React from 'react'
import { Contact } from '../contact'
import { Skills } from '../skills'
import { Welcome } from '../welcome'
import { Experience } from '../experience'
import { OpenSource } from '../open-source'
import { Portfolio } from '../portfolio'
import { Recommendations } from '../recommendations'
import { Reviews } from '../reviews'
import { Proud } from '../proud'
import { Menu } from '../menu'
import * as AS from './app.style'

const App = () => {
  return (
    <AS.StyledApp>
      <Welcome />
      <Contact />
      <Skills />
      <Experience />
      <OpenSource />
      <Portfolio />
      <Recommendations />
      <Reviews />
      <Proud />
      <Menu />
    </AS.StyledApp>
  )
}

export { App }
