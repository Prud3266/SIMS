"use client";

import { useState, useEffect } from 'react';

export default function ViewStudents() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Simulate data fetching
    const fetchStudents = async () => {
      const data = [
        { id: 1, name: 'Alice', courses: ['Math', 'Science'] },
        { id: 2, name: 'Bob', courses: ['English', 'History'] },
      ];
      setStudents(data);
    };

    fetchStudents();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6">View Students</h1>
      <table className="w-full max-w-3xl bg-gray-800 border border-gray-700 rounded-lg">
        <thead>
          <tr className="text-left">
            <th className="p-4 border-b border-gray-700">ID</th>
            <th className="p-4 border-b border-gray-700">Name</th>
            <th className="p-4 border-b border-gray-700">Courses</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td className="p-4 border-b border-gray-700">{student.id}</td>
              <td className="p-4 border-b border-gray-700">{student.name}</td>
              <td className="p-4 border-b border-gray-700">
                {student.courses.join(', ')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
