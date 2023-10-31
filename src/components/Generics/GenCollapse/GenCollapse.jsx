import React, { useState } from 'react'
import s from './GenCollapse.scss'

const GenCollapse = ({
 text, children, noHr, innerCustom, noSpace, content, isDisabled, forceClose, fullClick, forceOpen 
}) => {
    if ((!text && !content) || !children) return null
    const [togColap, settogColap] = useState(false)
    const fullShow = !forceClose && togColap
    const forceShow = !!((togColap || forceOpen) && !forceClose)

    const openAll = (fullShow || forceShow)

    let finalPiece = (
        <div
            aria-hidden="true"
            className={`row ${fullClick ? s.gcPointer : ''}`}
            onClick={() => {
                if (!fullClick || !!(forceClose || isDisabled || forceOpen)) return null
                return settogColap(!togColap)
            }}
        >
            <div className={`col-10 ${s.printFlex12}`}>
                {!content && text && <p className={`${s.fontLight} mb-0 mt-1`}>{text}</p>}
                {content}
            </div>
            <div className={`col-2 ${s.printNone} text-right`}>
                <span
                    aria-hidden="true"
                    onClick={(e) => {
                        e.preventDefault()
                        if (forceClose || isDisabled || forceOpen) return null
                        return settogColap(!togColap)
                    }}
                    className={`${(forceClose || isDisabled || forceOpen) ? s.disBlue : ''} ${s.bluePlus} d-inline-block align-middle mb-0`}
                >
                    <i className={`fas  fa-${openAll ? 'minus' : 'plus'}`} />
                </span>
            </div>
        </div>
    )

    if (innerCustom) {
 finalPiece = (
        <section
            aria-hidden="true"
            className={`w-100 position-relative ${fullClick ? s.gcPointer : ''}`}
            onClick={() => {
                if (!fullClick || !!(forceClose || isDisabled || forceOpen)) return null
                return settogColap(!togColap)
            }}
        >
            {!openAll && content}
            <span
                aria-hidden="true"
                onClick={(e) => {
                    e.preventDefault()
                    if (forceClose || isDisabled || forceOpen) return null
                    return settogColap(!togColap)
                }}
                className={`${(forceClose || isDisabled || forceOpen) ? s.disBlue : ''} ${s.pointer} ${innerCustom} d-inline-block align-middle mb-0`}
            >
                <i className={`fas fa-chevron-circle-${openAll ? 'up' : 'down'}`} />
            </span>
        </section>
    ) 
}

    return (
        <section className="w-100">
            {finalPiece}
            <div className="row">
                {openAll
                    && (
<div className={`col-12 ${s.printFlex12}`}>
                        {!noHr && <hr className={s.blueHr} />}
                        {noSpace && children}
                        {!noSpace
                            && (
<div className="row m-0">
                                <div className={`col-12 ${s.printFlex12}`}>
                                    {children}
                                </div>
</div>
)}
</div>
)}
            </div>
        </section>
    )
}

export default GenCollapse
