import React from 'react'
import renderer from 'react-test-renderer'
import CorrectionInput from './CorrectionInput'

describe('Test on <CorrectionInput /> component', () => {
    test('Should render without props', () => {
        const componentNoprops = renderer.create(<CorrectionInput />)
        const treeNoprops = componentNoprops.toJSON()
        expect(treeNoprops).toMatchSnapshot()
    })
    test('Should render with arabic language props', () => {
        const componentNoprops = renderer.create(<CorrectionInput isinValid mainTarget />)
        const treeNoprops = componentNoprops.toJSON()
        expect(treeNoprops).toMatchSnapshot()
    })
})
