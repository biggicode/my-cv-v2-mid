import React from 'react'
import * as BS from './button.style'

export const Button =({label, linkConfig, linkTarget}) => {
  return(
    <BS.StyleDownloadButton href={linkTarget} target="_blank">
      <BS.StyleDownloadIcon { ...linkConfig }/>
      <BS.StyleButtonText>{label}</BS.StyleButtonText>
    </BS.StyleDownloadButton>
  )
}
