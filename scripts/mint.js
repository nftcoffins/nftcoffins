const fetchMetadata = require('../scripts/api/methods/fetchMetadata');
const validateBeforeMint = require('../scripts/api/methods/validateBeforeMint');
const setTokenSupplyValue = require('../scripts/api/utils/setTokenSupplyValue');
const { alchemyContractAddress } = require('../secrets.json');

async function main() {
  const contractFactory = await ethers.getContractFactory('Contract');
  const contract = await contractFactory.attach(alchemyContractAddress);

  const totalSupply = (await contract.totalSupply()).toNumber();
  const { id, name, burning_fee = 0 } = await fetchMetadata(totalSupply + 1);

  if (await validateBeforeMint(id)) {
      setTokenSupplyValue(id);

      await contract.createToken(name, burning_fee);
      console.log(`New token created --> id: ${id}, name: ${name}, burning fee: ${burning_fee}`);
  } else {
      throw new Error('Unknown mint error')
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

