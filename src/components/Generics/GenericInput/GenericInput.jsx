import React from 'react'
import s from './GenericInput.scss'

const GenericInput = ({
    placeholder,
    type,
    id,
    required,
    onClick,
    customClass,
    value,
    onFocus,
    onBlur,
    onChange,
    noForms,
    mainTarget,
    handleKeyDown,
    isinValid,
    specialProps,
    isDisabled,
    maxLength,
    checked,
    inputName,
    inpuLabel,
    inlineType,
    customMargin,
}) => {
    if (!type) return null
    const finalProps = specialProps || {}
    if (type === 'textarea') {
        return (
            <textarea
                className={`${customClass || ''} ${s.customInput} ${s.textArea}`}
                placeholder={placeholder || ''}
                required={required || false}
                id={id}
                value={value || ''}
                onClick={onClick}
                onChange={onChange}
                maxLength={maxLength}
                onKeyDown={handleKeyDown}
                {...finalProps}
            />
        )
    }
    if (noForms) {
        return (
            <input
                className={`${customClass || ''} ${isDisabled ? s.disabled : ''} ${isinValid ? s.inVal : ''} ${s.customInput}`}
                placeholder={placeholder || ''}
                required={required || false}
                data-target={mainTarget}
                type={type}
                id={id}
                maxLength={maxLength}
                disabled={isDisabled}
                onFocus={onFocus}
                onBlur={onBlur}
                onClick={onClick}
                value={value || ''}
                onChange={onChange}
                {...finalProps}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' && handleKeyDown) return handleKeyDown()
                    return null
                }}
            />
        )
    }

    if (type === 'radio') {
        return (
            <div className={`form-check ${inlineType ? `${customMargin || 'mr-4'} form-check-inline` : 'mb-2'}`}>
                <input
                    disabled={isDisabled}
                    className="form-check-input"
                    checked={checked}
                    onChange={onChange}
                    onClick={onClick}
                    type={type}
                    name={inputName}
                    id={id}
                />
                {inpuLabel && <label className={`${customClass || ''} form-check-label`} htmlFor={id}>{inpuLabel}</label>}
            </div>
        )
    }

    return (
        <form data-target={mainTarget} autoComplete="off">
            <input data-target={mainTarget} autoComplete="new-password" className="d-none" name="hidden" type="text" />
            <input
                className={`${customClass || ''} ${isDisabled ? s.disabled : ''} ${isinValid ? s.inVal : ''} ${s.customInput}`}
                placeholder={placeholder || ''}
                required={required || false}
                data-target={mainTarget}
                type={type}
                id={id}
                maxLength={maxLength}
                disabled={isDisabled}
                onFocus={onFocus}
                onBlur={onBlur}
                onClick={onClick}
                value={value || ''}
                onChange={onChange}
                {...finalProps}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' && handleKeyDown) return handleKeyDown()
                    return null
                }}
            />
        </form>
    )
}

export default GenericInput
