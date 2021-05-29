require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");

const { alchemyApiKey, mnemonic, apiKey } = require('./secrets.json');

module.exports = { //
  solidity: '0.8.0',
  networks: {
    mainnet: {
      url: `https://eth-mainnet.alchemyapi.io/v2/${alchemyApiKey}`,
      accounts: { mnemonic },
    },
  },
  etherscan: {
    apiKey
  }
};
