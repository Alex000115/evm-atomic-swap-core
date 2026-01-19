/**
 * Simple logging utility for blockchain events.
 */

const fs = require('fs');
const path = require('path');

const LOG_FILE = path.join(__dirname, 'swap_logs.txt');

function logTransaction(txHash, status, details) {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${status}] TX: ${txHash} | Info: ${details}\n`;
    
    fs.appendFile(LOG_FILE, logEntry, (err) => {
        if (err) console.error('Failed to write log:', err);
    });
    
    // Also output to console for debug
    console.log(logEntry.trim());
}

module.exports = {
    logTransaction
};
