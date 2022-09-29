const { ethers } = require("hardhat");

async function main() {
  /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so myminiblogContract here is a factory for instances of our MyMiniBlog contract.
  */
  const myminiblogContract = await ethers.getContractFactory("MyMiniBlog");

  // here we deploy the contract & 100 is the Maximum number of myminiblog addresses allowed
  const deployedMyMiniBlogContract = await myminiblogContract.deploy();


  // Wait for it to finish deploying
  await deployedMyMiniBlogContract.deployed();

  // print the address of the deployed contract
  console.log("My Mini Blog Contract Address:", deployedMyMiniBlogContract.address);

  console.log("Sleeping.....");
  // Wait for etherscan to notice that the contract has been deployed
  await sleep(30000);

  // Verify the contract after deploying
  await hre.run("verify:verify", {
    address: deployedMyMiniBlogContract.address,
    constructorArguments: [],
  });
};


function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}


// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });