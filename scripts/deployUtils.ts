import { ethers } from "hardhat";

export async function deploy(contractName: string, params: any[]) {
  const MiiToken = await ethers.getContractFactory("MiiToken");
  const mitoken = await MiiToken.deploy(1000000);
  await mitoken.deployed();
  console.log("Miitoken deployed to:", mitoken.address);
}
