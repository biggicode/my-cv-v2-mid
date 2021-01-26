import React from 'react'
import { Contact } from '../contact'
import { OpenSource } from '../open-source'
import { Skills } from '../skills'
import { Welcome } from '../welcome'

const App = () => {
  return (
    <div> 
      <Welcome />
      <OpenSource/>
      <Contact/>
      <Skills/>
    </div>
  )
}

export { App }
