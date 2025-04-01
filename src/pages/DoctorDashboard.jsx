import React from "react";
import {
  FiCalendar,
  FiUser,
  FiVideo,
  FiClipboard,
  FiDollarSign,
  FiSettings,
} from "react-icons/fi";
import DoctorNavbar from "../components/DoctorNavbar"; // Corrected import

const DoctorsDashboard = () => {
  const upcomingAppointments = [
    { id: 1, patient: "John Doe", time: "10:00 AM", date: "2025-04-05" },
    { id: 2, patient: "Jane Smith", time: "2:30 PM", date: "2025-04-06" },
    { id: 3, patient: "Michael Lee", time: "9:00 AM", date: "2025-04-07" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Use DoctorNavbar instead of Navbar */}
      <DoctorNavbar />
      <div className="max-w-6xl mx-auto p-8">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">
          Doctor's Dashboard
        </h1>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Upcoming Appointments */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold flex items-center mb-4">
              <FiCalendar className="mr-2 text-teal-500" />
              Upcoming Appointments
            </h2>
            <ul>
              {upcomingAppointments.map((appt) => (
                <li key={appt.id} className="flex justify-between p-3 border-b">
                  <span>
                    {appt.patient} - {appt.time}
                  </span>
                  <button className="text-teal-500">View</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Patient Records Access */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold flex items-center mb-4">
              <FiUser className="mr-2 text-teal-500" />
              Patient Records
            </h2>
            <button className="bg-teal-500 text-white w-full py-2 rounded-lg hover:bg-teal-600">
              Access Records
            </button>
          </div>

          {/* Video Consultation */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold flex items-center mb-4">
              <FiVideo className="mr-2 text-teal-500" />
              Video Consultation
            </h2>
            <button className="bg-teal-500 text-white w-full py-2 rounded-lg hover:bg-teal-600">
              Start Call
            </button>
          </div>

          {/* Prescription & Notes */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold flex items-center mb-4">
              <FiClipboard className="mr-2 text-teal-500" />
              Prescriptions & Notes
            </h2>
            <button className="bg-teal-500 text-white w-full py-2 rounded-lg hover:bg-teal-600">
              Write Prescription
            </button>
          </div>

          {/* Earnings Overview */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold flex items-center mb-4">
              <FiDollarSign className="mr-2 text-teal-500" />
              Earnings
            </h2>
            <p className="text-2xl font-bold text-gray-800">$4,500</p>
            <button className="bg-teal-500 text-white w-full mt-4 py-2 rounded-lg hover:bg-teal-600">
              View Details
            </button>
          </div>

          {/* Availability Settings */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold flex items-center mb-4">
              <FiSettings className="mr-2 text-teal-500" />
              Availability Settings
            </h2>
            <button className="bg-teal-500 text-white w-full py-2 rounded-lg hover:bg-teal-600">
              Manage Availability
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorsDashboard;
