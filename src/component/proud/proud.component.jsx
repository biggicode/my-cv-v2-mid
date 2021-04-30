import React, { useState, useEffect } from 'react'
import { ArrowDown } from '../arrow-down'
import { Header } from '../header'
import { HeaderIcon } from '../header-icon'
import { SemiTitle } from '../semi-title'
import * as SP from './proud.style'

export const Proud = () => {

  const [dateProud,setDateProud] = useState({})

  useEffect(() => {
    try {
      const getResult = async () => {
        const result = await (await fetch('http://localhost:5000/proud')).json()
        setDateProud(result)
      }
      getResult()
    } catch(error) {
      console.log("Something it's wrong with proud section!",error)
    }
  },
  []
  )

  return (
    <SP.StyledGrid id="proud">
      <Header title={dateProud.sectionTitle}/>

      <HeaderIcon />

      <SemiTitle title={dateProud.semiTitle}/>

      <SP.StyledUl>
        {dateProud.proudList?.map(({date, proudText}) => (
          <SP.StyledLi>
            <SP.StyledDate>{date}</SP.StyledDate>
            <SP.StyledText>{proudText}</SP.StyledText>
          </SP.StyledLi>
        ))}
      </SP.StyledUl>

      <SP.StyledWrapper>
        <ArrowDown />
      </SP.StyledWrapper>

    </SP.StyledGrid>
  )
}
