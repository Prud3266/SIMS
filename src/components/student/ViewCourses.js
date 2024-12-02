export default function ViewCourses() {
    const courses = [
      { code: "CSC101", title: "Introduction to Computer Science", unit: 3, level: "100 Level" },
      { code: "CSC102", title: "Algorithms", unit: 4, level: "200 Level" },
      { code: "CSC103", title: "Operating Systems", unit: 3, level: "300 Level" },
      { code: "CSC104", title: "AI and Machine Learning", unit: 4, level: "400 Level" },
    ];
  
    return (
      <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-700">Available Courses</h2>
        <table className="w-full bg-white rounded-lg overflow-hidden shadow">
          <thead className="bg-gray-200">
            <tr>
              <th className="text-left p-4">Course Code</th>
              <th className="text-left p-4">Course Title</th>
              <th className="text-left p-4">Unit</th>
              <th className="text-left p-4">Level</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr key={index} className="border-t">
                <td className="p-4 text-gray-600">{course.code}</td>
                <td className="p-4 text-gray-600">{course.title}</td>
                <td className="p-4 text-gray-600">{course.unit}</td>
                <td className="p-4 text-gray-600">{course.level}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  