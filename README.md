# Solana DEVnet Wallet Lab

Small safe Solana Devnet wallet lab focused on public wallet reads and local instruction previews.

This repository is intentionally simple. It is meant to explore Solana Devnet basics without exposing private keys, without sending transactions, and without touching mainnet.

## Goals

- Read a public wallet SOL balance on Solana Devnet.
- Validate a public Solana address.
- Build a local non-sending instruction preview.
- Keep all examples safe and easy to inspect.

## Safety scope

This project does **not**:

- store private keys;
- ask for a seed phrase;
- sign transactions;
- send transactions;
- read token accounts;
- read DeFi positions;
- interact with mainnet.

Only public addresses and Solana Devnet RPC calls are used.

## Requirements

- Node.js
- npm
- Optional: Solana CLI for external Devnet checks and airdrops

## Setup

Install dependencies:

```bash
npm install

## Public key validation

Validate the public key configured in `.env`:

```bash
npm run validate:public-key
```

Validate a public key passed directly as a CLI argument:

```bash
npm run validate:public-key -- YOUR_PUBLIC_DEVNET_ADDRESS
```

This script only checks that the value can be parsed as a Solana `PublicKey`.
It does not make any RPC request, does not use a private key, does not sign, and does not send anything.

## License

This project is licensed under the MIT License.