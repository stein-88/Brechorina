import React from 'react'
import s from './GCCarousel.scss'

const GCCarousel = ({ allContent, mainRefer, customClass }) => {
    if (allContent?.length < 2 || !mainRefer) return null
    return (
        <section className="w-100">
            <div id={mainRefer} className={`carousel slide ${customClass || ''}`} data-ride="carousel">
                <div className={`carousel-inner ${mainRefer}Inner row m-0 w-100`}>
                    {allContent?.map((content, ind) => (
                        <div key={`carousel${mainRefer}${ind + 1}`} className={`carousel-item col-12 ${ind === 0 ? 'active' : ''}`}>
                            {content}
                        </div>
                    ))}
                </div>
                <a className={`${s.carCtrl} ${s.carPrev} carousel-control-prev`} href={`#${mainRefer}`} role="button" data-slide="prev">
                    <span className={`${s.carCommon} ${s.carLeft} carousel-control-prev-icon`} aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </a>
                <a className={`${s.carCtrl} ${s.carNext} carousel-control-next`} href={`#${mainRefer}`} role="button" data-slide="next">
                    <span className={`${s.carCommon} ${s.carRight} carousel-control-next-icon`} aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </section>
    )
}

export default GCCarousel
