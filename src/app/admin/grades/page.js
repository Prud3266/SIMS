"use client";

import { useState, useEffect } from 'react';

export default function ViewGrades() {
  const [grades, setGrades] = useState([]);

  useEffect(() => {
    // Simulate data fetching
    const fetchGrades = async () => {
      const data = [
        { studentName: 'Alice', course: 'Math', grade: 'A' },
        { studentName: 'Bob', course: 'History', grade: 'B' },
      ];
      setGrades(data);
    };

    fetchGrades();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6">View Grades</h1>
      <table className="w-full max-w-3xl bg-gray-800 border border-gray-700 rounded-lg">
        <thead>
          <tr className="text-left">
            <th className="p-4 border-b border-gray-700">Student Name</th>
            <th className="p-4 border-b border-gray-700">Course</th>
            <th className="p-4 border-b border-gray-700">Grade</th>
          </tr>
        </thead>
        <tbody>
          {grades.map((record, index) => (
            <tr key={index}>
              <td className="p-4 border-b border-gray-700">{record.studentName}</td>
              <td className="p-4 border-b border-gray-700">{record.course}</td>
              <td className="p-4 border-b border-gray-700">{record.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
