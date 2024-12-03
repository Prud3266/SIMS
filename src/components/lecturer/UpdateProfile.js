import { useState } from "react";

export default function UpdateProfile() {
  const [profile, setProfile] = useState({
    name: "Dr. John Doe",
    email: "john.doe@example.com",
    staffId: "L123456",
    department: "Computer Science",
  });

  const handleUpdate = () => {
    alert("Profile updated!");
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-700">Update Profile</h2>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <input
          value={profile.name}
          onChange={(e) => setProfile({ ...profile, name: e.target.value })}
          placeholder="Name"
          className="border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
        />
        <input
          value={profile.email}
          onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          placeholder="Email"
          className="border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
        />
        <input
          value={profile.staffId}
          onChange={(e) => setProfile({ ...profile, staffId: e.target.value })}
          placeholder="Staff ID"
          className="border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
        />
        <input
          value={profile.department}
          onChange={(e) => setProfile({ ...profile, department: e.target.value })}
          placeholder="Department"
          className="border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        onClick={handleUpdate}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
      >
        Update Profile
      </button>
    </div>
  );
}
