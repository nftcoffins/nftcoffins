const { localContractAddress } = require('../../secrets.json');

async function main() {
  const newOwner = 0;
  const contractFactory = await ethers.getContractFactory('Contract');
  const contract = await contractFactory.attach(localContractAddress);

  const tokenId = (await contract.totalSupply()).toNumber();
  const token = await contract.transferToken(newOwner, tokenId);
  console.log('Transfer success --> tokenId:', tokenId, ' transaction: ', token);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
