const fetch = require('node-fetch')
const { baseUrl } = require('../../../base.config')

module.exports = async function fetchMetadata() {
    return fetch(baseUrl).then((res) => (res.ok ? res.json() : {}))
}
