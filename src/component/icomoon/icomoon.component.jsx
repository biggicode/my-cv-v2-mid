import React from 'react'
import IcoMoon from 'react-icomoon'

const iconSet = require('../../asset/my-cv-v2-mid-font/selection.json');

const Icon = props => <IcoMoon { ...{...props, iconSet} } />

export { Icon }
