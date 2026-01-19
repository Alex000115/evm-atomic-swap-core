const { ethers } = require('ethers');

/**
 * Helper utility functions for formatting and validation.
 */

function toWei(amount, decimals = 18) {
    return ethers.parseUnits(amount.toString(), decimals);
}

function fromWei(amount, decimals = 18) {
    return ethers.formatUnits(amount, decimals);
}

function calculateSlippage(amount, tolerance) {
    const bigAmount = BigInt(amount);
    const slippage = BigInt(Math.floor(tolerance * 10000));
    return bigAmount - ((bigAmount * slippage) / 10000n);
}

function getTimestamp(minutesFromNow = 20) {
    return Math.floor(Date.now() / 1000) + 60 * minutesFromNow;
}

module.exports = {
    toWei,
    fromWei,
    calculateSlippage,
    getTimestamp
};
