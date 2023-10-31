import React from 'react'
import renderer from 'react-test-renderer'
import GenError from './GenError'
import * as schemaMocked from './data'

const localSchema = { ...schemaMocked, default: null }

describe('Test on <GenError /> component', () => {
    test('Should render without props', () => {
        const componentNoprops = renderer.create(<GenError />)
        const treeNoprops = componentNoprops.toJSON()
        expect(treeNoprops).toBeNull()
    })
    test('Should render with full props', () => {
        const componentNoprops = renderer.create(<GenError message="Message" noButton correctContainer />)
        const treeNoprops = componentNoprops.toJSON()
        expect(treeNoprops).toMatchSnapshot()
    })
    test('Should not render without the schema', () => {
        localSchema.default = null
        const componentNoprops = renderer.create(<GenError />)
        const treeNoprops = componentNoprops.toJSON()
        expect(treeNoprops).toBeNull()
    })
})
