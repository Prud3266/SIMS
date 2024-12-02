export default function ViewGrades() {
  const grades = [
    { student: "John Doe", course: "Introduction to Computer Science", grade: "A" },
    { student: "Jane Smith", course: "Data Structures and Algorithms", grade: "B+" },
    { student: "Alice Johnson", course: "Operating Systems", grade: "A-" },
    { student: "Bob Brown", course: "Computer Networks", grade: "B" },
    { student: "Mary White", course: "Artificial Intelligence", grade: "A+" },
    // Add more dummy data as needed
  ];

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-700">View Grades</h2>
      <table className="w-full bg-white rounded-lg overflow-hidden shadow">
        <thead className="bg-gray-200">
          <tr>
            <th className="text-left p-4">Student</th>
            <th className="text-left p-4">Course</th>
            <th className="text-left p-4">Grade</th>
          </tr>
        </thead>
        <tbody>
          {grades.map((record, index) => (
            <tr key={index} className="border-t">
              <td className="p-4 text-gray-600">{record.student}</td>
              <td className="p-4 text-gray-600">{record.course}</td>
              <td className="p-4 text-gray-600">{record.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
