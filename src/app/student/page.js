"use client";

import { useState } from "react";
import ViewCourses from "../../components/student/ViewCourses";
import RegisterCourses from "../../components/student/RegisterCourses";
import ViewGrades from "../../components/student/ViewGrades";
import UpdateProfile from "../../components/student/UpdateProfile";
import { useRouter } from "next/navigation";

export default function StudentDashboard() {
  const [activePage, setActivePage] = useState("viewCourses");
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem("connectedWallet");
    router.push("/");
  };

  const renderContent = () => {
    switch (activePage) {
      case "viewCourses":
        return <ViewCourses />;
      case "registerCourses":
        return <RegisterCourses />;
      case "viewGrades":
        return <ViewGrades />;
      case "updateProfile":
        return <UpdateProfile />;
      default:
        return <ViewCourses />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-200">
      {/* Sidebar */}
      <nav className="w-1/4 bg-gray-800 text-white flex flex-col items-start py-6 px-4 shadow-lg">
        <h1 className="text-3xl font-bold mb-8">Student Dashboard</h1>
        <button
          onClick={() => setActivePage("viewCourses")}
          className={`w-full px-4 py-2 text-left mb-2 rounded-lg ${
            activePage === "viewCourses" ? "bg-gray-700" : "bg-gray-900"
          } hover:bg-gray-700`}
        >
          View Courses
        </button>
        <button
          onClick={() => setActivePage("registerCourses")}
          className={`w-full px-4 py-2 text-left mb-2 rounded-lg ${
            activePage === "registerCourses" ? "bg-gray-700" : "bg-gray-900"
          } hover:bg-gray-700`}
        >
          Register Courses
        </button>
        <button
          onClick={() => setActivePage("viewGrades")}
          className={`w-full px-4 py-2 text-left mb-2 rounded-lg ${
            activePage === "viewGrades" ? "bg-gray-700" : "bg-gray-900"
          } hover:bg-gray-700`}
        >
          View Grades
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
