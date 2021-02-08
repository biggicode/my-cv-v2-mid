import styled from 'styled-components'
import urlImage from '../../asset/image/cv2.jpg'

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
`
export const StyledImageDiv = styled.div`
  background-color: #fff;
  padding-top: 100%;
  grid-column: span 4;
  position: relative;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  margin-bottom: 30px;

  &::after {
    content: "";
    background-image: url(${urlImage});
    background-size: cover;
    position: absolute;
    top: 10px;
    bottom: 10px;
    left: 10px;
    right: 10px;
    border-radius: 6px;
  }
`
export const StyledIconWrapper = styled.div`
  display: block;
  transition: 250ms;
  background-color: #1875F0;
  border-radius: 50%;
  padding-top: 100%;
  position: relative;
  color: #FFF;
  cursor: pointer;
`
export const StyledContactIcon = styled.i`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 8vw;
`
