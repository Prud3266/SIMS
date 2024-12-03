"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ConnectWallet() {
  const router = useRouter();
  const [walletAddress, setWalletAddress] = useState(null);

  const PUBLIC_KEYS = {
    admin: "AxXaMYqiZWkppdEKteWDH7wd2Smn12scudramaxj4QGX",
    student: "GJksEy2NWVwpZaBamqeKzWLo7Sx2L5Yvx6zqjwYJ3ZWN",
    lecturer: "4MmEUJRoucQ6gnYV9gzJbXS54aoFnwFsJP89QkAKSh8s",
  };

  // Connect Phantom Wallet
  const connectWallet = async () => {
    if (window.solana && window.solana.isPhantom) {
      try {
        const response = await window.solana.connect();
        const publicKey = response.publicKey.toString();
        setWalletAddress(publicKey);
      } catch (err) {
        console.error("Wallet connection failed:", err);
        alert("Wallet connection failed.");
      }
    } else {
      alert("Please install Phantom Wallet to use this app.");
    }
  };

  // Check Public Key and Redirect
  const verifyRoleAndRedirect = (publicKey) => {
    if (publicKey === PUBLIC_KEYS.admin) {
      router.push("/admin");
    } else if (publicKey === PUBLIC_KEYS.student) {
      router.push("/student");
    } else if (publicKey === PUBLIC_KEYS.lecturer) {
      router.push("/lecturer");
    } else {
      router.push("/role-selection");
    }
  };

  useEffect(() => {
    if (walletAddress) {
      verifyRoleAndRedirect(walletAddress);
    }
  }, [walletAddress]);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-6">Connect Your Wallet</h1>
      <p className="mb-4 text-gray-300">
        Use your Phantom Wallet to access the Student Information Management System.
      </p>
      <button
        onClick={connectWallet}
        className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors"
      >
        Connect Wallet
      </button>
    </div>
  );
}
