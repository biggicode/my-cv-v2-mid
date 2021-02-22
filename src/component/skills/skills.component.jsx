import React, { useState, useEffect } from 'react'
import * as SS from './skills.style'
import { Header } from '../header'
import { HeaderIcon } from '../header-icon'
import { SemiTitle } from '../semi-title'
import { bookConfig, trophyConfig, heartConfig, iconsForLegend } from '../icomoon/config'

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
        {dateSkills?.legend?.listaElemente?.map( ({label,icon}) => (
          <SS.StyledLi>
            <SS.StyledSpanIcon { ...iconsForLegend.trophyConfig }/>
            <SS.StyledLabelLegend>{label}</SS.StyledLabelLegend>
            <SS.StyledNumarLegend>{label}</SS.StyledNumarLegend>
          </SS.StyledLi>
        ))}
      </SS.StyledUl>
      
      <SemiTitle title={dateSkills?.vrajiTypeList[0]?.titlu}/>

      {dateSkills?.vrajiTypeList?.vrajiList?.map(({label}) => (
        <SS.StyledSkillButton>{label}</SS.StyledSkillButton>
      ))}

      <SemiTitle title={dateSkills?.vrajiTypeList[1]?.titlu}/>

      <SemiTitle title={dateSkills?.vrajiTypeList[2]?.titlu}/>

    </SS.StyledGrid>
  )
}

export { Skills }
