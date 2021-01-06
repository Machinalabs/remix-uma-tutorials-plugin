import { asciiToHex, toHex, toWei } from "web3-utils"
import { BigNumber, ethers, utils } from "ethers"
import { RemixClientInstanceType } from "../../hooks"
import { debug, defaultTransactionValues } from "../../utils"

import FinderArtifact from "@uma/core/build/contracts/Finder.json"
import TimerArtifact from "@uma/core/build/contracts/Timer.json"
import VotingTokenArtifact from "@uma/core/build/contracts/VotingToken.json"
import VotingArtifact from "@uma/core/build/contracts/Voting.json"
import IdentifierWhiteListArtifact from "@uma/core/build/contracts/IdentifierWhitelist.json"
import RegistryArtifact from "@uma/core/build/contracts/Registry.json"
import FinancialContractsAdminArtifact from "@uma/core/build/contracts/FinancialContractsAdmin.json"
import StoreArtifact from "@uma/core/build/contracts/Store.json"
import ExpiringMultiPartyCreatorArtifact from "@uma/core/build/contracts/ExpiringMultiPartyCreator.json"
import GovernorArtifact from "@uma/core/build/contracts/Governor.json"

export type Bytes20 = string
export type EthereumAddress = Bytes20

export interface Result {
  error?: Error
  success: boolean
}

export interface Options {
  from: EthereumAddress
  clientInstance: RemixClientInstanceType
}

export interface IDeployer {
  deploy: (options: Options) => Promise<Map<UMAContractName, EthereumAddress>> // TODO Review why it is compiling even if classes are not implementing the interface
}

enum InterfaceName {
  FinancialContractsAdmin = "FinancialContractsAdmin",
  Oracle = "Oracle",
  Registry = "Registry",
  Store = "Store",
  IdentifierWhitelist = "IdentifierWhitelist",
}

enum RegistryRoles {
  OWNER = "0",
  CONTRACT_CREATOR = "1",
}

const assert = (value: any) => {
  const isDefined = () => {
    if (value === undefined) {
      throw new Error(`Undefined value found`)
    }
  }

  const isString = () => {
    if (!Boolean(value)) {
      throw new Error(`Not a string value found`)
    }
  }

  return {
    isDefined,
    isString,
  }
}

export type UMAContractName =
  | "Timer"
  | "VotingToken"
  | "IdentifierWhitelist"
  | "Finder"
  | "Voting"
  | "Registry"
  | "FinancialContractAdmin"
  | "Store"
  | "Governor"
  | "DesignatedVotingFactory"
  | "TokenFactory"
  | "AddressWhitelist"
  | "ExpiringMultiPartyCreator"
  | "TestnetErc20Address"


