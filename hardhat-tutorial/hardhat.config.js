require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: ".env" });

const POLYGON_MAINNET_URL = process.env.POLYGON_MAINNET_URL;
const POLYGON_TESTNET_URL = process.env.POLYGON_TESTNET_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const POLYSCAN_API = process.env.POLYSCAN_API;

module.exports = {
  solidity: "0.8.9",
  networks: {
    matic: {
      url: POLYGON_TESTNET_URL,
      accounts: [PRIVATE_KEY]
    },
  },
    etherscan: {
      apiKey: POLYSCAN_API
    }
  };