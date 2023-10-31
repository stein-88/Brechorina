import React from 'react'
import s from './CorrectionInput.scss'

const CorrectionInput = ({ isinValid, mainTarget, customClass }) => (
    <span data-target={mainTarget}>
        <div data-target={mainTarget} className={`${s.correctRight} ${customClass || ''} ${isinValid ? s.inValColor : ''}`}>&nbsp;</div>
        <div data-target={mainTarget} className={`${s.correctLeft} ${customClass || ''} ${isinValid ? s.inValColor : ''}`}>&nbsp;</div>
    </span>
)

export default CorrectionInput
