import React, { useState } from 'react'
import * as HIS from './header-icon.style'
import { youtubeConfig } from '../icomoon/config'
import { Overlay } from '../overlay'

export const HeaderIcon = () => {

  const [showOverlay, setShowOverlay] = useState(false);

  const handleClick = () => {
    setShowOverlay(!showOverlay);
    console.log("merge",showOverlay);
  }
  
  const handleClose = () => {
    setShowOverlay(false);
  }

  return(
    <>
      <HIS.StyleIconWrapper>
        <HIS.StyleIcon { ...youtubeConfig } onClick={handleClick}/>
      </HIS.StyleIconWrapper>
      {showOverlay && <Overlay close={handleClose} />}
    </>
)
}
