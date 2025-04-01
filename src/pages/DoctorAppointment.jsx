import React, { useState } from "react";
import DoctorNavbar from "../components/DoctorNavbar";

const DoctorAppointments = () => {
  const [appointments, setAppointments] = useState([
    { id: 1, patient: "John Doe", time: "10:00 AM", status: "Upcoming" },
    { id: 2, patient: "Jane Smith", time: "12:30 PM", status: "Completed" },
    { id: 3, patient: "Robert Brown", time: "3:00 PM", status: "Upcoming" },
  ]);

  const [filter, setFilter] = useState("All");

  const filteredAppointments = appointments.filter(
    (appointment) => filter === "All" || appointment.status === filter
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <DoctorNavbar profilePic="doctor-profile.jpg" name="Dr. Smith" />

      <div className="max-w-4xl mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Doctor's Appointments
        </h2>

        {/* Filter Section */}
        <div className="mb-4 flex space-x-4">
          {["All", "Upcoming", "Completed"].map((status) => (
            <button
              key={status}
              className={`px-4 py-2 rounded-full font-semibold transition-all ${
                filter === status ? "bg-[#28a745] text-white" : "bg-gray-200"
              }`}
              onClick={() => setFilter(status)}
            >
              {status}
            </button>
          ))}
        </div>

        {/* Appointment List */}
        <div className="space-y-4">
          {filteredAppointments.length > 0 ? (
            filteredAppointments.map((appointment) => (
              <div
                key={appointment.id}
                className="p-4 bg-gray-50 rounded-lg shadow-md flex justify-between items-center"
              >
                <div>
                  <p className="text-lg font-semibold text-gray-800">
                    {appointment.patient}
                  </p>
                  <p className="text-gray-600">{appointment.time}</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    appointment.status === "Upcoming"
                      ? "bg-yellow-300"
                      : "bg-green-500 text-white"
                  }`}
                >
                  {appointment.status}
                </span>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">
              No appointments available.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DoctorAppointments;
