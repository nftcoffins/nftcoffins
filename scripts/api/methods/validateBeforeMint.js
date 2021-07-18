const fetchApiConfig = require('./fetchApiConfig')
const getTokenSupplyValue = require('../utils/getTokenSupplyValue')

module.exports = async function validateBeforeMint(tokenId) {
    const calls = [getTokenSupplyValue(), fetchApiConfig()]
    const [storageValue, { totalSupply, prices }] = await Promise.all(calls)

    if (!tokenId) {
        throw new Error(`Token not defined.`)
    }
    if (storageValue >= tokenId) {
        throw new Error(`Token "${tokenId}" possible already created.`)
    }
    if (tokenId > totalSupply || storageValue >= totalSupply) {
        throw new Error(`Conflict between metadata for "${tokenId}" token.`)
    }
    if (totalSupply !== Object.keys(prices).length) {
        throw new Error('API: conflict. Total supply value should be equal price`s length.')
    }
    return tokenId;
}
