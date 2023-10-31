import React from 'react'
import renderer from 'react-test-renderer'
import GCFontAwe from './GCFontAwe'

describe('Test on <GCFontAwe /> component', () => {
    test('Should not render without the props', () => {
        const componentNoprops = renderer.create(<GCFontAwe />)
        const treeNoprops = componentNoprops.toJSON()
        expect(treeNoprops).toBeNull()
    })

    test('Should render with minimum props', () => {
        const componentNoprops = renderer.create(<GCFontAwe nameIco="fa-circle" />)
        const treeNoprops = componentNoprops.toJSON()
        expect(treeNoprops).toMatchSnapshot()
    })

    test('Should not render without finalIcon', () => {
        const componentNoprops = renderer.create(<GCFontAwe nameIco="batata" />)
        const treeNoprops = componentNoprops.toJSON()
        expect(treeNoprops).toBeNull()
    })
})
