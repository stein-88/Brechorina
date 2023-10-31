import React from 'react'
import GenClickBox from '@generics/GenClickBox'
// import { scrollBind, sleep } from '@utils'
import InnerPlan from '../OurPlans/InnerPlan'
import AreYou from './AreYou'
// import data from '../OurPlans/data'
import s from './Questions.scss'

const Questions = () => {
    // const [showBest, setBest] = useState()

    /* 
    
    estou pensando em reogarnizar os steps, criar um array com as respostas talvez, para dar uma nocao geral dos processos.
    cada id/refer teria seu proprio array caso fosse respondido mais de uma vez o procedimento.
    
    */
    const showBest = false
    return (
        <section className="w-100">
            <section className={`w-100 ${s.headerBg} py-lg-5 py-0`}>
                <div className="container py-lg-5 py-4">
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <p className={`${s.bold} display-lg-2 h1`}>Brechorina</p>
                            <p className="h5 h-lg-2 mb-4 mb-lg-0">Encontre o preço ideal para sua peça de brechó!</p>
                        </div>
                        <div className="col-12 col-lg-6">
                            <GenClickBox
                                noScale
                                isDisabled
                                customClass={`${s.clickBox} p-4`}
                                text={(<AreYou champz={showBest} />)}
                            />
                        </div>
                    </div>
                </div>
            </section>
            {showBest
                && (
                    <div id="bestMatch" className="container">
                        <div className="row">
                            <div className="col-12">
                                <p className={`${s.bold} text-center py-5 mb-0 h-lg-1 h4`}>A recomendação de preço é:</p>
                                <GenClickBox
                                    noScale
                                    isDisabled
                                    customClass={`h-auto mb-4 ${s.fullBox}`}
                                    text={(<InnerPlan data={showBest} />)}
                                />
                            </div>
                        </div>
                    </div>
                )}
        </section>
    )
}

export default Questions
