import React, { useState, useEffect, Fragment } from 'react'
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

  const handleClick = (key) => {
    console.log(key)
    console.log(dateExperience)
    setDateExperience({
      ...dateExperience,
      experienceList: dateExperience.experienceList.map((experience, cheie) => ({
        ...experience,
        arataMa: key === cheie ? !experience.arataMa : experience.arataMa
      }))
    })
  }
  

  return (
    <ES.GridContainer id="experience">
      <Header title={dateExperience.sectionTitle}/>

      <HeaderIcon />

      <ES.GridRow>
        <ES.StyledUl>
          {dateExperience?.experienceList?.map( ({jobRole, imageName, companyName, date, content, arataMa}, key) => (
            <Fragment>
              <ES.StyledLi key={ key }>
                <ES.StyledImg src={imageName}/>
                <ES.StyledExpTextWrapper>
                  <ES.StyledExpJobRole>{jobRole}</ES.StyledExpJobRole>
                  <ES.StyledExpCompany>{companyName}</ES.StyledExpCompany>
                </ES.StyledExpTextWrapper>
                <ES.StyledButtonDownWrapper onClick={() => handleClick(key)}>
                  <ES.StyledButtonDown { ...arrowUp } rotatie={ arataMa }/>
                </ES.StyledButtonDownWrapper>
              </ES.StyledLi>
              {console.log(arataMa)}
              {arataMa && <ES.StyledSecondLi key={ key + 1}>
                <ES.StyledExpDate>{ date }</ES.StyledExpDate>
                <ES.StyledExpText>{ content[0] }</ES.StyledExpText>
                <ES.StyledExpText>{ content[1] }</ES.StyledExpText>
              </ES.StyledSecondLi>}
            </Fragment>
          ))}
        </ES.StyledUl>
      </ES.GridRow>

      <ArrowDown />

    </ES.GridContainer>
  )
}
