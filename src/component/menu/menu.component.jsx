import React, { useState, useEffect } from "react";
import * as MS from "./menu.style";

export const Menu = () => {
  const [dateMenu, setDateMenu] = useState({});
  const [showMenu, setShowMenu] = useState(true);

  useEffect(() => {
    try {
      const getResult = async () => {
        const result = await (await fetch("http://localhost:5000/menu")).json();
        setDateMenu(result);
      };
      getResult();
    } catch (error) {
      console.log("Something it's wrong with menu", error);
    }
  }, []);

  const handleClick = () => {
    setDateMenu({
      ...dateMenu,
    });
    setShowMenu(!showMenu);
  };

  return (
    <>
      {showMenu ? (
        <MS.Menu2 onClick={handleClick}>
          <MS.Hamburger>
            <MS.HamburgerLineOne />
            <MS.HamburgerLineTwo />
            <MS.HamburgerLineThree />
          </MS.Hamburger>
        </MS.Menu2>
      ) : (
        <MS.Menu onClick={handleClick}>
          {dateMenu.menuList?.map((link) => (
            <MS.StyledMenuLinks>{link}</MS.StyledMenuLinks>
          ))}
          <MS.StyledMenuLinks>
            <span className="icon__cross"></span>
          </MS.StyledMenuLinks>
        </MS.Menu>
      )}
    </>
  );
};
