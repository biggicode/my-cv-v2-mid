import React from 'react'
import { arrowDownConfig } from '../icomoon/config'
import * as SAD from './arrow-down.style'

export const ArrowDown = () => {
  return(
    <SAD.StyleIconWrapper>
      <SAD.StyleArrowDownIcon { ...arrowDownConfig }/>
    </SAD.StyleIconWrapper>
  )
}
