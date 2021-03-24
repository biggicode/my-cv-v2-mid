import styled, { keyframes } from 'styled-components'
import { Icon } from '../icomoon'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(90deg);
  }
`

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  display: flex;
  justify-content: center;
`

export const StyledPhone = styled.img`
  width: 148px;
  height: 302px;
  border-radius: 24px;
  margin-top: 140px;
  position: absolute;
  animation: ${rotate} 3s ease-in infinite;
`

export const StyledRotate = styled.img`
  width: 64px;
  height: 51px;
  position: absolute;
  margin-top: 260px;
  animation: ${rotate} 3s ease-in infinite;
`

export const StyledCloseIcon = styled(Icon)`
  background-color: #1875F0;
  border-radius: 50%;
  position: absolute;
  top: 10px;
  right: 15px;
`

export const StyledIframe = styled.iframe`
  width: 302px;
  height: 170px;
  position: absolute;
  top: 500px;
  border: none;
`
