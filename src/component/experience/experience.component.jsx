import React, { useState, useEffect } from 'react'
import * as ES from './experience.style'
import { Header } from '../header'
import { HeaderIcon } from '../header-icon'
import { ArrowDown } from '../arrow-down'
import { arrowUp } from '../icomoon/config'
import Arcadia from '../../asset/company-logo/arcadia.png'
import Argus from '../../asset/company-logo/argus.png'

export const Experience = () => {

  const [dateExperience, setDateExperience] = useState({})

  useEffect(() => {
    try {
      const getResult = async () => {
        const result = await(await fetch('http://localhost:5000/experience')).json()
        setDateExperience(result)
      }
      getResult()
    } catch (error) {
      console.log("Ceva nu merge", error)
    }
  },
  []
  )

  return (
    <ES.GridContainer>
      <Header title={dateExperience.sectionTitle}/>

      <HeaderIcon />

      <ES.GridRow>
        <ES.StyledUl>
          {dateExperience?.experienceList?.map( ({jobRole, imageName, companyName}) => (
            <ES.StyledLi key={imageName}>
              <ES.StyledImg src={imageName}/>
              <ES.StyledExpTextWrapper>
                <ES.StyledExpJobRole>{jobRole}</ES.StyledExpJobRole>
                <ES.StyledExpCompany>{companyName}</ES.StyledExpCompany>
              </ES.StyledExpTextWrapper>
              <ES.StyledButtonDownWrapper>
                <ES.StyledButtonDown { ...arrowUp }/>
              </ES.StyledButtonDownWrapper>
            </ES.StyledLi>
          ))}
        </ES.StyledUl>
      </ES.GridRow>

      <ArrowDown />

    </ES.GridContainer>
  )
}
