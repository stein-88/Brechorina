import React from 'react'
import { helperCloser } from '../../../utils'
import StandardButton from '../StandardButton/StandardButton'
import genSuccesSchema from './data'
import s from './GenSuccess.scss'

const GenSuccess = ({
    message, noButton, noPadd, overTitle, customClass,
}) => {
    if (!message || !genSuccesSchema) return null
    const { succTitle, closeButton } = genSuccesSchema
    return (
        <section className={`w-100 ${customClass || ''}`}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <p className={`${s.bold} h1 pb-4`}>{overTitle || succTitle} <i className="fas ml-3 text-success align-middle fa-check-circle" /></p>
                    </div>
                </div>
                <div className={`row ${noPadd ? '' : 'pb-4'}`}>
                    <div className={`col-12 ${noPadd ? '' : 'pb-4'}`}>
                        <p className="pb-3 h5">{message}</p>
                    </div>
                    {!noButton
                        && (
                            <div className={`col-12 text-right ${s.globeLight}`}>
                                <StandardButton
                                    darkBlue
                                    onClick={() => helperCloser()}
                                    text={closeButton}
                                    altern
                                />
                            </div>
                        )}
                </div>
            </div>
        </section>
    )
}

export default GenSuccess
