const { ethers } = require("hardhat");
require("@nomiclabs/hardhat-etherscan");

async function main() {
  await hre.run("verify:verify", {
    address: "0xbf277B00169230C533Be37122A26653CeDC627bd",
    constructorArguments: [],
    // contract: "contracts/Box.sol:Box",
  });
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
