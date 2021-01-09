import React from "react"

export const Withdraw: React.FC = () => {
  return (
    <React.Fragment>
      <h4>Withdraw</h4>
      <p>
        For a token sponsor to withdraw collateral from his position, there are typically 2 ways to do this. Read this
        explainer for more information. In this scenario, because we are the only token sponsor, we will have to
        withdraw collateral the “slow” way. First, we need to request a withdrawal of 10 collateral tokens.
      </p>
      {/* await emp.requestWithdrawal({ rawValue: web3.utils.toWei("10") })
       */}
      <p>
        Now, we need to simulate the withdrawal liveness period passing without a dispute of our withdrawal request. The
        ExpiringMultipartyCreator used in step 8 has a strict withdrawal liveness of 7200 seconds, or 2 hours. This
        means that in order for a withdrawal request to be processed at least 2 hours must pass before attempting to
        withdraw from the position. We can simulate time advancing until after this withdrawal liveness period by using
        an the deployed instance of Timer.
        <br />
        This contact acts to simulate time changes within the UMA ecosystem when testing smart contracts.
      </p>

      {/* 
   // Create an instance of the `Timer` Contract
const timer = await Timer.deployed()

// Advance time forward from the current time to current time + 7201 seconds
await timer.setCurrentTime((await timer.getCurrentTime()).toNumber() + 7201)

// Withdraw the now processed request.
await emp.withdrawPassedRequest()
Let’s now check that our collateral token balance has returned to 9,925.

// collateral token balance
(await collateralToken.balanceOf(accounts[0])).toString()

*/}
    </React.Fragment>
  )
}
