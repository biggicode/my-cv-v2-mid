import styled, { css } from 'styled-components'

const standardUl = css`
  border: 2px solid #707070;
  border-radius: 6px;
  list-style-type: none;
  background-color: #fff;
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

export const StyledProjectName = styled.p`
  font-size: 13px;
  line-height: 20px;
  font-weight: bold;
  padding-bottom: 10px;
  color: #808080;
`
export const StyledProjectTehnologies = styled.p`
  font-size: 12px;
  color: #707070;
  line-height: 20px;
  font-style: italic;
`

export const StyledGitHubList = styled.ul`
  ${ standardUl }
`

export const StyledGitHubLi = styled.li`
  border-top: 2px solid #707070;
  
  &:first-child {
    border-top: none;
    padding: 20px 20px 10px 20px;
  }
`

export const StyledStatsLi = styled.li`
  padding: 10px;
  border-bottom: 2px solid #707070;
  display: flex;

  &:last-child {
    border-bottom: none;
  }
`

export const StyledStatsText = styled.p`
  font-size: 13px;
  font-weight: bold;
  line-height: 22px;
  color: #707070;
  padding-left: 17px;
`
