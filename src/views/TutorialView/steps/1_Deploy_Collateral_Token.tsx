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
