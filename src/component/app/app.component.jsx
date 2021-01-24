import React from 'react'
import { Contact } from '../contact'
import { OpenSource } from '../open-source'
import { Skills } from '../skills'
import { Welcome } from '../welcome'

const App = () => {
  return (
    <div> 
      <h1>I see a black small golf!!!!</h1>
      <Welcome />
      <OpenSource/>
      <Contact/>
      <Skills/>
    </div>
  )
}

export { App }
