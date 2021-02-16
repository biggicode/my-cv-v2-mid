import React from 'react'
import * as BS from './button.style'

export const Button =({label, linkConfig}) => {
  return(
    <BS.StyleDownloadButton>
      <BS.StyleDownloadIcon { ...linkConfig }/>
      <BS.StyleButtonText>{label}</BS.StyleButtonText>
    </BS.StyleDownloadButton>
  )
}
