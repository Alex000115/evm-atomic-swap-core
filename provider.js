const { ethers } = require('ethers');
const CONFIG = require('./config');

/**
 * Manages JSON-RPC connections to the blockchain.
 */
class ProviderHandler {
    constructor(chainId = CONFIG.DEFAULT_CHAIN_ID) {
        this.chainId = chainId;
        this.rpcUrl = CONFIG.SUPPORTED_CHAINS[chainId];
        
        if (!this.rpcUrl) {
            throw new Error(`Chain ID ${chainId} not supported`);
        }

        this.provider = new ethers.JsonRpcProvider(this.rpcUrl);
    }

    async getBlockNumber() {
        return await this.provider.getBlockNumber();
    }

    async getGasPrice() {
        const feeData = await this.provider.getFeeData();
        return feeData.gasPrice;
    }
}

module.exports = ProviderHandler;
