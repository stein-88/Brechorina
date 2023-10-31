import React from 'react'
import renderer from 'react-test-renderer'
import GenSuccess from './GenSuccess'
import * as schemaMocked from './data'

const localSchema = { ...schemaMocked, default: null }

describe('Test on <GenSuccess /> component', () => {
    test('Should render without props', () => {
        const componentNoprops = renderer.create(<GenSuccess />)
        const treeNoprops = componentNoprops.toJSON()
        expect(treeNoprops).toBeNull()
    })
    test('Should render with full props', () => {
        const componentNoprops = renderer.create(<GenSuccess message="Message" noButton correctContainer noPadd overTitle="overtitle" />)
        const treeNoprops = componentNoprops.toJSON()
        expect(treeNoprops).toMatchSnapshot()
    })
    test('Should not render without the schema', () => {
        localSchema.default = null
        const componentNoprops = renderer.create(<GenSuccess />)
        const treeNoprops = componentNoprops.toJSON()
        expect(treeNoprops).toBeNull()
    })
})
