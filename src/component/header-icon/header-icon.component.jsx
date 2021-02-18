import React from 'react'
import * as HIS from './header-icon.style'
import { youtubeConfig } from '../icomoon/config'

export const HeaderIcon = () => {
  return(
    <HIS.StyleIconWrapper>
      <HIS.StyleIcon { ...youtubeConfig }/>
    </HIS.StyleIconWrapper>
)
}
