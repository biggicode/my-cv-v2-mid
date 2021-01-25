import React, { useEffect, useState } from 'react'
import * as WS from './welcome.style'

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
      <h1>Welcome title</h1>
      <WS.StyleMainTitle>{test.name}</WS.StyleMainTitle>
      <p>{test.profession}</p>
    </div>
  )
}

export { Welcome }
