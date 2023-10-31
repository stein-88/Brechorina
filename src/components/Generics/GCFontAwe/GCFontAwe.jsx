import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as solid from '@fortawesome/free-solid-svg-icons'
import * as regular from '@fortawesome/free-regular-svg-icons'
import * as brands from '@fortawesome/free-brands-svg-icons'
import { UpperFirst } from '@utils'

const GCFontAwe = ({ customClass, nameIco, type = 'regular' }) => {
    const allTypes = { regular, solid, brands }
    if (!nameIco || !allTypes?.[type]) return null
    const finalName = nameIco.split('-').map((cv, ind) => (ind === 0 ? cv : UpperFirst(cv))).join('')
    const finalIcon = allTypes?.[type]?.[finalName]
    if (!finalIcon) return null
    return <FontAwesomeIcon icon={finalIcon} className={customClass || ''} />
}

export default GCFontAwe
