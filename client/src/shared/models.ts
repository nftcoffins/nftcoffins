import { TokenJson } from './interfaces'
import { getAttributeValue } from './utils'
import { WEB_IMAGE_NAME } from './constants'

export class Token {
    id: number
    name: string
    description: string
    externalUrl: string
    image: string
    webImage: string
    burningFee: number
    rank: string
    category: string
    subcategory: string
    featuresCount: number
    coffinStatus: string
    bornMillis: number
    diedMillis: number | undefined

    constructor(tokenJson: TokenJson) {
        const { id, attributes, burning_fee, description, external_url, image, name } = tokenJson

        this.id = id
        this.name = name
        this.description = description
        this.burningFee = burning_fee
        this.externalUrl = external_url
        this.image = image
        this.webImage = `${this.externalUrl}/${WEB_IMAGE_NAME}`
        this.rank = getAttributeValue('rank', attributes) as string
        this.category = getAttributeValue('category', attributes) as string
        this.subcategory = getAttributeValue('subcategory', attributes) as string
        this.coffinStatus = getAttributeValue('coffin status', attributes) as string
        this.featuresCount = getAttributeValue('features', attributes) as number
        this.bornMillis = getAttributeValue('born', attributes) as number
        this.diedMillis = getAttributeValue('died', attributes) as number
    }
}
