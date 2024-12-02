export default function RegisterCourses() {
    const courses = [
      { code: "CSC105", title: "Computer Graphics", unit: 3, level: "300 Level" },
      { code: "CSC106", title: "Cybersecurity", unit: 3, level: "400 Level" },
    ];
  
    const handleRegister = (courseCode) => {
      alert(`Registered for ${courseCode}`);
    };
  
    return (
      <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-700">Register for Courses</h2>
        <table className="w-full bg-white rounded-lg overflow-hidden shadow">
          <thead className="bg-gray-200">
            <tr>
              <th className="text-left p-4">Course Code</th>
              <th className="text-left p-4">Course Title</th>
              <th className="text-left p-4">Unit</th>
              <th className="text-left p-4">Level</th>
              <th className="text-left p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr key={index} className="border-t">
                <td className="p-4 text-gray-600">{course.code}</td>
                <td className="p-4 text-gray-600">{course.title}</td>
                <td className="p-4 text-gray-600">{course.unit}</td>
                <td className="p-4 text-gray-600">{course.level}</td>
                <td className="p-4">
                  <button
                    onClick={() => handleRegister(course.code)}
                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-400"
                  >
                    Register
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  