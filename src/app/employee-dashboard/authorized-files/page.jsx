import EmployeeLayout from '../components/Layout';

const authorizedFiles = [
  { id: 1, name: 'Company Policy.pdf', size: '2.4 MB', url: '/files/company-policy.pdf' },
  { id: 2, name: 'Employee Handbook.docx', size: '1.8 MB', url: '/files/employee-handbook.docx' },
  { id: 3, name: 'Annual Report 2024.pdf', size: '3.2 MB', url: '/files/annual-report-2024.pdf' },
];

export default function AuthorizedFilesPage() {
  return (
    <EmployeeLayout>
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-Royal-Blue mb-8">Authorized Files</h1>

        {authorizedFiles.length === 0 ? (
          <p className="text-center text-gray-500">You currently have no authorized files.</p>
        ) : (
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-Royal-Green text-white text-left">
                <th className="py-3 px-4 rounded-tl-xl">File Name</th>
                <th className="py-3 px-4">Size</th>
                <th className="py-3 px-4 text-center rounded-tr-xl">Actions</th>
              </tr>
            </thead>

            <tbody>
              {authorizedFiles.map(({ id, name, size, url }) => (
                <tr key={id} className="border-b border-gray-200 hover:bg-gray-50 transition">
                  <td className="py-3 px-4 font-medium text-gray-800">{name}</td>
                  <td className="py-3 px-4 text-gray-600">{size}</td>
                  <td className="py-3 px-4 text-center space-x-3">
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-Royal-Green hover:bg-green-700 text-white py-1.5 px-4 rounded-full text-sm font-semibold transition"
                      download
                    >
                      Download
                    </a>
                   <a
  href={url}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-Midnight-Green hover:bg-[var(--Midnight-Green-hover)] text-white py-1.5 px-4 rounded-full text-sm font-semibold transition"
>
  View
</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </EmployeeLayout>
  );
}
