import React from 'react'
import * as STS from './semi-title.style'

export const SemiTitle = ({title}) => {
  return (
    <STS.StyledRow>
      <STS.StyledSemiTitle>{title}</STS.StyledSemiTitle>
    </STS.StyledRow>
  )
}
