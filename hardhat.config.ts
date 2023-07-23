import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    ganache: {
        url: "http://127.0.0.1:8545",
        accounts:
             ['0xfe3a94ace3e6e1b85e0339b310f534051ecccd8988245c5112932c83a382347e'],
        },
    },
};

export default config;
