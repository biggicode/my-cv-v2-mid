import styled from 'styled-components'
import { ArrowDown } from '../arrow-down'

export const StyledWrapper = styled.div`
  transform: rotate(180deg);
  grid-column: 1/-1;

  @media (min-width: 1366px) {
    grid-column: span 9;
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

export const StyledUl = styled.ul`
  background-color: #fff;
  border: 2px solid #707070;
  border-radius: 6px;
  grid-column: 1/-1;
  list-style-type: none;

  @media (min-width: 1366px) {
    grid-column: span 9;
  }
`

export const StyledLi = styled.li`
  padding: 10px 22px;
  border-bottom: 2px solid #707070;

  &:last-child {
    border-bottom: none;
  }
`

//Text 

export const StyledDate = styled.p`
  font-size: 12px;
  line-height: 22px;
  font-weight: bold;
  color: #707070;
  margin-bottom: 10px;
  text-align: right;
`

export const StyledText = styled.p`
  font-size: 13px;
  line-height: 22px;
  font-style: italic;
  color: #707070;
`
