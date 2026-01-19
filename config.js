/**
 * Global configuration settings for the swap core.
 * Includes RPC endpoints and chain IDs.
 */

const CONFIG = {
    DEFAULT_CHAIN_ID: 1, // Mainnet
    RPC_TIMEOUT: 5000,
    GAS_LIMIT_BUFFER: 1.2, // 20% buffer
    SUPPORTED_CHAINS: {
        1: 'https://mainnet.infura.io/v3/YOUR_KEY',
        56: 'https://bsc-dataseed.binance.org/',
        137: 'https://polygon-rpc.com'
    },
    SLIPPAGE_TOLERANCE: 0.005 // 0.5%
};

module.exports = CONFIG;
