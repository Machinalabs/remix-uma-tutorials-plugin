export const getProvider = (clientInstance) => {
    const web3Provider = {
        sendAsync(payload, callback) {
            clientInstance
                .call("web3Provider" as any, "sendAsync", payload)
                .then((result) => callback(null, result))
                .catch((e) => callback(e))
        }
    }
    return web3Provider
}