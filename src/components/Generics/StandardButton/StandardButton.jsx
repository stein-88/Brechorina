import React from 'react'
import sTyle from './StandardButton.scss'

const StandardButton = ({
    text,
    link,
    customClass,
    target,
    onClick,
    isDisabled,
    altern,
    darkBlue,
    customStyle,
}) => {
    if (!text) return null
    const s = customStyle || sTyle
    if (onClick) {
        return (
            <span
                aria-hidden="true"
                onClick={(e) => {
                    if (!isDisabled) {
                        onClick(e)
                    }
                }}
                className={`${s.standardButton} ${darkBlue ? s.darkBlue : ''} ${isDisabled ? s.disabledButton : ''} ${altern ? s.alternative : ''} ${customClass || ''}`}
            >
                {text}
            </span>
        )
    }
    return (
        <a href={link} rel={target ? 'noopener noreferrer' : 'alternate'} target={target ? '_blank' : '_self'} className={`${s.standardButton} ${darkBlue ? s.darkBlue : ''} ${altern ? s.alternative : ''} ${customClass || ''}`}>{text}</a>
    )
}

export default StandardButton
