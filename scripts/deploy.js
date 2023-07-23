
async function main() {
  const MiiToken = await ethers.getContractFactory("MiiToken");
  const mitoken = await MiiToken.deploy(1000000);
  // await mitoken.deployed();
  console.log("Miitoken deployed to:", mitoken.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
