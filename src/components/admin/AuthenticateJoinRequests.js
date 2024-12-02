export default function AuthenticateJoinRequests() {
  const pendingRequests = [
    { publicKey: "1PuKey123...", role: "Student", name: "John Doe" },
    { publicKey: "2PuKey456...", role: "Lecturer", name: "Dr. Smith" },
    { publicKey: "3PuKey789...", role: "Student", name: "Alice Johnson" },
    { publicKey: "4PuKey012...", role: "Lecturer", name: "Prof. Jane Brown" },
  ];

  const handleApprove = (publicKey) => {
    alert(`Approved ${publicKey}`);
  };

  const handleReject = (publicKey) => {
    alert(`Rejected ${publicKey}`);
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-700">Pending Join Requests</h2>
      <table className="w-full bg-white rounded-lg overflow-hidden shadow">
        <thead className="bg-gray-200">
          <tr>
            <th className="text-left p-4">Name</th>
            <th className="text-left p-4">Public Key</th>
            <th className="text-left p-4">Role</th>
            <th className="text-left p-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {pendingRequests.map((request, index) => (
            <tr key={index} className="border-t">
              <td className="p-4 text-gray-600">{request.name}</td>
              <td className="p-4 text-gray-600">{request.publicKey}</td>
              <td className="p-4 text-gray-600">{request.role}</td>
              <td className="p-4">
                <button
                  onClick={() => handleApprove(request.publicKey)}
                  className="px-4 py-2 bg-green-500 text-white rounded-lg mr-2 hover:bg-green-400"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleReject(request.publicKey)}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-400"
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
