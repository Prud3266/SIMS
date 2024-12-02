import { Connection, PublicKey } from "@solana/web3.js";
import { AnchorProvider, Program, web3 } from "@project-serum/anchor";
import idl from "./idl.json";

// Constants
const programID = new PublicKey("8Ne1KvDkgAfvJypkdmsXv4Cn6SZ5jqB6H6UoHC5wbgjH");
const network = "https://api.devnet.solana.com";
const opts = { preflightCommitment: "processed" };

export const getProvider = () => {
  // Check if Phantom is available
  if (!window.solana) {
    throw new Error("Phantom Wallet is not connected.");
  }

  const connection = new Connection(network, opts.preflightCommitment);
  const provider = new AnchorProvider(
    connection,
    window.solana,
    opts
  );
  return provider;
};

export const getProgram = () => {
  const provider = getProvider();
  return new Program(idl, programID, provider);
};
