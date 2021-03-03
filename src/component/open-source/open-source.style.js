import styled, { css } from 'styled-components'

const standardUl = css`
  border: 2px solid #707070;
  border-radius: 6px;
  list-style-type: none;
`

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
`

export const StyledRow = styled.div`
  grid-column: 1/-1;
`

export const StyledStatsList = styled.ul`
  ${ standardUl }
`

export const StyledStatsLi = styled.li`
  padding: 10px;
`

export const StyledStatsText = styled.p`
  font-size: 13px;
  font-weight: bold;
  line-height: 22px;
  color: #707070;
`
