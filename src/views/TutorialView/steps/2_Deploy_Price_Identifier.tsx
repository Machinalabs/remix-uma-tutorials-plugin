import React from "react"

export const DeployPriceIdentifier: React.FC = () => {
  return (
    <React.Fragment>
      <h4>Deploy price identifier</h4>
      <p>
        This is important to ensure that the UMA DVM can resolve any disputes
        for these synthethic tokens.
      </p>
    </React.Fragment>
  )
}
/**
 * "BTC/USD"
 * const identifierBytes = utils.formatBytes32String(identifier);
 * await identifierWhiteListInstance.addSupportedIdentifier(identifierBytes);
 *
 */