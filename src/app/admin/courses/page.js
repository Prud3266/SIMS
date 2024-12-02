"use client";

import { useState } from 'react';

export default function ManageCourses() {
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({ id: '', name: '' });

  const handleAddCourse = () => {
    setCourses([...courses, newCourse]);
    setNewCourse({ id: '', name: '' });
    alert('Course added!');
    // Add logic to interact with the smart contract here
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6">Manage Courses</h1>
      <div className="mb-6 space-y-4">
        <input
          className="p-2 bg-gray-800 text-white border border-gray-700 rounded-lg"
          type="text"
          placeholder="Course ID"
          value={newCourse.id}
          onChange={(e) => setNewCourse({ ...newCourse, id: e.target.value })}
        />
        <input
          className="p-2 bg-gray-800 text-white border border-gray-700 rounded-lg"
          type="text"
          placeholder="Course Name"
          value={newCourse.name}
          onChange={(e) => setNewCourse({ ...newCourse, name: e.target.value })}
        />
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          onClick={handleAddCourse}
        >
          Add Course
        </button>
      </div>
      <ul className="max-w-3xl w-full">
        {courses.map((course, index) => (
          <li
            key={index}
            className="p-4 bg-gray-800 border-b border-gray-700 rounded-lg"
          >
            {`${course.id}: ${course.name}`}
          </li>
        ))}
      </ul>
    </div>
  );
}
