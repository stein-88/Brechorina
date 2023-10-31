import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import CorrectionInput from '@generics/CorrectionInput'
import s from './SelectDropdown.scss'

const SelectDropdown = ({
    items,
    filter,
    id,
    customClass,
    correctClass,
    onClick,
    noSpanfix,
    isinValid,
    grayBorder,
    mainTarget,
    multiSelect,
    maxSelect
}) => {
    if (!items || !items.length) return null
    const options = items.filter((nwIt) => nwIt && nwIt.label && typeof filter === 'string' && nwIt.label.toLowerCase().includes(filter.toLowerCase()))

    const isSelect = (val) => {
        if (!multiSelect || !multiSelect.length) return false
        return (multiSelect.filter((cv) => cv === val).length > 0)
    }

    const maxReached = !!(maxSelect && multiSelect)

    return (
        <span>
            {!noSpanfix && <CorrectionInput customClass={correctClass} mainTarget={mainTarget} grayBorder={grayBorder} isinValid={isinValid} />}
            <div data-target={mainTarget} id={id} className={`${s.dropdown} dropdown`}>
                {options && options.length > 0
                    && (
                        <div data-target={mainTarget} className={`${customClass || ''} ${grayBorder ? s.grayDrop : ''} ${isinValid ? s.invalColor : ''} ${s.dropMenu}`} aria-labelledby={id}>
                            {options.map((item) => (
                                <button
                                    data-target={mainTarget}
                                    key={uuidv4()}
                                    type="button"
                                    className={`${s.dropdownItem} ${maxReached && !(isSelect(item.value)) ? s.reached : ''} dropdown-item`}
                                    onClick={() => {
                                        if (maxReached && !(isSelect(item.value))) return null
                                        return onClick(item.value, item)
                                    }}
                                >
                                    {multiSelect && <i data-target={mainTarget} className={`${isSelect(item.value) ? 'fas' : 'far'} ${s.ball} fa-circle mr-2`} />}
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    )}
            </div>
        </span>
    )
}

export default SelectDropdown
