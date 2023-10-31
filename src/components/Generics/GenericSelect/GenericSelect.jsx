import React, { useState, useRef, useEffect } from 'react'
import { sleep } from '@utils'
import GenericInput from '@generics/GenericInput'
import SelectDropdown from '@generics/SelectDropdown'
import s from './GenericSelect.scss'

const GenericSelect = ({
    inputId,
    arrowClass,
    inputClass,
    correctClass,
    inputDisable,
    inputKeydown,
    inputPlace,
    inputValue,
    isinValid,
    inputOnchange,
    returnOldValue,
    dropItems,
    dropClass,
    dropClick,
    wasClicked,
    dropId,
    noForms,
    multiSelect,
    maxSelect
}) => {
    if (!dropId) return null
    const [showDrop, setShowDrop] = useState()
    const dropRef = useRef(showDrop)
    const wasClickRef = useRef(false)
    const isMounted = useRef(true)

    const dropReferSet = (data) => {
        dropRef.current = data
        return setShowDrop(data)
    }

    const handleClickOut = (e) => {
        if (!e || !e.target || !e.target.dataset) return null
        const { target } = e.target.dataset
        const mainType = !(target && target === dropRef.current)
        if (mainType && dropRef.current) return dropReferSet(null)
        return null
    }

    useEffect(() => {
        document.body.addEventListener('mousedown', handleClickOut)
        return () => {
            document.body.removeEventListener('mousedown', handleClickOut)
            isMounted.current = false
        }
    }, [])

    wasClickRef.current = wasClicked

    const sleepAndReturnRef = async () => {
        await sleep(500)
        returnOldValue(wasClickRef.current)
    }

    return (
        <section
            data-target={`dropRef${dropId}`}
            className="position-relative"
        >
            <GenericInput
                noForms={noForms}
                id={inputId}
                mainTarget={`dropRef${dropId}`}
                placeholder={inputPlace}
                value={inputValue}
                customClass={inputClass}
                onBlur={() => {
                    if (multiSelect) return null
                    if (returnOldValue) sleepAndReturnRef()
                    if (showDrop && isMounted.current) {
                        return setTimeout(() => {
                            dropReferSet(null)
                        }, 300)
                    }
                    return null
                }}
                onFocus={() => {
                    if (showDrop !== `dropRef${dropId}`) {
                        return dropReferSet(`dropRef${dropId}`)
                    }
                    return null
                }}
                isDisabled={inputDisable}
                handleKeyDown={inputKeydown}
                type="text"
                isinValid={isinValid}
                onChange={inputOnchange}
            />
            <i
                aria-hidden="true"
                data-target={`dropRef${dropId}`}
                onClick={() => {
                    if (showDrop !== `dropRef${dropId}`) {
                        return dropReferSet(`dropRef${dropId}`)
                    }
                    return dropReferSet(null)
                }}
                className={`fas ${s.dropButton} ${arrowClass || ''} ${isinValid ? s.invalid : ''} float-right ${showDrop ? 'fa-sort-up mt-3' : 'fa-sort-down'}`}
            />
            {showDrop && showDrop === `dropRef${dropId}`
                && (
                    <SelectDropdown
                        id={dropId}
                        mainTarget={`dropRef${dropId}`}
                        customClass={dropClass}
                        correctClass={correctClass}
                        items={dropItems}
                        filter={inputValue}
                        onClick={dropClick}
                        isinValid={isinValid}
                        multiSelect={multiSelect}
                        maxSelect={maxSelect}
                    />
                )}
        </section>
    )
}

export default GenericSelect
