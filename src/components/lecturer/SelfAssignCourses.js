import { useState } from "react";

export default function SelfAssignCourses() {
  const [unassignedCourses, setUnassignedCourses] = useState([
    { code: "CSC101", title: "Introduction to Computing", unit: 2, level: "100 Level" },
    { code: "CSC201", title: "Data Structures", unit: 3, level: "200 Level" },
    { code: "CSC301", title: "Algorithms", unit: 3, level: "300 Level" },
    { code: "CSC401", title: "Artificial Intelligence", unit: 4, level: "400 Level" },
    { code: "CSC402", title: "Compiler Design", unit: 3, level: "400 Level" },
  ]);

  const [message, setMessage] = useState("");

  const handleSelfAssign = (courseCode) => {
    setTimeout(() => {
      setMessage(`You have successfully claimed the course: ${courseCode}`);
      setUnassignedCourses((prevCourses) =>
        prevCourses.filter((course) => course.code !== courseCode)
      );
    }, 1000);
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-700">Self-Assign Courses</h2>
      {message && <p className="mb-4 text-green-500">{message}</p>}
      {unassignedCourses.length > 0 ? (
        <table className="w-full bg-white rounded-lg overflow-hidden shadow">
          <thead className="bg-gray-200">
            <tr>
              <th className="text-left p-4">Course Code</th>
              <th className="text-left p-4">Course Title</th>
              <th className="text-left p-4">Unit</th>
              <th className="text-left p-4">Level</th>
              <th className="text-left p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {unassignedCourses.map((course, index) => (
              <tr key={index} className="border-t">
                <td className="p-4 text-gray-600">{course.code}</td>
                <td className="p-4 text-gray-600">{course.title}</td>
                <td className="p-4 text-gray-600">{course.unit}</td>
                <td className="p-4 text-gray-600">{course.level}</td>
                <td className="p-4">
                  <button
                    onClick={() => handleSelfAssign(course.code)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
                  >
                    Assign
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-gray-600">No unassigned courses available.</p>
      )}
    </div>
  );
}
