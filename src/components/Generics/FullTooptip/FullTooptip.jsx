import React from 'react'
import GenClickBox from '@generics/GenClickBox'
import s from './FullTooptip.scss'

const FullTooptip = ({ content, customClass, setopenAct }) => {
    if (!content) return null
    const Comp = content
    return (
        <GenClickBox
            noScale
            isDisabled
            customClass={`${s.customTooltip} p-3 ${customClass || ''}`}
            text={<Comp setopenAct={setopenAct} />}
        />
    )
}

export default FullTooptip
