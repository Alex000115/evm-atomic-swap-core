# EVM Atomic Swap Core

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![Version](https://img.shields.io/badge/version-1.0.4-orange)

## Overview

**EVM Atomic Swap Core** is a specialized modular toolkit designed for developers building decentralized exchange (DEX) aggregators or automated market maker (AMM) interfaces. It abstracts complex web3.js/ethers.js calls into a unified, predictable API for token approvals, swaps, and gas estimation.

## Key Features

- **Zero-Dependency Architecture**: Built to be lightweight and portable.
- **Universal EVM Support**: Works seamlessly with Ethereum, BSC, Polygon, and Avalanche.
- **Gas Optimization**: Includes pre-execution gas estimation to prevent failed transactions.
- **Event Monitoring**: Real-time listeners for `Transfer` and `Approval` events.

## Architecture

The codebase follows a flat structure for ease of integration. It separates concerns between network connectivity (`provider.js`), wallet management (`wallet.js`), and transaction logic (`swap.js`).

## Security

This code is provided as a reference implementation. While it implements standard safety checks (e.g., slippage protection), always audit code before deploying to a mainnet environment.

## License

Distributed under the MIT License.
