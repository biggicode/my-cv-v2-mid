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

  &:after {
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
