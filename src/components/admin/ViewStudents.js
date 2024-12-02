export default function ViewStudents() {
  const students = [
    { name: "John Doe", matric: "CS123456", level: "100 Level", email: "john.doe@example.com" },
    { name: "Jane Smith", matric: "CS234567", level: "200 Level", email: "jane.smith@example.com" },
    { name: "Alice Johnson", matric: "CS345678", level: "300 Level", email: "alice.johnson@example.com" },
    { name: "Bob Brown", matric: "CS456789", level: "400 Level", email: "bob.brown@example.com" },
    { name: "Mary White", matric: "CS567890", level: "500 Level", email: "mary.white@example.com" },
    // Add more dummy data as needed
  ];

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-700">Registered Students</h2>
      <table className="w-full bg-white rounded-lg overflow-hidden shadow">
        <thead className="bg-gray-200">
          <tr>
            <th className="text-left p-4">Name</th>
            <th className="text-left p-4">Matric Number</th>
            <th className="text-left p-4">Level</th>
            <th className="text-left p-4">Email</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index} className="border-t">
              <td className="p-4 text-gray-600">{student.name}</td>
              <td className="p-4 text-gray-600">{student.matric}</td>
              <td className="p-4 text-gray-600">{student.level}</td>
              <td className="p-4 text-gray-600">{student.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
