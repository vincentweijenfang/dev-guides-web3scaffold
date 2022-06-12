const hre = require('hardhat')
const fs = require('@supercharge/fs')

// 將合約 deploy 之後，複製一份 abi 和 address 至 frontend 資料夾
async function deployContract(contractName, params = []) {

  const contractFactory = await hre.ethers.getContractFactory(contractName)

  const contract = await contractFactory.deploy(...params)

  const contractDeployed = await contract.deployed()

  console.log(contractDeployed)

  // 將 address 和 abi 塞進前端資料夾
  try { 
    const contractData = await fs.readFile(`./artifacts/contracts/${contractName}.sol/${contractName}.json`, { encoding: 'utf8' });

    await fs.ensureFile(`../frontend/contracts/${contractName}.json`)
    await fs.writeFile(
      `../frontend/contracts/${contractName}.json`,
      JSON.stringify(
        Object.assign(
          JSON.parse(contractData),
          { address: contract.address }
        )
      , null, 2),
    )
    console.log(`update contract to ../frontend/contracts/${contractName}.json`)
  } catch (error) {
    console.log(error)
  }

}





async function main() {
  
  // 部署合約 通通寫在這裡

  /**
   * await deployContract(name, params)
   * @param name = 合約名稱（非檔案名稱）
   * @param params = 參數：若有多個，以陣列表示 [param1, param2]
   */ 

  await deployContract('MaxNFT')

}







// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
