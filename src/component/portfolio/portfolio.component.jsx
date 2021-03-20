import React, { useEffect, useState} from 'react'
import { Header } from '../header'
import { HeaderIcon } from '../header-icon'
import { SemiTitle } from '../semi-title'
import { Icon } from '../icomoon'
import { iconsOpenSource, earth } from '../icomoon/config'
import { ArrowDown } from '../arrow-down'
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
    <PS.StyledGrid>

      <Header title={datePortfolio.sectionTitle}/>

      <HeaderIcon />

      <SemiTitle title={datePortfolio.semiTitle}/>

      <PS.StyledRow>
        {datePortfolio.portofolioProjects?.map(({projectTitle, projectTehnologies, projectImagePath}) => (
          <PS.StyledUl>
            <PS.StyledLi>
              <PS.StyledProjectName>{projectTitle}</PS.StyledProjectName>
              <PS.StyledProjectDescription>{projectTehnologies}</PS.StyledProjectDescription>
            </PS.StyledLi>
            <PS.StyledLi>
              <PS.StyledImage src={projectImagePath}/>
            </PS.StyledLi>
            <PS.StyledIconWrapper><Icon {...iconsOpenSource.gitHub}/></PS.StyledIconWrapper>
            <PS.StyledIconWrapper><Icon {...earth}/></PS.StyledIconWrapper>
        </PS.StyledUl>
        ))}
      </PS.StyledRow>

      <ArrowDown />

    </PS.StyledGrid>
  )
}
