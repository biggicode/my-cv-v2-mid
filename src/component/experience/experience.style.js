import styled from 'styled-components'

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

  &:first-child {
    border-top: none;
  }
`

export const StyledImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`
