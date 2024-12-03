import { useState } from "react";

export default function UploadGrades() {
  const [assignedCourses] = useState([
    { code: "CSC201", title: "Data Structures" },
    { code: "CSC301", title: "Algorithms" },
    { code: "CSC401", title: "Artificial Intelligence" },
  ]);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [grades, setGrades] = useState([]);
  const [gradeData, setGradeData] = useState({ matric: "", grade: "" });

  const handleAddGrade = () => {
    if (!selectedCourse || !gradeData.matric || !gradeData.grade) {
      alert("Please fill all fields before adding a grade.");
      return;
    }

    setGrades((prevGrades) => [...prevGrades, { ...gradeData, course: selectedCourse }]);
    setGradeData({ matric: "", grade: "" });
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-700">Upload Grades</h2>
      <div className="mb-4">
        <select
          value={selectedCourse}
          onChange={(e) => setSelectedCourse(e.target.value)}
          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select a Course</option>
          {assignedCourses.map((course, index) => (
            <option key={index} value={course.code}>
              {course.code} - {course.title}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <input
          value={gradeData.matric}
          onChange={(e) => setGradeData({ ...gradeData, matric: e.target.value })}
          placeholder="Matric Number"
          className="border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
        />
        <input
          value={gradeData.grade}
          onChange={(e) => setGradeData({ ...gradeData, grade: e.target.value })}
          placeholder="Grade (e.g., A, B+)"
          className="border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        onClick={handleAddGrade}
        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-400 mb-6"
      >
        Add Grade
      </button>
      <h3 className="text-xl font-bold text-gray-700 mb-4">Grades List</h3>
      <ul className="list-disc pl-6">
        {grades.map((grade, index) => (
          <li key={index} className="text-gray-600">
            {grade.matric} - {grade.grade} ({grade.course})
          </li>
        ))}
      </ul>
    </div>
  );
}
