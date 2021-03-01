import React, { useState, useEffect } from 'react'
import * as SS from './skills.style'
import { Header } from '../header'
import { HeaderIcon } from '../header-icon'
import { SemiTitle } from '../semi-title'
import { ArrowDown } from '../arrow-down'
import { iconsForLegend } from '../icomoon/config'

const Skills = () => {

  const [dateSkills, setDateSkills] = useState({
    vrajiTypeList: []
  })

  useEffect(
    () => {
      try {
        const getResult = async () => {
          const rezultat = await(await fetch("http://localhost:5000/skills")).json()
          setDateSkills(rezultat)
        }
        getResult()
      } catch(error) {
        console.log("Ceva nu e bine!", error)
      }


    },
    []
  )

  return (
    <SS.StyledGrid>
      <Header title={dateSkills?.sectionTitle}/>

      <HeaderIcon />

      <SemiTitle title={dateSkills?.legend?.titlu}/>


      <SS.StyledUl>
        {dateSkills?.legend?.listaElemente?.map( ({label, icon, color}, cheie) => (
          <SS.StyledLi>
            <SS.StyledSpanIcon { ...iconsForLegend.trophyConfig } icon={icon} color={color}/>
            <SS.StyledLabelLegend>{label}</SS.StyledLabelLegend>
            <SS.StyledNumarLegend>{cheie + 1}</SS.StyledNumarLegend>
          </SS.StyledLi>
        ))}
      </SS.StyledUl>
      
      <SemiTitle title={dateSkills?.vrajiTypeList[0]?.titlu}/>
      
      <SS.StyledRow>
        {dateSkills?.vrajiTypeList[0]?.vrajiList?.map(({label}) => (
          <SS.StyledSkillButton>{label}</SS.StyledSkillButton>
        ))}
      </SS.StyledRow>

      <SemiTitle title={dateSkills?.vrajiTypeList[1]?.titlu}/>

      <SS.StyledRow>
        {dateSkills?.vrajiTypeList[1]?.vrajiList?.map(({label}) => (
          <SS.StyledSkillButton>{label}</SS.StyledSkillButton>
        ))}
      </SS.StyledRow>

      <SemiTitle title={dateSkills?.vrajiTypeList[2]?.titlu}/>

      <SS.StyledRow>
        {dateSkills?.vrajiTypeList[2]?.vrajiList?.map(({label}) => (
          <SS.StyledSkillButton>{label}</SS.StyledSkillButton>
        ))}
      </SS.StyledRow>

      <SS.StyledRow />

      <SS.StyledRow>
        <SS.StyledJoke>
          <SS.StyledJokeText>{dateSkills?.description}</SS.StyledJokeText>
        </SS.StyledJoke>
      </SS.StyledRow>

      <SS.StyledRow />
      
      <ArrowDown />

    </SS.StyledGrid>
  )
}

export { Skills }
