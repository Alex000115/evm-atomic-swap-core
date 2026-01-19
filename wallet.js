const { ethers } = require('ethers');

/**
 * secure wallet instantiation and management.
 */
class WalletManager {
    constructor(privateKey, provider) {
        if (!privateKey.startsWith('0x')) {
            throw new Error('Invalid Private Key Format');
        }
        this.signer = new ethers.Wallet(privateKey, provider);
    }

    getAddress() {
        return this.signer.address;
    }

    async getBalance() {
        return await this.signer.provider.getBalance(this.signer.address);
    }

    async signMessage(message) {
        return await this.signer.signMessage(message);
    }
}

module.exports = WalletManager;
