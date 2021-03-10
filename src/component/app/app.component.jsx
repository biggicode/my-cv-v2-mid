import React from 'react'
import { Contact } from '../contact'
import { Skills } from '../skills'
import { Welcome } from '../welcome'
import { Experience } from '../experience'
import { OpenSource } from '../open-source'
import { Portfolio } from '../portfolio'
import { Recommendations } from '../recommendations'
import * as AS from './app.style'

const App = () => {
  return (
    <AS.StyledApp>
      <Welcome />
      <Contact/>
      <Skills/>
      <Experience/>
      <OpenSource />
      <Portfolio />
      <Recommendations />
    </AS.StyledApp>
  )
}

export { App }