export class UMADeployer implements IDeployer {
  async deploy(options: Options) {
    const addresses = new Map<UMAContractName, EthereumAddress>()

    const clientInstance = options.clientInstance

    const web3Provider = {
      sendAsync(payload, callback) {
        clientInstance
          .call("web3Provider" as any, "sendAsync", payload)
          .then((result) => callback(null, result))
          .catch((e) => {
            // console.log("Here is the error", e)
            callback(e)
          })
      },
    }

    const provider = new ethers.providers.Web3Provider(web3Provider)
    debug("Provider", provider)

    const signer = provider.getSigner()
    debug("Signer", signer)

    const accounts = await provider.listAccounts()
    console.log("Accounts", accounts[0])

    const fromAddress = accounts[0]
    // 1) Deploy finder
    const finderFactory = new ethers.ContractFactory(FinderArtifact.abi, FinderArtifact.bytecode, signer)
    const finderContract = await finderFactory.deploy();
    const FinderInstanceAddres = finderContract.address
    await finderContract.deployTransaction.wait()

    console.log("finderContract", finderContract)
    assert(FinderInstanceAddres).isDefined()
    assert(FinderInstanceAddres).isString()
    debug("Finder deployed", FinderInstanceAddres)

    addresses.set("Finder", FinderInstanceAddres)

    // 2) Deploy timer
    const timerFactory = new ethers.ContractFactory(TimerArtifact.abi, TimerArtifact.bytecode, signer)
    const timerContract = await timerFactory.deploy();
    const TimerInstanceAddress = timerContract.address
    timerContract.deployTransaction.wait()

    assert(TimerInstanceAddress).isDefined()
    assert(TimerInstanceAddress).isString()
    debug("Timer deployed", TimerInstanceAddress)
    addresses.set("Timer", TimerInstanceAddress)

    // 3) Deploy voting token
    const votingTokenFactory = new ethers.ContractFactory(VotingTokenArtifact.abi, VotingTokenArtifact.bytecode, signer)
    const votingTokenContract = await votingTokenFactory.deploy();
    const VotingTokenInstanceAddress = votingTokenContract.address
    votingTokenContract.deployTransaction.wait()

    assert(VotingTokenInstanceAddress).isDefined()
    assert(VotingTokenInstanceAddress).isString()
    debug("Voting Token deployed", VotingTokenInstanceAddress)
    addresses.set("VotingToken", VotingTokenInstanceAddress)

    // voting token setup
    const minterRoleEnumValue = 1
    const signerAddress = fromAddress

    // add Member
    await votingTokenContract.addMember(minterRoleEnumValue, signerAddress)
    debug("Member added")

    // mint tokens
    await votingTokenContract.mint(signerAddress, toWei("100000000"))
    debug("Tokens minted")

    // remove member
    await votingTokenContract.removeMember(minterRoleEnumValue, signerAddress)
    debug("Member removed")

    // 4) Deploy identifier white list
    const identifierWhiteListFactory = new ethers.ContractFactory(IdentifierWhiteListArtifact.abi, IdentifierWhiteListArtifact.bytecode, signer)
    const identifierWhiteListContract = await identifierWhiteListFactory.deploy();
    const IdentifierWhiteListInstanceAddress = identifierWhiteListContract.address

    assert(IdentifierWhiteListInstanceAddress).isDefined()
    assert(IdentifierWhiteListInstanceAddress).isString()
    debug("IdentifierWhiteList deployed", IdentifierWhiteListInstanceAddress)
    addresses.set("IdentifierWhitelist", IdentifierWhiteListInstanceAddress)
    identifierWhiteListContract.deployTransaction.wait()

    // Set the GAT percentage to 5%
    const gatPercentage = { rawValue: toWei("0.05", "ether") }
    // Set the inflation rate.
    const inflationRate = { rawValue: toWei("0.0005", "ether") }
    // Set the rewards expiration timeout.
    const rewardsExpirationTimeout = 60 * 60 * 24 * 14 // Two weeks.
    // Set phase length to one day.
    const secondsPerDay = "86400"

    // 5) Deploy voting
    const votingFactory = new ethers.ContractFactory(VotingArtifact.abi, VotingArtifact.bytecode, signer)
    const votingContract = await votingFactory.deploy(
      secondsPerDay,
      gatPercentage,
      inflationRate,
      rewardsExpirationTimeout,
      VotingTokenInstanceAddress,
      FinderInstanceAddres,
      TimerInstanceAddress
    );
    const VotingInstanceAddress = votingContract.address
    votingContract.deployTransaction.wait()

    assert(VotingInstanceAddress).isDefined()
    assert(VotingInstanceAddress).isString()
    debug("Voting deployed", VotingInstanceAddress)
    addresses.set("Voting", VotingInstanceAddress)

    // 6) Deploy registry
    const registryFactory = new ethers.ContractFactory(RegistryArtifact.abi, RegistryArtifact.bytecode, signer)
    const registryContract = await registryFactory.deploy();
    const RegistryInstanceAddress = registryContract.address
    registryContract.deployTransaction.wait()

    assert(RegistryInstanceAddress).isDefined()
    assert(RegistryInstanceAddress).isString()
    debug("Registry instance deployed", RegistryInstanceAddress)
    addresses.set("Registry", RegistryInstanceAddress)

    // update implementation on the Finder
    const finderInstanceInterface = finderContract.interface
    const changeImplementationAddressEncodedData = finderInstanceInterface.encodeFunctionData(
      "changeImplementationAddress",
      [utils.formatBytes32String(InterfaceName.Registry), RegistryInstanceAddress]
    )
    await clientInstance.udapp.sendTransaction({
      ...defaultTransactionValues,
      data: changeImplementationAddressEncodedData,
      from: fromAddress,
    })
    debug("Changed Registry Implementation")

    // 6) Deploy financial contracts admin
    const financialContractFactory = new ethers.ContractFactory(FinancialContractsAdminArtifact.abi, FinancialContractsAdminArtifact.bytecode, signer)
    const financialContract = await financialContractFactory.deploy();
    const FinancialContractsAdminAddress = financialContract.address
    financialContract.deployTransaction.wait()

    assert(FinancialContractsAdminAddress).isDefined()
    assert(FinancialContractsAdminAddress).isString()
    debug("FinancialContractAdmin deployed", FinancialContractsAdminAddress)
    addresses.set("FinancialContractAdmin", FinancialContractsAdminAddress)

    // update implementation on the Finder
    const changeImplementationAddressEncodedDataForFinancialContract = finderInstanceInterface.encodeFunctionData(
      "changeImplementationAddress",
      [utils.formatBytes32String(InterfaceName.FinancialContractsAdmin), FinancialContractsAdminAddress]
    )
    await clientInstance.udapp.sendTransaction({
      ...defaultTransactionValues,
      data: changeImplementationAddressEncodedDataForFinancialContract,
      from: fromAddress,
    })
    debug("Changed FinancialContract Admin Implementation")

    // 7) Deploy store
    const initialFixedOracleFeePerSecondPerPfc = { rawValue: "0" }
    const initialWeeklyDelayFeePerSecondPerPfc = { rawValue: "0" }
    const storeFactory = new ethers.ContractFactory(StoreArtifact.abi, StoreArtifact.bytecode, signer)
    const storeContract = await storeFactory.deploy(
      initialFixedOracleFeePerSecondPerPfc,
      initialWeeklyDelayFeePerSecondPerPfc,
      TimerInstanceAddress
    );
    const StoreAddress = storeContract.address
    storeContract.deployTransaction.wait()

    assert(StoreAddress).isDefined()
    assert(StoreAddress).isString()
    debug("Store deployed", StoreAddress)
    addresses.set("Store", StoreAddress as string)

    // update implementation on the Finder
    const changeImplementationAddressEncodedDataForStore = finderInstanceInterface.encodeFunctionData(
      "changeImplementationAddress",
      [utils.formatBytes32String(InterfaceName.Store), StoreAddress]
    )
    await clientInstance.udapp.sendTransaction({
      ...defaultTransactionValues,
      data: changeImplementationAddressEncodedDataForStore,
      from: fromAddress,
    })
    debug("Changed Store Implementation")

    // 8) Deploy governor
    const startingId = "0"
    const governorFactory = new ethers.ContractFactory(GovernorArtifact.abi, GovernorArtifact.bytecode, signer)
    const governorContract = await governorFactory.deploy(
      FinderInstanceAddres,
      startingId,
      TimerInstanceAddress
    );
    const GovernorAddress = governorContract.address
    governorContract.deployTransaction.wait()

    assert(GovernorAddress).isDefined()
    assert(GovernorAddress).isString()
    debug("Governor deployed", GovernorAddress)
    addresses.set("Governor", GovernorAddress)

    // // Add governor to registry so it can send price requests.
    // const registryInstanceInterface = new RegistryInstanceCreator().interface
    // const registryAddMemberEncodedData = registryInstanceInterface.encodeFunctionData("addMember", [
    //   RegistryRoles.CONTRACT_CREATOR,
    //   signerAddress,
    // ])
    // await clientInstance.udapp.sendTransaction({
    //   ...defaultTransactionValues,
    //   data: registryAddMemberEncodedData,
    //   from: fromAddress,
    // })
    // debug("Governor added to registry")

    // const registryRegisterContractEncodedData = registryInstanceInterface.encodeFunctionData("registerContract", [
    //   [],
    //   GovernorAddress,
    // ])
    // await clientInstance.udapp.sendTransaction({
    //   ...defaultTransactionValues,
    //   data: registryRegisterContractEncodedData,
    //   from: fromAddress,
    // })
    // debug("Registered Governor Contract in the registry")

    // const registryRemoveMemberEncodedData = registryInstanceInterface.encodeFunctionData("removeMember", [
    //   RegistryRoles.CONTRACT_CREATOR,
    //   signerAddress,
    // ])
    // await clientInstance.udapp.sendTransaction({
    //   ...defaultTransactionValues,
    //   data: registryRemoveMemberEncodedData,
    //   from: fromAddress,
    // })
    // debug("Removed member")

    // // 9) Deploy designated voting factory
    // const designatedVotingInstanceCreator = new DesignatedVotingFactoryInstanceCreator().getDeployTransaction(
    //   FinderInstanceAddres as string
    // )
    // const { createdAddress: DesignatedVotingFactoryAddress } = await clientInstance.udapp.sendTransaction({
    //   ...defaultTransactionValues,
    //   from: fromAddress,
    //   data: designatedVotingInstanceCreator.data as string,
    // })
    // assert(DesignatedVotingFactoryAddress).isDefined()
    // assert(DesignatedVotingFactoryAddress).isString()
    // debug("DesignatedVotingFactory deployed", DesignatedVotingFactoryAddress)
    // addresses.set("DesignatedVotingFactory", DesignatedVotingFactoryAddress as string)

    // const tokenFactoryInstanceCreator = new TokenFactoryInstanceCreator().getDeployTransaction()
    // const { createdAddress: TokenFactoryAddress } = await clientInstance.udapp.sendTransaction({
    //   ...defaultTransactionValues,
    //   from: fromAddress,
    //   data: tokenFactoryInstanceCreator.data as string,
    // })
    // assert(TokenFactoryAddress).isDefined()
    // assert(TokenFactoryAddress).isString()
    // debug("TokenFactory deployed", TokenFactoryAddress)
    // addresses.set("TokenFactory", TokenFactoryAddress as string)

    // // Deploy AddressWhitelist
    // const addressWhitelistInstanceCreator = new AddressWhitelistInstanceCreator().getDeployTransaction()
    // const { createdAddress: AddressWhitelistAddress } = await clientInstance.udapp.sendTransaction({
    //   ...defaultTransactionValues,
    //   from: fromAddress,
    //   data: addressWhitelistInstanceCreator.data as string,
    // })
    // assert(AddressWhitelistAddress).isDefined()
    // assert(AddressWhitelistAddress).isString()
    // debug("AddressWhitelist deployed", AddressWhitelistAddress)
    // addresses.set("AddressWhitelist", AddressWhitelistAddress as string)

    // // Then deploy expiring multi party creator (library)
    // const { data: multiPartyLibraryData } = new ExpiringMultiPartyLibFactoryLibrary().getDeployTransaction()
    // const { createdAddress: MultipartyLibraryAddress } = await clientInstance.udapp.sendTransaction({
    //   ...defaultTransactionValues,
    //   from: fromAddress,
    //   data: multiPartyLibraryData as string,
    // })
    // assert(MultipartyLibraryAddress).isDefined()
    // assert(MultipartyLibraryAddress).isString()
    // debug("MultipartyLibrary deployed", MultipartyLibraryAddress)

    // // Then deploy expiring multi party creator (contract)
    // const { data: ExpiringMultiPartyCreatorData } = new ExpiringMultiPartyCreatorInstanceCreator({
    //   ExpiringMultiPartyLib: MultipartyLibraryAddress as string,
    // }).getDeployTransaction(
    //   FinderInstanceAddres as string,
    //   AddressWhitelistAddress as string,
    //   TokenFactoryAddress as string,
    //   TimerInstanceAddress as string
    // )
    // const { createdAddress: ExpiringMultiPartyCreatorAddress } = await clientInstance.udapp.sendTransaction({
    //   ...defaultTransactionValues,
    //   from: fromAddress,
    //   data: ExpiringMultiPartyCreatorData as string,
    // })
    // assert(ExpiringMultiPartyCreatorAddress).isDefined()
    // assert(ExpiringMultiPartyCreatorAddress).isString()
    // debug("ExpiringMultiPartyCreator deployed", ExpiringMultiPartyCreatorAddress)
    // addresses.set("ExpiringMultiPartyCreator", ExpiringMultiPartyCreatorAddress as string)

    // const registryAddMemberEncodedDataForEMP = registryInstanceInterface.encodeFunctionData("addMember", [
    //   RegistryRoles.CONTRACT_CREATOR,
    //   ExpiringMultiPartyCreatorAddress as string,
    // ])

    // await clientInstance.udapp.sendTransaction({
    //   ...defaultTransactionValues,
    //   data: registryAddMemberEncodedDataForEMP,
    //   from: fromAddress,
    // })
    // debug("ExpiringMultiPartyCreator added to registry")

    // // 13) Deploy local WETH
    // const { data: wethData } = new Weth9InstanceCreator().getDeployTransaction()
    // const { createdAddress: WethAddress } = await clientInstance.udapp.sendTransaction({
    //   ...defaultTransactionValues,
    //   from: fromAddress,
    //   data: wethData as string,
    // })
    // assert(WethAddress).isDefined()
    // assert(WethAddress).isString()
    // debug("WETH deployed", WethAddress)

    // const collateralCurrencyWhitelistInterface = new AddressWhitelistInstanceCreator().interface
    // const addToWhitelistEncodedData = collateralCurrencyWhitelistInterface.encodeFunctionData("addToWhitelist", [
    //   WethAddress,
    // ])
    // await clientInstance.udapp.sendTransaction({
    //   ...defaultTransactionValues,
    //   data: addToWhitelistEncodedData,
    //   from: fromAddress,
    //   to: AddressWhitelistAddress,
    // })
    // debug("WETH Token added to whitelist")
    return addresses
  }
}
