export interface TokenJson {
    id: number
    name: string
    description: string
    image: string
    external_url: string
    burning_fee: number
    attributes: TokenAttribute[]
}

export interface TokenAttribute {
    trait_type: string
    value: number | string
    display_type?: string
}

export interface GeneralInfo {
    totalSupply: number
    prices: Record<string, number>
}
