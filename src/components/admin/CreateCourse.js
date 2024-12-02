export default function CreateCourse() {
  const [courseDetails, setCourseDetails] = useState({
    courseCode: "",
    courseTitle: "",
    unit: "",
    level: "",
  });

  const [courses, setCourses] = useState([
    {
      courseCode: "CSC101",
      courseTitle: "Introduction to Computer Science",
      unit: 3,
      level: "100 Level",
    },
    {
      courseCode: "CSC201",
      courseTitle: "Data Structures and Algorithms",
      unit: 4,
      level: "200 Level",
    },
  ]);

  const handleAddCourse = () => {
    if (
      !courseDetails.courseCode ||
      !courseDetails.courseTitle ||
      !courseDetails.unit ||
      !courseDetails.level
    ) {
      alert("Please fill out all fields.");
      return;
    }
    setCourses([...courses, courseDetails]);
    setCourseDetails({ courseCode: "", courseTitle: "", unit: "", level: "" });
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-700">Create Courses</h2>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <input
          value={courseDetails.courseCode}
          onChange={(e) => setCourseDetails({ ...courseDetails, courseCode: e.target.value })}
          placeholder="Course Code"
          className="border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
        />
        <input
          value={courseDetails.courseTitle}
          onChange={(e) => setCourseDetails({ ...courseDetails, courseTitle: e.target.value })}
          placeholder="Course Title"
          className="border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
        />
        <input
          value={courseDetails.unit}
          onChange={(e) => setCourseDetails({ ...courseDetails, unit: e.target.value })}
          placeholder="Unit"
          className="border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
        />
        <input
          value={courseDetails.level}
          onChange={(e) => setCourseDetails({ ...courseDetails, level: e.target.value })}
          placeholder="Level (e.g., 100 Level)"
          className="border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        onClick={handleAddCourse}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
      >
        Add Course
      </button>
      <h3 className="text-xl font-semibold mt-6 text-gray-700">Existing Courses:</h3>
      <table className="w-full bg-white rounded-lg overflow-hidden shadow mt-4">
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
              <td className="p-4 text-gray-600">{course.courseCode}</td>
              <td className="p-4 text-gray-600">{course.courseTitle}</td>
              <td className="p-4 text-gray-600">{course.unit}</td>
              <td className="p-4 text-gray-600">{course.level}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
