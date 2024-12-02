"use client";

import { useState } from "react";

// Mock storage for join requests (to match index.js)
let joinRequests = [
  { publicKey: "ExamplePublicKey1", role: "lecturer" },
  { publicKey: "ExamplePublicKey2", role: "student" },
];

export default function AuthenticateAccounts() {
  const [requests, setRequests] = useState(joinRequests);

  // Handle Admin Approval
  const handleApprove = (index) => {
    const request = requests[index];
    alert(`The public key ${request.publicKey} has been approved as a ${request.role}.`);
    joinRequests.splice(index, 1); // Remove from requests
    setRequests([...joinRequests]);
    // Add the public key to the role's list (replace this with blockchain interaction)
    DEFAULT_KEYS[request.role].push(request.publicKey);
  };

  // Handle Admin Rejection
  const handleReject = (index) => {
    const request = requests[index];
    alert(`The public key ${request.publicKey} has been rejected.`);
    joinRequests.splice(index, 1); // Remove from requests
    setRequests([...joinRequests]);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6">Authenticate Accounts</h1>
      {requests.length === 0 ? (
        <p>No pending requests.</p>
      ) : (
        <table className="w-full max-w-3xl bg-gray-800 border border-gray-700 rounded-lg">
          <thead>
            <tr className="text-left">
              <th className="p-4 border-b border-gray-700">Public Key</th>
              <th className="p-4 border-b border-gray-700">Requested Role</th>
              <th className="p-4 border-b border-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request, index) => (
              <tr key={index}>
                <td className="p-4 border-b border-gray-700">{request.publicKey}</td>
                <td className="p-4 border-b border-gray-700">{request.role}</td>
                <td className="p-4 border-b border-gray-700">
                  <button
                    onClick={() => handleApprove(index)}
                    className="px-4 py-2 mr-2 bg-green-600 text-white rounded-lg"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleReject(index)}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg"
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
