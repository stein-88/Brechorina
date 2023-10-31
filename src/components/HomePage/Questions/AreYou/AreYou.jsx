import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import StandardButton from '@generics/StandardButton'
import LoadingContainer from '@generics/LoadingContainer'
import { sleep } from '@utils'
import schema from './data'
import s from './AreYou.scss'

const AreYou = ({ champz }) => {
    if (!schema) return null
    const [step, setStep] = useState(0)
    const [answ, setAnsw] = useState({})
    const [finalPrice, setFinalPrice] = useState(0)
    const [isLoading, setIsLoading] = useState()
    const { allSteps, chmpSch } = schema || {}

    let current = allSteps[step]
    if (champz) current = chmpSch

    const handleQuestions = async (act, refer) => {
        setAnsw({ ...answ, [act]: refer })
        console.log(act, refer)
        if (act === 'goodbranch') {
            setFinalPrice(finalPrice + 10)
        }
        if (act === 'medbranch') {
            setFinalPrice(finalPrice + 5)
        }
        // if (act === 'nobranch') {

        // }
        if (refer === 'no') return setStep(8)
        setIsLoading(true)
        await sleep(400)
        setStep(step + 1)
        return setIsLoading(false)
    }

    const {
 qTitle, mainAct, acts, subTitle, 
} = current || {}

    if (isLoading) {
 return (
        <section className={s.lockedSize}>
            <section className={`w-100 py-4 text-center  ${s.cleanAbs} ${s.absoluteMiddle}`}>
                <LoadingContainer customPadding="p-0 m-0" />
            </section>
        </section>
    ) 
}

    return (
        <section className={s.lockedSize}>
            <small
                className={`${s.bold} ${s.pointer} ${s.resetPositiion} text-danger`}
                aria-hidden="true"
                onClick={() => {
                    setStep(0)
                    setFinalPrice(0)
                    return setAnsw({})
                }}
            >
                Reset
            </small>
            <section className={`w-100 py-sm-4 py-0 text-center ${s.cleanAbs} ${s.absoluteMiddle}`}>
                <p className={`s.bold ${s.bold} h-lg-2 h4 mb-4`}>{qTitle}</p>
                {subTitle && <p>{subTitle}</p>}
                {champz && <p className={`s.bold ${s.bold} text-primary h-lg-4 h5 mb-0`}>{champz?.title}</p>}
                <section className="w-100">
                    {acts?.map((cv, ind) => (
                        <span className={s.smallBlock} key={uuidv4()}>
                            <StandardButton darkBlue customClass={`py-1 ${s.bold} px-4 ${ind + 1 === acts.length ? '' : 'mr-sm-3 mr-0 mb-3'}`} text={<small>{cv.label}</small>} onClick={() => handleQuestions(mainAct, cv.refer)} />
                        </span>
                    ))}
                </section>
            </section>
        </section>
    )
}

export default AreYou
