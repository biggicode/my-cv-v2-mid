import React, { useState, useEffect, Fragment } from 'react'
import * as OSS from './open-source.style'
import { Header } from '../header'
import { HeaderIcon } from '../header-icon'
import { SemiTitle } from '../semi-title'
import { Icon } from '../icomoon'
import { ArrowDown } from '../arrow-down'
import { iconsOpenSource } from '../icomoon/config'

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

  const handleClick = () => {
    setDateOpenSource(
      ...dateOpenSource
    )
  }


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

      {dateOpenSource?.githubSection?.githubProjects?.map(({ projectTitle, projectTehnologies , percentages, percentagesBar, githubNumbers, projectDescription }, key) => (
        <OSS.StyledRow>
          <OSS.StyledGitHubList key={key}>
            <OSS.StyledGitHubLi>
              <OSS.StyledProjectName>{ projectTitle }</OSS.StyledProjectName>
              <OSS.StyledProjectTehnologies>{ projectTehnologies }</OSS.StyledProjectTehnologies>
            </OSS.StyledGitHubLi>
            { arataMa && 
            <Fragment>
              <OSS.StyledSecondGitHubLi>
                {percentages?.map((e) => (
                  <OSS.StyledSecondLiText>{e}</OSS.StyledSecondLiText>
                ))}
              </OSS.StyledSecondGitHubLi>
              <OSS.StyledThirdGitHubLi>
                  {githubNumbers?.map(({icon, content}) => (
                    <OSS.StyledThirdLiText>{content}</OSS.StyledThirdLiText>
                  ))}
              </OSS.StyledThirdGitHubLi>
              <OSS.StyledGitHubLi>
                  <OSS.StyledSecondLiText>{projectDescription}</OSS.StyledSecondLiText>
              </OSS.StyledGitHubLi>
            </Fragment>}
            <OSS.StyledGitHubLastLi>
              {percentagesBar?.map((e) => (
                <OSS.StyledPercentage percentage={e}/>
              ))}
            </OSS.StyledGitHubLastLi>
            <OSS.StyledListButtomWrapper onClick = {() => handleClick(key)}>
              <Icon {...iconsOpenSource.info}/>
            </OSS.StyledListButtomWrapper>
            <OSS.StyledListButtomWrapper>
              <Icon {...iconsOpenSource.youtubeWhite}/>
            </OSS.StyledListButtomWrapper>
            <OSS.StyledListButtomWrapper>
              <Icon {...iconsOpenSource.gitHub}/>
            </OSS.StyledListButtomWrapper>
          </OSS.StyledGitHubList>
        </OSS.StyledRow>
      ))}

      <ArrowDown />

    </OSS.StyledGrid>
  )
}
