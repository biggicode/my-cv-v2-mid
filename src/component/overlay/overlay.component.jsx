import React from 'react'
import * as OS from './overlay.style'
import { crossConfig } from '../icomoon/config'

export const Overlay = () => {

  return (
    <OS.Overlay>
      <OS.StyledPhone src="asset/image/phone.svg" />
      <OS.StyledRotate src="asset/image/rotate.svg" />
      <OS.StyledCloseIcon {...crossConfig}/>
      <OS.StyledIframe src="https://www.youtube.com/embed/nX2M7nzXWqA"></OS.StyledIframe>
    </OS.Overlay>
  )
}
