const LOG = process.env.REACT_APP_ENABLE_DEBUG || false

export const log = (...args: any) => {
  if (LOG) console.log(args)
}

export const debug = (...args: any) => {
  if (LOG) console.log(args)
}