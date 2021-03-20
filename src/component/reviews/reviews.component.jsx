import React, { useState, useEffect } from 'react'
import { Header } from '../header'
import { HeaderIcon } from "../header-icon"
import { ArrowDown } from '../arrow-down'
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

      <HeaderIcon />

      <RES.StyledRow>
        {dateReviews.reviewsList?.map(({profilePicture, reviewerName, reviewDate, review}) => (
          <RES.StyledReview>
            <RES.StyledReviewHeader>
              <RES.StyledImage src={profilePicture}/>
              <RES.StyledHeaderText>
                <RES.StyledReviewerName>{reviewerName}</RES.StyledReviewerName>
                <RES.StyledReviewDate>{reviewDate}</RES.StyledReviewDate>
              </RES.StyledHeaderText>
            </RES.StyledReviewHeader>
            <RES.StyledReviewContentBox>
              <RES.StyledContextBoxText>{review}</RES.StyledContextBoxText>
            </RES.StyledReviewContentBox>
          </RES.StyledReview>
        ))}
      </RES.StyledRow>

        <ArrowDown />

    </RES.StyledGrid>
  )
}
