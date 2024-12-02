"use client";

import { useState } from "react";
import AuthenticateJoinRequests from "../../components/admin/AuthenticateJoinRequests";
import CreateCourse from "../../components/admin/CreateCourse";
import ViewGrades from "../../components/admin/ViewGrades";
import ViewStudents from "../../components/admin/ViewStudents";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const [activePage, setActivePage] = useState("authenticate");
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem("connectedWallet");
    router.push("/");
  };

  const renderContent = () => {
    switch (activePage) {
      case "authenticate":
        return <AuthenticateJoinRequests />;
      case "createCourse":
        return <CreateCourse />;
      case "viewGrades":
        return <ViewGrades />;
      case "viewStudents":
        return <ViewStudents />;
      default:
        return <AuthenticateJoinRequests />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-200">
      {/* Sidebar */}
      <nav className="w-1/4 bg-gray-800 text-white flex flex-col items-start py-6 px-4 shadow-lg">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
        <button
          onClick={() => setActivePage("authenticate")}
          className={`w-full px-4 py-2 text-left mb-2 rounded-lg ${
            activePage === "authenticate" ? "bg-gray-700" : "bg-gray-900"
          } hover:bg-gray-700`}
        >
          Authenticate Join Requests
        </button>
        <button
          onClick={() => setActivePage("createCourse")}
          className={`w-full px-4 py-2 text-left mb-2 rounded-lg ${
            activePage === "createCourse" ? "bg-gray-700" : "bg-gray-900"
          } hover:bg-gray-700`}
        >
          Create Courses
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
          onClick={() => setActivePage("viewStudents")}
          className={`w-full px-4 py-2 text-left mb-2 rounded-lg ${
            activePage === "viewStudents" ? "bg-gray-700" : "bg-gray-900"
          } hover:bg-gray-700`}
        >
          View Students
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
