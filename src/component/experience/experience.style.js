import styled from 'styled-components'
import { Icon } from '../icomoon'

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
`

export const GridRow = styled.div`
  grid-column: 1/-1;
`

export const StyledUl = styled.ul`
  border: 2px solid #707070;
  border-radius: 6px;
  background-color: #fff;
  list-style-type: none;
`

export const StyledLi = styled.li`
  border-top: 2px solid #707070;
  padding: 20px;
  display: flex;

  &:first-child {
    border-top: none;
  }
`

export const StyledImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`

export const StyledExpTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
`

export const StyledExpJobRole = styled.p`
  font-size: 13px;
  line-height: 20px;
  font-weight: bold;
  color: #808080;
`

export const StyledExpCompany = styled.p`
  color: #707070;
  font-size: 12px;
  font-style: italic;
  line-height: 20px;
`

export const StyledButtonDownWrapper = styled.div`
  border: 2px solid #707070;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
`

export const StyledButtonDown = styled(Icon)`
  transform: rotate(180deg);
`
