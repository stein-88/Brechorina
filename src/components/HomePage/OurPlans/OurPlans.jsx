import React from 'react'
import GenClickBox from '@generics/GenClickBox'
import GenCollapse from '@generics/GenCollapse'
import StandardButton from '@generics/StandardButton'
import { isLogin } from '@utils'
import InnerPlan from './InnerPlan'
import data from './data'
import s from './OurPlans.scss'

const OurPlans = () => {
    if (!data?.length) return null

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
        <div className="container">
            <div className="row">
                <div className="col-12 pb-5">
                    <p className={`${s.bold} text-center mb-5 h-lg-1 h2`}>O preço minimo sugerido é:</p>
                    {data.map((cv, cvInd) => {
                        if (!cv) return null
                        const {
 title, smTitle, price, btn, 
} = cv
                        return (
                            <section key={`mainPlan${cvInd + 1}`} className="w-100">
                                <GenClickBox
                                    noScale
                                    isDisabled
                                    customClass={`h-auto mb-4 ${s.fullBox} ${cvInd % 2 === 0 ? '' : s.light}`}
                                    text={(
                                        <GenCollapse
                                            noHr
                                            noSpace
                                            innerCustom={`${s.ArrowPosit} h2`}
                                            content={(
                                                <div className="row m-0">
                                                    <div className="col-12 col-lg text-center text-lg-left">
                                                        <p className={`${smTitle ? 'h-lg-4' : 'h-lg-2'} h5 ${s.bold} mb-lg-0 mb-4`}>{title}</p>
                                                    </div>
                                                    <div className="col-12 col-lg text-center">
                                                        <p className={`${s.arial} mb-lg-0 mb-4`}>{price}</p>
                                                    </div>
                                                    <div className="col-12 col-lg text-lg-right text-center">
                                                        <StandardButton text={btn?.text} onClick={() => handleClick(btn?.ref)} darkBlue customClass={`${btn?.customClass || ''}`} />
                                                    </div>
                                                </div>
                                            )}
                                        >
                                            <InnerPlan data={cv} />
                                        </GenCollapse>
                                    )}
                                />
                            </section>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default OurPlans
