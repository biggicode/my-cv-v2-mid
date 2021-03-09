import React, { useEffect, useState} from 'react'
import * as PS from './portfolio.style'

export const Portfolio = () => {

  const [datePortfolio, setDatePortfolio] = useState({})

  useEffect(() => {
    try {
      const getResult = async () => {
        const result = await(await fetch('http://localhost:5000/portfolio')).json()
        setDatePortfolio(result)
      }
      getResult()
    } catch(error) {
      console.log("Something wrong",error)
    }
  },
  []
  )

  return(
    <div>
      {datePortfolio.sectionTitle}
    </div>
  )
}
