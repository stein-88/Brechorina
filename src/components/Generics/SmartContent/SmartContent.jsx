import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import CustomTag from '../CustomTag'
import Box from '../Box'
import schema from './data'

const SmartContent = ({ allData, ...rest }) => {
    if (!allData?.length || !schema) return null
    const { mapComp, permComp } = schema || {}
    return (
        <section className="w-100">
            {allData?.map((item) => {
                const {
                    content, refer, compType, propsData,
                } = item || {}
                if (!permComp.includes(compType)) return null
                const Comp = mapComp?.[compType]
                const checkComp = (compType === 'box' && !Comp)
                return (
                    <section key={refer || uuidv4()} className="w-100">
                        {!checkComp && <Comp {...rest} {...propsData} />}
                        {checkComp && (
                            <Box
                                {...item}
                                content={content?.map((ele) => {
                                    if (ele?.compType === 'box') return { ...ele, asset: <SmartContent {...(ele || {})} /> }
                                    return { ...ele, asset: <CustomTag {...(ele?.asset || {})} /> }
                                })}
                            />
                        )}
                    </section>
                )
            })}
        </section>
    )
}

export default SmartContent
