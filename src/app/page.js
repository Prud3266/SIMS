"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// Admin Public Key
const ADMIN_PUBLIC_KEY = "AxXaMYqiZWkppdEKteWDH7wd2Smn12scudramaxj4QGX";

export default function ConnectWallet() {
  const [walletAddress, setWalletAddress] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Disconnect any pre-connected wallet
  const disconnectWallet = () => {
    setWalletAddress(null); // Reset the wallet state in your app
    localStorage.removeItem("connectedWallet"); // Optional: Clear any persistent state
  };

  // Connect Phantom Wallet
  const connectWallet = async () => {
    if (window.solana && window.solana.isPhantom) {
      try {
        setLoading(true);
        const response = await window.solana.connect();
        const publicKey = response.publicKey.toString();
        setWalletAddress(publicKey);

        // Redirect based on the public key
        if (publicKey === ADMIN_PUBLIC_KEY) {
          router.push("/admin"); // Redirect to admin dashboard
        } else {
          router.push("/role-selection"); // Redirect to role selection page
        }
      } catch (err) {
        console.error("Wallet connection failed:", err);
        alert("Failed to connect wallet. Please try again.");
      } finally {
        setLoading(false);
      }
    } else {
      alert("Please install Phantom Wallet to use this app.");
    }
  };

  useEffect(() => {
    // Disconnect wallet on page load
    disconnectWallet();
  }, []);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-6">Welcome to SERS</h1>
      <p className="text-lg mb-8">Connect your Phantom Wallet to get started.</p>
      <button
        onClick={connectWallet}
        className="px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg"
      >
        {loading ? "Connecting..." : "Connect Wallet"}
      </button>
    </div>
  );
}
