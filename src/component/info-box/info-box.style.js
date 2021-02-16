import styled from 'styled-components'
import { Icon } from '../icomoon'

export const StyledBoxIcon = styled.div`
  background-color: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  position: relative;
  margin-top: 1rem;

  &::after {
    content: '';
    width: 15px;
    height: 15px;
    position: absolute;
    top: -7px;
    left: 15px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
    clip-path: polygon(-6px -6px,100% 0,0 100%);
    transform: rotate(45deg);
    background-color: #fff;
  }
`

export const StyledBoxHeader = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
`

export const StyledBoxHeaderText = styled.div`
  flex-grow: 1;
  font-size: 22px;
  font-weight: 500;
  line-height: 30px;
  color: #808080;
  text-transform: capitalize;
`

export const StyledBoxContent = styled.div`
  border-top: 2px solid #f5f5f5;
  border-bottom: 2px solid #f5f5f5;
  padding: 20px;
`

export const StyledBoxContentText = styled.p`
  font-size: 14px;
  line-height: 30px;
  color: #707070;
  font-weight: 600;
`

export const StyledBoxFooter = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
`

export const StyledCloseIcon = styled(Icon)`
  background-color: #1875f0;
  border-radius: 50%;
  padding: 10px;
`
