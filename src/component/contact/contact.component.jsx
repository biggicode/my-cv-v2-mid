import React from 'react'
import * as CS from './contact.style'

const Contact = () => {
  return (
    <CS.StyledContact>
      <CS.StyledParagraf>I like eating oatmeal</CS.StyledParagraf>
      <CS.StyledUnorderedList>
        <CS.StyledListItem>Mere</CS.StyledListItem>
        <CS.StyledListItem>Pere</CS.StyledListItem>
        <CS.StyledListItem>Capsuni</CS.StyledListItem>
      </CS.StyledUnorderedList>
    </CS.StyledContact>
  )
}

export { Contact }
