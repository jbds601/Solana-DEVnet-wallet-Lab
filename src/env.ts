import { PublicKey } from "@solana/web3.js";
import "dotenv/config";

export function readPublicKeyFromEnv(): PublicKey {
  const rawPublicKey = process.env.PUBLIC_KEY?.trim();

  if (!rawPublicKey) {
    throw new Error("Missing PUBLIC_KEY in .env. Copy .env.example to .env and add a Devnet public key.");
  }

  try {
    return new PublicKey(rawPublicKey);
  } catch {
    throw new Error("PUBLIC_KEY is not a valid Solana public key.");
  }
}
