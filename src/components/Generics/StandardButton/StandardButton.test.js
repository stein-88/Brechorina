import React from 'react'
import renderer from 'react-test-renderer'
import StandardButton from './StandardButton'

describe('Test on <StandardButton /> component', () => {
    test('Should return null without props', () => {
        const componentNoprops = renderer.create(<StandardButton />)
        const treeNoprops = componentNoprops.toJSON()
        expect(treeNoprops).toBeNull()
    })

    test('Should render and return a instead of span', () => {
        const componentNoprops = renderer.create(<StandardButton text="Ciapush" link="/ciapek" />)
        const treeNoprops = componentNoprops.toJSON()
        const fejiao = componentNoprops.root.findAllByProps({ href: '/ciapek' })
        expect(fejiao).toHaveLength(1)
        expect(treeNoprops.type).toEqual('a')
        expect(treeNoprops).toMatchSnapshot()
    })

    test('Should render and return span instead of a', () => {
        const componentNoprops = renderer.create(<StandardButton text="Ciapush" customClass="randomClass" onClick={() => null} />)
        const treeNoprops = componentNoprops.toJSON()
        expect(treeNoprops.type).toEqual('span')
        expect(treeNoprops.props.className).toEqual(expect.stringContaining('randomClass'))
        expect(treeNoprops.children).toHaveLength(1)
        expect(treeNoprops.children[0]).toEqual('Ciapush')
        expect(treeNoprops).toMatchSnapshot()
    })
})
