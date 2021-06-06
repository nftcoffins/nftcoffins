import { API_URL } from './constants'
import { Token } from './models'
import { GeneralInfo } from './interfaces'

export const fetchToken = (tokenId: number): Promise<Token> => {
    return fetch(`${API_URL}items/${tokenId}/`)
        .then((response) => response.json())
        .then((tokenJson) => new Token(tokenJson))
}

export const fetchGeneralInfo = (): Promise<GeneralInfo> => {
    return fetch(`${API_URL}`).then((response) => response.json())
}
