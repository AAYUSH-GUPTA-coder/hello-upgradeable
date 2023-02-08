const { ethers, upgrades } = require("hardhat");

// storing the address of proxy contract
const PROXY = "0x3E3E09238756B9d23755703b7F5360124D7581Ad";

async function main() {
  const BoxV2 = await ethers.getContractFactory("BoxV2");
  await upgrades.upgradeProxy(PROXY, BoxV2);
    console.log("Box upgraded");
    console.log("BoxV2 deployed to:", BoxV2.address);
}

main()
