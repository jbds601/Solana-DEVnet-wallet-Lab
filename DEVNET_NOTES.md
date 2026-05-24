
Puis crée un fichier `DEVNET_NOTES.md` :

```md
# Devnet Notes

This document tracks practical notes while experimenting with Solana Devnet.

## Purpose

Solana Devnet is useful for testing wallet reads, instruction building, simulations, and transactions without using real funds.

Devnet SOL has no monetary value.

## Current safety rules

This lab is intentionally limited to safe operations:

- public wallet balance reads;
- public address validation;
- local instruction preview;
- no private keys;
- no seed phrase;
- no transaction signing;
- no transaction sending;
- no mainnet usage.

## Faucet notes

Devnet SOL can usually be requested through a faucet or through the Solana CLI.

Example CLI commands:

```bash
solana config set -ud
solana airdrop 1 YOUR_PUBLIC_DEVNET_ADDRESS --url devnet
solana balance YOUR_PUBLIC_DEVNET_ADDRESS --url devnet