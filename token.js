const { ethers } = require('ethers');
const CONSTANTS = require('./constants');

/**
 * Interacts with ERC20 Token Smart Contracts.
 */
class TokenInterface {
    constructor(tokenAddress, signer) {
        this.contract = new ethers.Contract(
            tokenAddress,
            CONSTANTS.ERC20_ABI,
            signer
        );
    }

    async approve(spender, amount) {
        console.log(`Approving ${amount} for ${spender}...`);
        const tx = await this.contract.approve(spender, amount);
        return await tx.wait();
    }

    async getAllowance(owner, spender) {
        return await this.contract.allowance(owner, spender);
    }

    async getBalance(account) {
        return await this.contract.balanceOf(account);
    }
}

module.exports = TokenInterface;
