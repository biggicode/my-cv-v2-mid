import styled from 'styled-components'

// export const Menu = styled.div`
//   width: 40px;
//   height: 40px;
//   border: 2px solid #707070;
//   background-color: #FFFFFF;
//   border-radius: 6px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: fixed;
//   right: 10px;
//   bottom: 380px;
// `

export const Menu = styled.div`
  border: 2px solid #707070;
  background-color: #FFFFFF;
  border-radius: 6px;
  position: fixed;
  right: 10px;
  bottom: 380px;
`

export const Hamburger = styled.div`
  width: 16px;
  height: 13px;
  background-color: #fff;
  position: relative;
  display: flex;
  align-items: center;
`

export const HamburgerLineOne = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 25%;
  background-color: #000;
`

export const HamburgerLineTwo = styled.div`
  width: 100%;
  height: 25%;
  background-color: #000;
`

export const HamburgerLineThree = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 25%;
  background-color: #000;
`

export const StyledMenuLinks = styled.a`
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  text-align: right;
  color: #808080;
  text-decoration: none;
  height: 40px;
  display: block;
  padding: 5px 20px;

  &:hover {
    background-color: #FF006D;
    color: #fff;
  }

  &:last-child {
    text-align: center;
    font-size: 30px;
    background-color: #FF006D;
    color: #fff;
    border-top: 2px solid #fff;
  }
`
