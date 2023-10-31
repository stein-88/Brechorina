import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import schema from './data'

const Box = ({
    type, content = [], secClass, rowClass, contFluid, contClass, attrBox
}) => {
    if (!type || !schema?.includes(type)) return null

    if (type === 'span') {
        return (
            <span {...(attrBox || {})} className={`d-inline-block ${secClass || ''}`}>
                {content?.map((ele, ind) => {
                    const { refer, customClass, asset } = ele || {}
                    return (
                        <span key={refer ? `${refer}${ind + 1}` : uuidv4()} className={`${customClass || ''}`}>
                            {asset}
                        </span>
                    )
                })}
            </span>
        )
    }

    const columns = content?.map((ele, ind) => {
        const { colClass, refer, asset } = ele || {}
        return (
            <div {...((type === 'col' && attrBox) || {})} key={refer ? `${refer}${ind + 1}` : uuidv4()} className={`${colClass || 'col-12'}`}>
                {asset}
            </div>
        )
    })

    const rows = (
        <div {...((type === 'row' && attrBox) || {})} className={`row ${rowClass || ''}`}>
            {columns}
        </div>
    )

    if (type === 'row') return rows

    if (type === 'container') {
        return (
            <div {...((type === 'container' && attrBox) || {})} className={`${contFluid ? 'container-fluid' : `container`} ${contClass || ''}`}>
                {rows}
            </div>
        )
    }
    if (type === 'section') {
        return (
            <section {...((type === 'section' && attrBox) || {})} className={`w-100 ${secClass || ''}`}>
                {content?.map((ele, ind) => {
                    const { refer, customClass, asset } = ele || {}
                    return (
                        <span key={refer ? `${refer}${ind + 1}` : uuidv4()} className={`${customClass || ''}`}>
                            {asset}
                        </span>
                    )
                })}
            </section>
        )
    }
    return columns
}

export default Box
