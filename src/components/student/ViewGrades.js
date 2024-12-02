export default function ViewGrades() {
    const grades = [
      { course: "CSC101", grade: "A" },
      { course: "CSC102", grade: "B+" },
      { course: "CSC103", grade: "A-" },
      { course: "CSC104", grade: "B" },
    ];
  
    return (
      <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-700">My Grades</h2>
        <table className="w-full bg-white rounded-lg overflow-hidden shadow">
          <thead className="bg-gray-200">
            <tr>
              <th className="text-left p-4">Course</th>
              <th className="text-left p-4">Grade</th>
            </tr>
          </thead>
          <tbody>
            {grades.map((record, index) => (
              <tr key={index} className="border-t">
                <td className="p-4 text-gray-600">{record.course}</td>
                <td className="p-4 text-gray-600">{record.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  