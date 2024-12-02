"use client";

import { useState } from "react";
import ViewAssignedCourses from "../../components/lecturer/ViewAssignedCourses";
import UploadGrades from "../../components/lecturer/UploadGrades";
import UpdateProfile from "../../components/lecturer/UpdateProfile";
import { useRouter } from "next/navigation";

export default function LecturerDashboard() {
  const [activePage, setActivePage] = useState("viewCourses");
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem("connectedWallet");
    router.push("/");
  };

  const renderContent = () => {
    switch (activePage) {
      case "viewCourses":
        return <ViewAssignedCourses />;
      case "uploadGrades":
        return <UploadGrades />;
      case "updateProfile":
        return <UpdateProfile />;
      default:
        return <ViewAssignedCourses />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-200">
      {/* Sidebar */}
      <nav className="w-1/4 bg-gray-800 text-white flex flex-col items-start py-6 px-4 shadow-lg">
        <h1 className="text-3xl font-bold mb-8">Lecturer Dashboard</h1>
        <button
          onClick={() => setActivePage("viewCourses")}
          className={`w-full px-4 py-2 text-left mb-2 rounded-lg ${
            activePage === "viewCourses" ? "bg-gray-700" : "bg-gray-900"
          } hover:bg-gray-700`}
        >
          View Assigned Courses
        </button>
        <button
          onClick={() => setActivePage("uploadGrades")}
          className={`w-full px-4 py-2 text-left mb-2 rounded-lg ${
            activePage === "uploadGrades" ? "bg-gray-700" : "bg-gray-900"
          } hover:bg-gray-700`}
        >
          Upload Grades
        </button>
        <button
          onClick={() => setActivePage("updateProfile")}
          className={`w-full px-4 py-2 text-left mb-2 rounded-lg ${
            activePage === "updateProfile" ? "bg-gray-700" : "bg-gray-900"
          } hover:bg-gray-700`}
        >
          Update Profile
        </button>
        <button
          onClick={logout}
          className="w-full px-4 py-2 text-left mt-auto bg-red-600 rounded-lg hover:bg-red-500"
        >
          Logout
        </button>
      </nav>

      {/* Main Content */}
      <main className="flex-1 bg-white p-6 overflow-auto shadow-md">{renderContent()}</main>
    </div>
  );
}
