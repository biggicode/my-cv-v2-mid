import styled from 'styled-components'

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 16px;
  }
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
  max-width: 302px;
  position: relative;
  margin-bottom: 50px;
`

export const StyledLi = styled.li`
  &:first-of-type {
    padding: 10px 20px;
    border-bottom: 2px solid #707070;
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

export const StyledImage = styled.img`
  max-width: 100%;
  height: 100px;
`

export const StyledIconWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 0 0 20px 20px;
  background-color: #FF006D;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 10px;
  bottom: -42px;

  &:last-child {
    right: 51px;
  }
`
