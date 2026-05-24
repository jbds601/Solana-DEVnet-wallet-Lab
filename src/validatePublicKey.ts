import { PublicKey } from "@solana/web3.js";
import "dotenv/config";

function readCandidatePublicKey(): string {
  const cliValue = process.argv[2]?.trim();
  const envValue = process.env.PUBLIC_KEY?.trim();
  const candidate = cliValue || envValue;

  if (!candidate) {
    throw new Error(
      "Missing public key. Pass one as an argument or set PUBLIC_KEY in .env. Example: npm run validate:public-key -- YOUR_PUBLIC_KEY",
    );
  }

  return candidate;
}

function validatePublicKey(rawPublicKey: string): PublicKey {
  try {
    return new PublicKey(rawPublicKey);
  } catch {
    throw new Error("Invalid Solana public key format.");
  }
}

const rawPublicKey = readCandidatePublicKey();
const publicKey = validatePublicKey(rawPublicKey);

console.log("Solana public key validation");
console.log("Status: valid");
console.log(`Public key: ${publicKey.toBase58()}`);
console.log(`Source: ${process.argv[2] ? "CLI argument" : "PUBLIC_KEY from .env"}`);
console.log("No RPC request made. No private key used. Nothing signed or sent.");
