require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("hardhat-deploy");
require("solidity-coverage");
require("hardhat-gas-reporter");
require("hardhat-contract-sizer");
require("dotenv").config();

const RINKEBY_RPC_URL =
  process.env.RINKEBY_RPC_URL ||
  "https://eth-rinkeby.alchemyapi.io/v2/your_key_here";
const MAINNET_RPC_URL =
  process.env.MAINNET_RPC_URL ||
  "https://eth-mainnet.g.alchemy.com/v2/your_key_here";
const PRIVATE_KEY =
  process.env.PRIVATE_KEY ||
  "0000000000000000000000000000000000000000000000000000000000000000";
const COINMARKET_API_KEY =
  process.env.COINMARKET_API_KEY || "0000000000000000000000000000000";
const ETHERSCAN_API_KEY =
  process.env.ETHERSCAN_API_KEY || "000000000000000000000000000000000";

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.8",
      },
      {
        version: "0.6.12",
      },
      {
        version: "0.4.19",
      },
    ],
  },
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 31337,
      forking: {
        url: MAINNET_RPC_URL,
      },
      blockConfirmations: 1,
    },
    localhost: {
      chainId: 31337,
      blockConfirmations: 1,
    },
    rinkeby: {
      chainId: 4,
      blockConfirmations: 6,
      url: RINKEBY_RPC_URL,
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  namedAccounts: {
    deployer: {
      default: 0,
      1: 0,
    },
  },
  mocha: {
    timeout: 500000, // 500 seconds max for running tests
  },
};
