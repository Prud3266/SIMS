"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RoleSelection() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [walletAddress, setWalletAddress] = useState("ConnectedWallet123"); // Placeholder for connected wallet

  const handleRoleSelection = async (role) => {
    setLoading(true);

    // Simulate role submission logic
    setTimeout(() => {
      alert(`A join request for the ${role} role has been sent to the admin.`);
      router.push("/"); // Redirect back after request submission
    }, 1000);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-6">Role Selection</h1>
      <p className="mb-8 text-lg text-gray-300">
        Your wallet address <span className="text-yellow-400">{walletAddress}</span> is not
        associated with any role.
      </p>
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
        <p className="mt-8 text-yellow-400 animate-pulse">Submitting your request...</p>
      )}
    </div>
  );
}
