const { alchemyContractAddress, tokenID } = require('../secrets.json');

async function main() {
  const contractFactory = await ethers.getContractFactory('Contract');
  const contract = await contractFactory.attach(alchemyContractAddress);

  const destroyedToken = await contract.burnToken(tokenID);
  console.log('NZO destroyedToken:', destroyedToken);
  console.log('NZO destroyedToken: 1', destroyedToken.toString());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
