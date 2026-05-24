import { SystemProgram } from "@solana/web3.js";
import { readPublicKeyFromEnv } from "./env.js";

function main(): void {
  const publicKey = readPublicKeyFromEnv();

  const instruction = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: publicKey,
    lamports: 0
  });

  console.log("Network: devnet");
  console.log("Preview type: local instruction preview only");
  console.log(`Program ID: ${instruction.programId.toBase58()}`);
  console.log("Instruction: SystemProgram.transfer");
  console.log("Lamports: 0");
  console.log(`Accounts: ${instruction.keys.length}`);

  instruction.keys.forEach((account, index) => {
    console.log(`\nAccount ${index + 1}`);
    console.log(`Public key: ${account.pubkey.toBase58()}`);
    console.log(`Signer: ${account.isSigner ? "yes" : "no"}`);
    console.log(`Writable: ${account.isWritable ? "yes" : "no"}`);
  });

  console.log("\nNo blockhash requested. No transaction created. No signature requested. Nothing sent.");
}

main();
