"use client";

import { useState } from 'react';
import EmployeeLayout from '../components/Layout';

export default function PublicFilesPage() {
  const [files, setFiles] = useState([
    { id: 1, name: 'Company Policy.pdf', size: '2.4 MB', requested: false },
    { id: 2, name: 'Employee Handbook.docx', size: '1.8 MB', requested: false },
    { id: 3, name: 'Annual Report 2024.pdf', size: '3.2 MB', requested: false },
  ]);

  const requestEditPermission = (fileId) => {
    setFiles(files.map(file =>
      file.id === fileId ? { ...file, requested: true } : file
    ));
  };

  return (
    <EmployeeLayout>
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-Royal-Blue mb-8">Public Files</h1>

        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-Royal-Green text-white text-left">
              <th className="py-3 px-4 rounded-tl-xl">File Name</th>
              <th className="py-3 px-4">Size</th>
              <th className="py-3 px-4 rounded-tr-xl text-center">Request Edit Access</th>
            </tr>
          </thead>

          <tbody>
            {files.map(({ id, name, size, requested }) => (
              <tr
                key={id}
                className="border-b border-gray-200 hover:bg-gray-50 transition"
              >
                <td className="py-3 px-4 font-medium text-gray-800">{name}</td>
                <td className="py-3 px-4 text-gray-600">{size}</td>
                <td className="py-3 px-4 text-center">
                  {requested ? (
                    <button
                      disabled
                      className="bg-gray-400 cursor-not-allowed text-white py-1.5 px-4 rounded-full text-sm font-semibold"
                    >
                      Requested
                    </button>
                  ) : (
                    <button
                      onClick={() => requestEditPermission(id)}
                      className="bg-Royal-Green hover:bg-green-700 text-white py-1.5 px-4 rounded-full text-sm font-semibold transition"
                    >
                      Request Access
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {files.length === 0 && (
          <p className="text-center text-gray-500 mt-6">No files available.</p>
        )}
      </div>
    </EmployeeLayout>
  );
}
