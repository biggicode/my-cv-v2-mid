import styled from "styled-components"
import { Icon } from '../icomoon'

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
`

export const StyledRow = styled.div`
  grid-column: 1/-1;
`

export const StyledUl = styled.ul`
  background-color: #fff;
  border-radius: 6px;
  border: 2px solid #707070;
  list-style-type: none;
  grid-column: span 4;
`
export const StyledLi = styled.li`
  display: flex;

  &:not(:last-child) {
    border-bottom: 2px solid #707070;
  }


  &:first-child {
    color: #d52027;
  }

  &:nth-child(2) {
    color: #50D166;
  }

  &:last-child {
    color: #F18F1C;
  }
`

export const StyledSpanIcon = styled(Icon)`
  padding: 10px 12px 8px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledNumarLegend = styled.span`
  padding: 10px 12px 8px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #666;
  font-size: 18px;
`

export const StyledLabelLegend = styled.span`
  line-height: 48px;
  color: #999;
  flex-grow: 1;
`
export const StyledSkillButton = styled.div`
  border-radius: 15px;
  height: 30px;
  color: #fff;
  padding: 0 18px;
  line-height: 30px;
  font-size: 9px;
  background-color: #ff0000;
`
