# Solana Devnet Wallet Lab

Small public learning repo for safe Solana Devnet experiments.

This repository is intentionally simple and does **not** include private keys, seeds, wallet exports, or mainnet logic.

## What it does

- Reads the SOL balance of a public wallet address on Devnet.
- Builds a local 0-lamport self-transfer instruction preview.
- Prints the instruction accounts for review.
- Does not sign, simulate, or send a transaction.

## Requirements

- Node.js 20+
- pnpm
- A public Solana Devnet wallet address

## Setup

```bash
pnpm install
cp .env.example .env
```

Edit `.env` and set:

```bash
PUBLIC_KEY=YourDevnetPublicKeyHere
```

## Commands

Check Devnet SOL balance:

```bash
pnpm devnet:balance
```

Build a local non-sending instruction preview:

```bash
pnpm devnet:preview
```

Run TypeScript typecheck:

```bash
pnpm typecheck
```

## Safety notes

This repo is Devnet-only by design. It never asks for a private key and never imports a seed phrase. All examples use public wallet addresses only.
