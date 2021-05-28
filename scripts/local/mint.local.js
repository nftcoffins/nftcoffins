const { localContractAddress } = require('../../secrets.json');
const fetchMetadata = require('../api/methods/fetchMetadata');

async function main() {
  const contractFactory = await ethers.getContractFactory('Contract');
  const contract = await contractFactory.attach(localContractAddress);

  const totalSupply = (await contract.totalSupply()).toNumber();
  const { id, name, burning_fee = 0 } = await fetchMetadata(totalSupply + 1);

  await contract.createToken(name, burning_fee);
  console.log(`Create new token --> id: ${id}, name: ${name}, burning fee: ${burning_fee}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
