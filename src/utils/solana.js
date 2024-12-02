import { getProgram } from "./solanaSetup"; // Assuming solanaSetup.js is implemented
import { PublicKey } from "@solana/web3.js";

export const fetchJoinRequests = async () => {
  const program = getProgram();
  const roleDataPublicKey = new PublicKey("ROLE_DATA_ACCOUNT_PUBLIC_KEY"); // Replace with actual PDA

  try {
    const data = await program.account.roleData.fetch(roleDataPublicKey);
    return data.pendingRequests.map((key) => ({
      publicKey: key.toString(),
      role: "Student", // Replace with the actual role logic
    }));
  } catch (err) {
    console.error("Error fetching join requests:", err);
    throw new Error("Failed to fetch join requests.");
  }
};
