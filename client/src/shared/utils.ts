import { TokenAttribute } from './interfaces'

export const getAttributeValue = (traitType: string, attributes: TokenAttribute[]): string | number | undefined => {
    return attributes.find((attribute) => attribute.trait_type.toUpperCase() === traitType.toUpperCase())?.value
}

export const getTokenIds = (totalSupply: number): number[] => {
    return new Array(totalSupply).fill({}).map((obj, index) => ++index)
}
