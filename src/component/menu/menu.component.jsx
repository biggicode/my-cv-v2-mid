import React, {useState, useEffect} from 'react'
import * as MS from './menu.style'

export const Menu = () => {

  const [dateMenu,setDateMenu] = useState({})

  useEffect(() => {
    try {
      const getResult = async () => {
        const result = await(await fetch('http://localhost:5000/menu')).json()
        setDateMenu(result)
      }
      getResult()
    } catch(error) {
      console.log("Something it's wrong with menu",error)
    }
  },[])

  let show = true;

  const handleClick = () => {
    setDateMenu({
      ...dateMenu,
      show: !show
    })
  }

  return (
    <MS.Menu onClick={() => handleClick()}>
      { show && 
      <MS.Hamburger>
        <MS.HamburgerLineOne />
        <MS.HamburgerLineTwo />
        <MS.HamburgerLineThree />
      </MS.Hamburger>}
      
      { !show && {dateMenu.menuList?.map((link)=>(
        <MS.StyledMenuLinks>{link}</MS.StyledMenuLinks>
      ))}
      <MS.StyledMenuLinks><span className="icon__cross"></span></MS.StyledMenuLinks>}
    </MS.Menu>
  )
}
