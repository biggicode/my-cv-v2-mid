import React from 'react';
import * as IFC from './info-box.style'
import { Button } from '../button'

export const InfoBox = ({title, description, label, crossConfig, linkConfig}) => {
  return(
    <IFC.StyledBoxIcon>
      <IFC.StyledBoxHeader>
        <IFC.StyledBoxHeaderText>{title}</IFC.StyledBoxHeaderText>
        <IFC.StyledCloseIcon {...crossConfig}/>
      </IFC.StyledBoxHeader>
      
      <IFC.StyledBoxContent>
        <IFC.StyledBoxContentText>{description}</IFC.StyledBoxContentText>
        </IFC.StyledBoxContent>

      <IFC.StyledBoxFooter>
        <Button label={label} linkConfig={linkConfig}/>
      </IFC.StyledBoxFooter>

    </IFC.StyledBoxIcon>
  )



}
