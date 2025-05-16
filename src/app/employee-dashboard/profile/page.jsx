
'use client';
import { useState } from 'react';
import EmployeeLayout from '../components/Layout';
import Image from 'next/image';
import { Upload } from 'lucide-react';

export default function ProfilePage() {
  const [profileImage, setProfileImage] = useState('/profile.jpg');

  const employee = {
    name: 'Ahmed Al-Fulan',
    email: 'ahmed@example.com',
    phone: '+966500000000',
    completionRate: '85%',
    courses: [
      { name: 'Leadership Skills', link: '#' },
      { name: 'Time Management', link: '#' },
      { name: 'Effective Communication', link: '#' },
    ],
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfileImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <EmployeeLayout>
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-2xl p-8 space-y-10 border border-gray-100">
        <h1 className="text-2xl font-bold text-Royal-Blue">My Profile</h1>

        {/* User Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center md:grid-col-reverse">
          <div className="space-y-4 order-2 md:order-1">
            <p><span className="font-semibold">Name:</span> {employee.name}</p>
            <p><span className="font-semibold">Email:</span> {employee.email}</p>
            <p><span className="font-semibold">Phone:</span> {employee.phone}</p>
            <p><span className="font-semibold">Training Completion Rate:</span> {employee.completionRate}</p>
          </div>

          {/* Profile Image + Upload */}
          <div className="flex flex-col items-center gap-4 order-1 md:order-2">
            <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-Royal-Green shadow-lg">
              <Image
                src={profileImage}
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <label className="flex items-center gap-2 bg-Royal-Green hover:bg-green-700 text-white px-4 py-2 rounded-full cursor-pointer text-sm font-semibold transition">
              <Upload size={18} />
              Upload New Photo
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>
          </div>
        </div>

        {/* Courses */}
        <div>
          <h2 className="text-xl font-semibold text-Royal-Green mb-3">Your Courses</h2>
          <ul className="space-y-3">
            {employee.courses.map((course, idx) => (
              <li key={idx}>
                <a
                  href={course.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-700 hover:underline font-medium"
                >
                  {course.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </EmployeeLayout>
  );
}
