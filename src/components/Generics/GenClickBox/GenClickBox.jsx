import React from 'react'
import StandardButton from '../StandardButton'
import s from './GenClickBox.scss'

export const GenClickBox = ({
    customStyle, noScale, customClass, onClick = () => null, ...rest
}) => <StandardButton customStyle={s} onClick={onClick} customClass={`${noScale ? s.noScale : ''} ${customClass || ''}`} {...rest} />

export default GenClickBox
