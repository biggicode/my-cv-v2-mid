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
`
export const StyledLi = styled.li`
  display: flex;

  &:not(:last-child) {
    @extend %list-item;
  }


  &:first-child .icon__vraji{
    color: #d52027;
  }

  &:nth-child(2) .icon__vraji{
    color: #50D166;
  }

  &:last-child .icon__vraji{
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
