import React, { useState, useEffect } from 'react'
import * as OSS from './open-source.style'
import { Header } from '../header'
import { HeaderIcon } from '../header-icon'
import { SemiTitle } from '../semi-title'
import { Icon } from '../icomoon'
import { ArrowDown } from '../arrow-down'

export const OpenSource = () => {

  const [dateOpenSource, setDateOpenSource] = useState({})

  useEffect(
    () => {
      try {
        const getResult = async () => {
          const rezultat = await(await fetch("http://localhost:5000/open-source")).json()
          setDateOpenSource(rezultat)
        }
        getResult()
      }catch(error) {
        console.log("ceva nu functioneste",error)
      }

    },
    []
  )


  return (
    <OSS.StyledGrid>
      <Header title={dateOpenSource.sectionTitle}/>


      <HeaderIcon />

      <SemiTitle title={dateOpenSource.statsSection?.statsTitle}/>

      <OSS.StyledRow>
        <OSS.StyledStatsList>
          {dateOpenSource.statsSection?.statsBox?.map(({icon, contentRow}) => (
            <OSS.StyledStatsLi>
              <Icon icon={icon} />
              <div>
                {contentRow?.map((e) => (
                  <OSS.StyledStatsText>{e}</OSS.StyledStatsText>
                ))}
              </div>
            </OSS.StyledStatsLi>
          ))}
        </OSS.StyledStatsList>
      </OSS.StyledRow>

      <SemiTitle title={dateOpenSource.githubSection?.githubTitle}/>

      {dateOpenSource?.githubSection?.githubProjects?.map(({ projectTitle, projectTehnologies , percentages}) => (
        <OSS.StyledRow>
          <OSS.StyledGitHubList>
            <OSS.StyledGitHubLi>
              <OSS.StyledProjectName>{ projectTitle }</OSS.StyledProjectName>
              <OSS.StyledProjectTehnologies>{ projectTehnologies }</OSS.StyledProjectTehnologies>
            </OSS.StyledGitHubLi>
            <OSS.StyledGitHubLastLi>
              {percentages?.map((e) => (
                <OSS.StyledPercentage percentage={e}/>
              ))}
            </OSS.StyledGitHubLastLi>
          </OSS.StyledGitHubList>
        </OSS.StyledRow>
      ))}

      <ArrowDown />

    </OSS.StyledGrid>
  )
}
