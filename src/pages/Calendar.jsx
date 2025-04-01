import React, { useState } from "react";
import Navbar from "../components/NavBar";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarPage = () => {
  const [date, setDate] = useState(new Date());
  const [appointments, setAppointments] = useState([]);
  const [newAppointment, setNewAppointment] = useState("");

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
  };

  const handleAddAppointment = () => {
    if (newAppointment.trim() !== "") {
      setAppointments([...appointments, { date, text: newAppointment }]);
      setNewAppointment("");
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100 flex-col">
      <Navbar />
      <main className="flex-1 p-6">
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Calendar</h1>
          <p className="text-gray-600">
            Select a date to view or add appointments.
          </p>
          <div className="mt-4">
            <Calendar onChange={handleDateChange} value={date} />
          </div>
        </div>

        {/* Appointment Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mt-6">
          <h2 className="text-xl font-bold text-gray-800">
            Appointments on {date.toDateString()}
          </h2>
          <ul className="mt-2">
            {appointments
              .filter(
                (appt) => appt.date.toDateString() === date.toDateString()
              )
              .map((appt, index) => (
                <li key={index} className="text-gray-600">
                  🗓 {appt.text}
                </li>
              ))}
          </ul>
          <div className="mt-4">
            <input
              type="text"
              value={newAppointment}
              onChange={(e) => setNewAppointment(e.target.value)}
              className="border p-2 rounded-md w-full"
              placeholder="Add an appointment"
            />
            <button
              onClick={handleAddAppointment}
              className="mt-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
            >
              Add Appointment
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CalendarPage;
