import React from 'react'
import loadingImg from '@images/loading.svg'
import s from './LoadingContainer.scss'

const LoadingContainer = ({ height100, customPadding, onLoad }) => (
    <section className={`w-100 ${height100 ? s.heigh100 : 'h-auto'} text-center ${customPadding || 'pt-5 mt-5'}`}>
        <object
            alt="Loading"
            aria-label="Loading"
            onLoad={() => {
                if (!onLoad) return null
                return onLoad()
            }}
            className={`${customPadding || 'mt-5'}`}
            width="200"
            height="200"
            data={loadingImg}
        />
    </section>
)

export default LoadingContainer
