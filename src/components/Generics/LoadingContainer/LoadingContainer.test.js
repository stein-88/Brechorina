import React from 'react'
import renderer from 'react-test-renderer'
import LoadingContainer from './LoadingContainer'

describe('Test on <LoadingContainer /> component', () => {
    test('Should render without props', () => {
        const componentNoprops = renderer.create(<LoadingContainer />)
        const treeNoprops = componentNoprops.toJSON()
        expect(treeNoprops).toMatchSnapshot()
    })
})
