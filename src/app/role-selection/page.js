"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RoleSelection() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [walletAddress, setWalletAddress] = useState("Not connected"); // Placeholder for wallet connection logic

  const handleRoleSelection = async (role) => {
    setLoading(true);

    // Simulate blockchain interaction or backend logic
    setTimeout(() => {
      alert(`You selected the ${role} role!`);
      router.push(`/${role}`); // Redirect to the selected role's dashboard
    }, 1000);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-6">Select Your Role</h1>
      <p className="mb-8 text-lg text-gray-300">Connected Wallet: {walletAddress}</p>
      <div className="space-y-4">
        <button
          onClick={() => handleRoleSelection("student")}
          className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors"
        >
          I am a Student
        </button>
        <button
          onClick={() => handleRoleSelection("lecturer")}
          className="px-6 py-3 bg-green-600 rounded-lg hover:bg-green-500 transition-colors"
        >
          I am a Lecturer
        </button>
      </div>
      {loading && (
        <p className="mt-8 text-yellow-400 animate-pulse">Processing your selection...</p>
      )}
    </div>
  );
}
