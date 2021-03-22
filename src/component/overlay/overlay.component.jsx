import React from 'react'
import * as OS from './overlay.style'

export const Overlay = () => {

  return (
    <OS.Overlay>
      <OS.StyledPhone src="asset/image/phone.jpg" />
      <OS.StyledRotate src="asset/image/rotate.svg" />
    </OS.Overlay>
  )
}
