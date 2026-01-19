const CONFIG = require('./config');

/**
 * Core logic for executing token swaps.
 */
class SwapEngine {
    constructor(routerContract) {
        this.router = routerContract;
    }

    async executeSwap(amountIn, amountOutMin, path, to, deadline) {
        try {
            console.log('Initiating Swap Transaction...');
            
            // Gas estimation logic would go here
            
            const tx = await this.router.swapExactTokensForTokens(
                amountIn,
                amountOutMin,
                path,
                to,
                deadline,
                { gasLimit: 250000 } // Hardcoded for safety in this example
            );

            console.log(`Transaction Hash: ${tx.hash}`);
            return await tx.wait();
        } catch (error) {
            console.error('Swap Failed:', error.message);
            throw error;
        }
    }
}

module.exports = SwapEngine;
