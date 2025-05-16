import { FaEnvelope, FaUserCircle } from 'react-icons/fa';

export default function TeamInfo() {
  const teamMembers = [
    { name: 'John Doe', position: 'Manager', email: 'john@example.com' },
    { name: 'Jane Smith', position: 'Developer', email: 'jane@example.com' },
    { name: 'Mike Johnson', position: 'Designer', email: 'mike@example.com' },
  ];

  return (
    <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-200">
      <h3 className="text-xl font-semibold text-Royal-Blue mb-6">Team Information</h3>
      <div className="grid gap-4">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex items-start gap-4 bg-gray-50 p-4 rounded-lg border border-gray-200 shadow-sm"
          >
            <FaUserCircle className="text-4xl text-Royal-Green" />
            <div>
              <h4 className="text-lg font-semibold text-gray-800">{member.name}</h4>
              <p className="text-sm text-gray-600">{member.position}</p>
              <p className="text-sm text-indigo-600 flex items-center gap-1 mt-1">
                <FaEnvelope /> {member.email}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
