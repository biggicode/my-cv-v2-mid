import React from 'react'
import { Contact } from '../contact'
import { Skills } from '../skills'
import { Welcome } from '../welcome'
import { Experience } from '../experience'
import * as AS from './app.style'

const App = () => {
  return (
    <AS.StyledApp>
      <Welcome />
      <Contact/>
      <Skills/>
      <Experience/>
      <OpenSource />
    </AS.StyledApp>
  )
}

export { App }
