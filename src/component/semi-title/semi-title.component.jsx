import React from 'react'
import * as STS from './semi-title.style'

export const SemiTitle = ({titlu}) => {
  return (
    <STS.StyledRow>
      <STS.StyledSemiTitle>{titlu}</STS.StyledSemiTitle>
    </STS.StyledRow>
  )
}
