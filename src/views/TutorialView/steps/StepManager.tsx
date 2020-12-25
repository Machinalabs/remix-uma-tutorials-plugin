import React from "react"
import { Route, Switch, useRouteMatch } from "react-router-dom"

// steps
import { DeployCollateralToken } from "./1_Deploy_Collateral_Token"
import { DeployPriceIdentifier } from "./2_Deploy_Price_Identifier"
import { CreateExpiringMultiParty } from "./3_CreateExpiringMultiParty"
import { CreatePosition } from "./4_CreatePosition"
import { RedeemTokens } from "./5_RedeemTokens"
import { Deposit } from "./6_Deposit"
import { Withdraw } from "./7_Withdraw"

export const Stepmanager: React.FC = () => {
  const match = useRouteMatch()
  return (
    <React.Fragment>
      <Switch>
        <Route path={`${match.path}/deploy_collateral_token`}>
          <DeployCollateralToken />
        </Route>
        <Route path={`${match.path}/deploy_price_identifier`}>
          <DeployPriceIdentifier />
        </Route>
        <Route path={`${match.path}/create_expiring_multiparty`}>
          <CreateExpiringMultiParty />
        </Route>
        <Route path={`${match.path}/create_position`}>
          <CreatePosition />
        </Route>
        <Route path={`${match.path}/redeem_tokens`}>
          <RedeemTokens />
        </Route>
        <Route path={`${match.path}/deposit`}>
          <Deposit />
        </Route>
        <Route path={`${match.path}/withdraw`}>
          <Withdraw />
        </Route>
      </Switch>
    </React.Fragment>
  )
}
