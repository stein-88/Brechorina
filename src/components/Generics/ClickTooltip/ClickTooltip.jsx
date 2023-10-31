import React, { useState, useRef, useEffect } from 'react'
import FullTooptip from '@generics/FullTooptip'
import s from './ClickTooltip.scss'

const ClickTooltip = ({
    mainContent, idTooltip, ...rest
}) => {
    if (!idTooltip || !mainContent) return null
    const [openAct, setopenAct] = useState(false)
    const openRefer = useRef(null)

    const handleClickOutside = (e) => {
        if (!e?.target || openRefer?.current?.contains?.(e.target)) return null
        return setopenAct(false)
    }

    useEffect(() => {
        document.body.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.body.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return (
        <span
            ref={openRefer}
            aria-hidden="true"
            onClick={() => setopenAct(!openAct)}
            className={`position-relative ${s.pointer} d-inline-block`}
        >
            {mainContent}
            {openAct && (
                <span
                    aria-hidden="true"
                    onClick={(e) => {
                        e.stopPropagation()
                        return null
                    }}
                >
                    <FullTooptip setopenAct={setopenAct} {...rest} />
                </span>
            )}
        </span>
    )
}

export default ClickTooltip
