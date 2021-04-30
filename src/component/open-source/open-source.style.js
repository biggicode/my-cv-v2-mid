import styled, { css } from 'styled-components'

const standardUl = css`
  border: 2px solid #707070;
  border-radius: 6px;
  list-style-type: none;
  background-color: #fff;
`

const standardText = css`
  font-size: 14px;
  color: #707070;
  line-height: 30px;
  font-weight: 500;
  position: relative;
`

const percentageCircle = css`
  content: '';
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  top: 9px;
  left: -15px;
`

export const StyledPercentage = styled.span`
  width: ${({percentage}) => percentage};
  height: 100%;

  &:first-child {
    background-color: #1875F0;
  }

  &:nth-child(2) {
    background-color: #F0E218;
  }

  &:nth-child(3) {
    background-color: #D52027;
  }

  &:last-child {
    background-color: #20D55D;
  }
`

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 16px;
  }

  @media (min-width: 1366px) {
    grid-template-columns: repeat(12, 1fr);
  }
`

export const StyledRow = styled.div`
  grid-column: 1/-1;

  @media (min-width: 1366px) {
    grid-column: span 9;
  }
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
//Github list

export const StyledGitHubList = styled.ul`
  ${ standardUl }
  position: relative;
  margin-bottom: 50px;
`

export const StyledGitHubLi = styled.li`
  border-top: 2px solid #707070;
  padding: 20px;

  &:first-child {
    border-top: none;
    padding: 20px 20px 10px 20px;
  }
`

export const StyledSecondGitHubLi = styled.li`
  padding: 20px 20px 10px 43px;
  border-top: 2px solid #707070;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0px 8px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    padding-left: 78px;
    padding-bottom: 40px;
  }
`

export const StyledSecondLiText = styled.p`
  ${standardText}

  &:first-child::before {
    ${percentageCircle}
    background-color: #1875F0;
  }

  &:nth-of-type(2)::before {
    ${percentageCircle}
    background-color: #D52027;
  }

  &:nth-of-type(3)::before {
    ${percentageCircle}
    background-color: #20D55D;
  }

  &:last-child::before {
    ${percentageCircle}
    background-color:#F0E218;
  }
`

export const StyledThirdGitHubLi = styled.li`
  padding: 20px;
  border-top: 2px solid #707070;
  text-align: center;

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    padding-bottom: 40px;
  }
`

export const StyledThirdLiText = styled.div`
  font-size: 16px;
  line-height: 30px;
  color: #707070;
  font-weight: 500;

  @media (min-width: 768px) {
    padding-right: 40px;
  }
`
export const StyledThirdLiIcon = styled.span`
  padding-right: 10px;
`

export const StyledFourthLiText = styled.p`
  ${standardText}
`

export const StyledGitHubLastLi = styled.li`
  border-top: none;
  height: 10px;
  display: flex;
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

export const StyledStatsLiContent = styled.div`

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    flex-grow: 1;
  }
`

export const StyledListButtomWrapper = styled.a`
  background-color: #FF006D;
  text-decoration: none;
  width: 40px;
  height: 40px;
  border-radius: 0 0 20px 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 1px;
  position: absolute;
  bottom: -42px;
  right: 51px;

  &:first-of-type {
    right: 92px;
  }

  &:last-of-type {
    right: 10px;
  }
`
