import styled from 'styled-components'

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
`

export const StyledRow = styled.div`
  grid-column: 1/-1;
`

export const StyledUl = styled.ul`
  border: 2px solid #707070;
  border-radius: 6px;
  background-color: #fff;
  list-style-type: none;
  grid-column: span  4;
`

export const StyledLi = styled.li`
  &:first-of-type {
    padding: 10px 20px;
  }
`

export const StyledProjectName = styled.p`
  font-size: 13px;
  font-weight: bold;
  color: #808080;
  line-height: 20px;
`

export const StyledProjectDescription = styled.p`
  font-size: 12px;
  font-style: italic;
  line-height: 20px;
  color: #707070;
`
