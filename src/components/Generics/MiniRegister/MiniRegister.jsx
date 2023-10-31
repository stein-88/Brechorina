import React, { useState } from 'react'
import GenClickBox from '@generics/GenClickBox'
import GenericInput from '@generics/GenericInput'
import StandardButton from '@generics/StandardButton'
import GenericSelect from '@generics/GenericSelect'
import { handleAll, stringRefDrop } from '@utils'
import joinForm from './data'
import s from './MiniRegister.scss'

const MiniRegister = ({ genClickClass }) => {
    if (!joinForm?.length) return null
    const [allValues, setAllVal] = useState({})
    const handleInp = (obj) => {
        if (!obj) return null
        return setAllVal({
            ...allValues,
            ...obj
        })
    }

    return (
        <GenClickBox
            noScale
            isDisabled
            customClass={`${genClickClass || `${s.clickBox} px-2 py-4`}`}
            text={(
                <div className="row m-0">
                    {joinForm?.map((cForm, ind) => (
                        <div key={`formMiniRegister${ind + 1}`} className={`col-12 ${cForm?.fullCol ? '' : 'col-lg'}`}>
                            {cForm?.data?.map((fr) => {
                                if (fr.type === 'select') {
                                    return (
                                        <section key={`joinSpecForm${fr.value}`} className="position-relative">
                                            <GenericSelect
                                                arrowClass={s.arrowPosition}
                                                correctClass={s.correctSides}
                                                inputClass={fr.customClass}
                                                inputId={fr.value}
                                                inputPlace={fr.placeHolder}
                                                inputValue={allValues[fr.value] || ''}
                                                inputOnchange={(e) => handleAll(e, handleInp)}
                                                dropItems={stringRefDrop(fr.options)}
                                                dropClick={(val) => handleInp({ [fr?.value]: val })}
                                                dropId={`drop${fr?.value}`}
                                            />
                                        </section>
                                    )
                                }
                                return (
                                    <span key={`joinSpecForm${fr.value}`}>
                                        <GenericInput
                                            id={fr.value}
                                            type={fr.type}
                                            onChange={(e) => handleAll(e, handleInp)}
                                            value={allValues[fr.value] || ''}
                                            placeholder={fr.placeHolder}
                                            customClass={fr.customClass}
                                        />
                                    </span>
                                )
                            })}
                        </div>
                    ))}
                    <div className="col-12 text-right mt-3">
                        <StandardButton
                            darkBlue
                            onClick={() => console.log('send')}
                            text="Send"
                            customClass={`py-2 px-5 ${s.gcBdRadius10}`}
                        />
                    </div>
                </div>
            )}
        />
    )
}

export default MiniRegister
