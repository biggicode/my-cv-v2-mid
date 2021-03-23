import React, { useState }from 'react'
import * as OS from './overlay.style'
import { crossConfig } from '../icomoon/config'

export const Overlay = ({handleClick}) => {

  const [showOverlay, setShowOverlay] = useState(true);

  const handleClick = () => {
    setShowOverlay(!showOverlay);
  }

  return (
    <>
      {
        showOverlay &&  <OS.Overlay>
        <OS.StyledPhone src="asset/image/phone.svg" />
        <OS.StyledRotate src="asset/image/rotate.svg" />
        <OS.StyledCloseIcon {...crossConfig}  onClick={handleClick}/>
        <OS.StyledIframe src="https://www.youtube.com/embed/nX2M7nzXWqA"></OS.StyledIframe>
        </OS.Overlay>
      }
      
    </>
  )
}
