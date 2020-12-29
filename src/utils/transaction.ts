import { toHex } from "web3-utils"
import { RemixTx } from "@remixproject/plugin-api"

export const defaultTransactionValues: RemixTx = {
  gasLimit: toHex(4712388),
  value: "0x00",
  useCall: false,
  from: "0x0",
  data: "0x0",
}
