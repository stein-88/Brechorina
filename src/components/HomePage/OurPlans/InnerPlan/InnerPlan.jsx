import React from 'react'
import StandardButton from '@generics/StandardButton'
import { v4 as uuidv4 } from 'uuid'
import { isLogin } from '@utils'
import s from './InnerPlan.scss'

const InnerPlan = ({ data }) => {
    if (!data) return null
    const { title, btn, expandCol } = data

    const handleClick = (ref) => {
        const userLogged = isLogin()
        let mainRef = '/register'
        if (userLogged && ref !== 'taking') mainRef = `/subscription?clicked=${ref}`
        if (ref === 'taking' && userLogged) mainRef = '/search'
        if (ref === 'contactus') mainRef = '/#contactus'
        window.location.href = mainRef
        return null
    }

    return (
        <section className="w-100">
            <div className="row m-0">
                <div className="col-12 col-lg text-center text-lg-left mb-4">
                    <p className={`h-lg-2 h5 ${s.bold}`}>{title}</p>
                </div>
                <div className="col-12 col-lg text-lg-right text-center mb-4">
                    <StandardButton text={btn?.text} onClick={() => handleClick(btn?.ref)} darkBlue customClass={`${btn?.customClass || ''}`} />
                </div>
            </div>
            <div className="row m-0">
                {expandCol.map((obj, objInd) => (
                    <div key={uuidv4()} className={`col-12 ${objInd === 0 ? 'col-lg-5 mb-4 mb-lg-0' : 'col-lg offset-lg-1'}`}>
                        {obj.map((txt) => (
                            <p key={uuidv4()} className={txt?.className}>{txt?.text}</p>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default InnerPlan
