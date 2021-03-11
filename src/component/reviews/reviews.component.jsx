import React, { useState, useEffect } from 'react'
import { Header } from '../header'
import * as RES from './reviews.style'

export const Reviews = () => {

  const [dateReviews, setDateReviews] = useState({})

  useEffect(() => {
    try{
      const getResult = async () => {
        const result = await(await fetch('http://localhost:5000/reviews')).json()
        setDateReviews(result)
      }
      getResult()
    } catch(error) {
      console.log("Something at reviews it's wrong",error)
    }
  },
  []
  )

  return (
    <RES.StyledGrid>
      <Header title={dateReviews.sectionTitle}/>

    </RES.StyledGrid>
  )
}
