import React from "react"

export const DeployCollateralToken: React.FC = () => {
  return (
    <React.Fragment>
      <h4>Deploy collateral token</h4>
      <p>
        This is the token that will serve as collateral for the synthethic
        token.
      </p>
      <p>
        We will deploy it and give permission to the expiring multiparty creator
        to spend the collateral tokens on our behalf.
      </p>

      {/* TODO: FORM to deploy a collateral token */}
    </React.Fragment>
  )
}

/**
 *
 * Este es deployar testnet token
 *
 * name: Dai Stable Coin
 * symbol: DAI
 * decimals: 18
 *
 */

  // const testnetTokenInstance = await new TestnetErc20InstanceCreator(
  //     signer
  // ).deploy("Dai Stable Coin", "DAI", 18);
  // debug("testnetTokenInstance", testnetTokenInstance.address);

  // Then deploy expiring multi pary creator

  // // Deploy whitelists.
    // const collateralCurrencyWhitelistInstance = await new AddressWhitelistInstanceCreator(
    //     signer
    // ).deploy();
    // await collateralCurrencyWhitelistInstance.addToWhitelist(
    //     testnetTokenInstance.address
    // );

    // const multiPartyLibrary = await new ExpiringMultiPartyLibFactoryLibrary(
    //     signer
    // ).deployLibrary();
    // debug("multiPartyLibrary", multiPartyLibrary.ExpiringMultiPartyLib);

    // const expiringMultiPartyCreatorInstance = await new ExpiringMultiPartyCreatorInstanceCreator(
    //     multiPartyLibrary,
    //     signer
    // ).deploy(
    //     finderInstance.address,
    //     collateralCurrencyWhitelistInstance.address,
    //     tokenFactoryInstance.address,
    //     timerInstance.address
    // );
    // debug(
    //     "expiringMultiPartyCreatorInstance",
    //     expiringMultiPartyCreatorInstance.address
    // );

    // await registryInstance.addMember(
    //     RegistryRoles.CONTRACT_CREATOR,
    //     expiringMultiPartyCreatorInstance.address
    // );

    // // 13) Deploy local WETH
    // const wethInstance = await new Weth9InstanceCreator(signer).deploy();
    // debug("wethInstance", wethInstance.address);

    // // Add wethTokenAddress to the margin currency whitelist
    // const collateralWhitelistAddress = await expiringMultiPartyCreatorInstance.collateralTokenWhitelist();
    // const collateralWhitelist = await new AddressWhitelistInstanceCreator(
    //     signer
    // ).attach(collateralWhitelistAddress);
    // await collateralWhitelist.addToWhitelist(wethInstance.address);
