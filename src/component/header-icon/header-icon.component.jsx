import React, { useState } from 'react'
import * as HIS from './header-icon.style'
import { youtubeConfig } from '../icomoon/config'
import { Overlay } from '../overlay'

export const HeaderIcon = () => {

  const [showOverlay, setShowOverlay] = useState(true);

  const handleClick = () => {
    setShowOverlay(showOverlay);
  }

  return(
    <>
      <HIS.StyleIconWrapper>
        <HIS.StyleIcon { ...youtubeConfig } onClick={handleClick}/>
      </HIS.StyleIconWrapper>
      <Overlay handleClick={handleClick}/>
    </>
)
}
