/**
 * Entry point for the EVM Atomic Swap Core library.
 * Exports all main modules for external use.
 */

const ProviderHandler = require('./provider');
const WalletManager = require('./wallet');
const SwapEngine = require('./swap');
const TokenInterface = require('./token');
const Utils = require('./utils');

module.exports = {
    ProviderHandler,
    WalletManager,
    SwapEngine,
    TokenInterface,
    Utils
};
