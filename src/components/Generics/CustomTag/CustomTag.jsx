import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import atomEle from './data'

const CustomTag = ({
    type, children, attr, compName,
}) => {
    const { validTags } = atomEle || {}
    if (!(validTags || [])?.includes(type) || (type === 'comp' && !atomEle[compName])) return null
    const Tag = atomEle[compName] || type
    const finalChildren = children?.filter((cv) => cv) || []
    if (!finalChildren?.length) return <Tag {...attr} />
    return (
        <Tag {...attr}>
            {finalChildren.map((ele) => {
                const { content, refer } = ele || {}
                if (ele?.type === 'text') return content
                return <CustomTag key={refer || uuidv4()} {...ele} />
            })}
        </Tag>
    )
}

export default CustomTag
