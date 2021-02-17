import React from 'react';
import * as IFC from './info-box.style'
import { Button } from '../button'

export const InfoBox = ({selected, handleClose, crossConfig, linkConfig}) => {
  return(
    <IFC.StyledBoxIcon>
      <IFC.StyledBoxHeader>
        <IFC.StyledBoxHeaderText>{selected.title}</IFC.StyledBoxHeaderText>
        <IFC.StyledCloseIcon {...crossConfig} onClick={handleClose}/>
      </IFC.StyledBoxHeader>
      
      <IFC.StyledBoxContent>
        <IFC.StyledBoxContentText>{selected.description}</IFC.StyledBoxContentText>
        </IFC.StyledBoxContent>

      <IFC.StyledBoxFooter>
        <Button label={selected.label} linkConfig={linkConfig}/>
      </IFC.StyledBoxFooter>

    </IFC.StyledBoxIcon>
  )



}
