import { API_URL } from '../constants'
import { TokenDataType } from '../types'

export const fetchTokenData = (tokenId: number, type: TokenDataType) => {
    const filename = getFilename(tokenId, type)

    return fetch(`${API_URL}items/${tokenId}/${filename}`)
}

const getFilename = (tokenId: number, type: TokenDataType): string => {
    switch (type) {
        case TokenDataType.Image:
            return `${tokenId}.jpg`
        case TokenDataType.WebImage:
            return 'web.jpg'
        case TokenDataType.Json:
            return 'index.json'
    }
}
