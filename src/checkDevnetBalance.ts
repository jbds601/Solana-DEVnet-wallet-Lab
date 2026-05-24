import { Connection, LAMPORTS_PER_SOL, clusterApiUrl } from "@solana/web3.js";
import { readPublicKeyFromEnv } from "./env.js";

async function main(): Promise<void> {
  const publicKey = readPublicKeyFromEnv();
  const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

  const lamports = await connection.getBalance(publicKey);
  const sol = lamports / LAMPORTS_PER_SOL;

  console.log("Network: devnet");
  console.log(`Wallet: ${publicKey.toBase58()}`);
  console.log(`Balance: ${sol.toFixed(9)} DEVNET SOL`);
  console.log(`Lamports: ${lamports}`);
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
