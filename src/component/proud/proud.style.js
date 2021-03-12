import styled from 'styled-components'

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
`

export const StyledUl = styled.ul`
  background-color: #fff;
  border: 2px solid #707070;
  border-radius: 6px;
  grid-column: span 4;
  list-style-type: none;
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
