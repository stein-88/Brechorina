import React from 'react'
import { helperCloser } from '@utils'
import StandardButton from '../StandardButton/StandardButton'
import GenErrorSchema from './data'
import s from './GenError.scss'

const GenError = ({
    message, noButton, customClass,
}) => {
    if (!message || !GenErrorSchema) return null
    const { someWrong, detail, closeButton } = GenErrorSchema
    return (
        <section className={`w-100 ${customClass || ''}`}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <p className={`${s.bold} h1 pb-4`}>{someWrong} <i className={`fas ml-3 ${s.txtError} align-middle fa-exclamation-circle`} /></p>
                    </div>
                </div>
                <div className="row pb-4">
                    <div className="col-12 pb-4">
                        <p className="pb-3 mb-0 h5">{detail}:</p>
                        <p className="pb-3 h5"><span className={s.txtError}>{message}</span></p>
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

export default GenError
