import GCCarousel from '@generics/GCCarousel'

const mapComp = {
    GCCarousel,
}

const schema = {
    permComp: ['box', ...Object.keys(mapComp)],
    mapComp,
}

export default schema
