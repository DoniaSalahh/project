"use client";

import EmployeeLayout from "./components/Layout";
import TeamInfo from "./components/TeamInfo";
import {
  FaLink,
  FaUserTie,
  
} from "react-icons/fa";

export default function EmployeeHome() {
  return (
    <EmployeeLayout>
      <div className="space-y-10 max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="bg-white shadow-lg rounded-2xl p-8  text-center">
          <div className="flex justify-center items-center gap-3 mb-4">
            <FaUserTie className="text-4xl text-Royal-Green" />
            <h1 className="text-3xl font-bold text-Royal-Blue">
              Employee Dashboard
            </h1>
          </div>
          <p className="text-Midnight-Green text-lg">
            Welcome to your employee portal – stay connected and informed.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Useful Links */}

          <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-200 ">
            <h2 className="text-xl font-semibold text-Royal-Blue mb-6 flex items-center gap-2">
              <FaLink className="text-Sky-Blue" /> Useful Links (APPS)
            </h2>

            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 text-Royal-Green font-medium bg-Royal-Green/10 px-4 py-2 rounded-lg"
                >
                  HR System
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 text-Royal-Green font-medium bg-Royal-Green/10 px-4 py-2 rounded-lg"
                >
                  Email Portal
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 text-Royal-Green font-medium bg-Royal-Green/10 px-4 py-2 rounded-lg"
                >
                  Training Platform
                </a>
              </li>
            </ul>
          </div>

          {/* Team Info */}
          <TeamInfo />
        </div>
      </div>
    </EmployeeLayout>
  );
}
