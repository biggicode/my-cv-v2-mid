import styled from 'styled-components'

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

//Recom lists

export const StyledRecom = styled.div`
  grid-column: span 4;
`
export const StyledRecomHeader = styled.div`
  display: flex;
`

export const StyledRecomHeaderText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const StyledAvatar = styled.img`
  border: 2px solid #FFFFFF;
  border-radius: 50%;
  width: 62px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.25);
  height: 62px;
  margin-right: 12px;
`

export const StyledRecomBox = styled.div`
  padding: 20px;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.25);
  margin-top: 25px;
  margin-bottom: 30px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 15px;
    height: 15px;
    background-color: #fff;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.25);
    top: -7px;
    left: 15px;
    clip-path: polygon(-6px -6px, 100% 0, 0 100%);
    transform: rotate(45deg);
  }
`

//Recom text

export const StyledName = styled.p`
  font-size: 22px;
  color: #808080;
  line-height: 30px;
  font-weight: 500;
`

export const StyledJob = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: #808080;
  font-weight: 500;
`

export const StyledBoxText = styled.p`
  font-size: 14px;
  line-height: 30px;
  font-weight: 500;
  color: #707070;
`
