import React from "react";
import Navbar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import dayjs from "dayjs";

const DashboardPatient = () => {
  const navigate = useNavigate();

  // Sample data for charts
  const appointmentData = [
    { date: "2025-03-01", appointments: 10 },
    { date: "2025-03-02", appointments: 15 },
    { date: "2025-03-03", appointments: 7 },
    { date: "2025-03-04", appointments: 18 },
    { date: "2025-03-05", appointments: 25 },
    { date: "2025-03-06", appointments: 30 },
    { date: "2025-03-07", appointments: 40 },
  ];

  const healthData = [
    { day: "2025-03-01", hydration: 5, exercise: 30 },
    { day: "2025-03-02", hydration: 7, exercise: 45 },
    { day: "2025-03-03", hydration: 6, exercise: 40 },
    { day: "2025-03-04", hydration: 8, exercise: 35 },
    { day: "2025-03-05", hydration: 6, exercise: 50 },
    { day: "2025-03-06", hydration: 7, exercise: 60 },
    { day: "2025-03-07", hydration: 8, exercise: 30 },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <main className="flex-1 p-8 relative z-10">
        <Navbar />

        {/* Welcome Section */}
        <div className="bg-white p-6 rounded-2xl shadow-lg mb-8 border border-gray-200">
          <h1 className="text-3xl font-bold text-gray-900">Welcome, Joshua!</h1>
          <p className="text-gray-600 text-lg">
            Here’s a quick overview of your activity.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <button
            onClick={() => navigate("/appointments")}
            className="bg-green-500 text-white p-6 rounded-xl shadow-md cursor-pointer hover:bg-green-600 flex items-center justify-center text-lg font-semibold transition-transform transform hover:scale-105"
          >
            📅 Book Appointment
          </button>
          <button
            onClick={() => navigate("/prescriptions")}
            className="bg-blue-500 text-white p-6 rounded-xl shadow-md cursor-pointer hover:bg-blue-600 flex items-center justify-center text-lg font-semibold transition-transform transform hover:scale-105"
          >
            📂 View Records
          </button>
          <button
            onClick={() => navigate("/help")}
            className="bg-teal-500 text-white p-6 rounded-xl shadow-md cursor-pointer hover:bg-teal-600 flex items-center justify-center text-lg font-semibold transition-transform transform hover:scale-105"
          >
            💬 Chat Support
          </button>
        </div>

        {/* Health Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <h2 className="text-xl font-bold text-gray-800">
              Appointments Over Time
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={appointmentData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="appointments" stroke="#28a745" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <h2 className="text-xl font-bold text-gray-800">
              Health Stats (Hydration & Exercise)
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={healthData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="hydration" stroke="#17a2b8" />
                <Line type="monotone" dataKey="exercise" stroke="#ffc107" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Additional Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <h2 className="text-xl font-bold text-gray-800">
              Upcoming Appointments
            </h2>
            <ul className="text-gray-600 mt-3 space-y-2">
              <li className="flex items-center">
                📅{" "}
                <span className="ml-2">
                  April 5, 2025 - Dr. Smith (Dermatology) - 10:00 AM
                </span>
              </li>
              <li className="flex items-center">
                📅{" "}
                <span className="ml-2">
                  April 12, 2025 - Dr. Patel (Cardiology) - 2:30 PM
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <h2 className="text-xl font-bold text-gray-800">
              Recent Medical History
            </h2>
            <ul className="text-gray-600 mt-3 space-y-2">
              <li className="flex items-center">
                ✔{" "}
                <span className="ml-2">
                  March 20, 2025 - Blood Test - Normal
                </span>
              </li>
              <li className="flex items-center">
                ✔{" "}
                <span className="ml-2">
                  March 10, 2025 - Blood Pressure Check - 120/80 mmHg
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <h2 className="text-xl font-bold text-gray-800">Health Tips</h2>
            <ul className="text-gray-600 mt-3 space-y-2">
              <li className="flex items-center">
                💧{" "}
                <span className="ml-2">
                  Stay hydrated - Drink at least 8 glasses of water daily.
                </span>
              </li>
              <li className="flex items-center">
                🏃‍♂️{" "}
                <span className="ml-2">
                  Exercise regularly - 30 minutes of activity per day.
                </span>
              </li>
              <li className="flex items-center">
                🥗{" "}
                <span className="ml-2">
                  Eat a balanced diet rich in vegetables and proteins.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPatient;
