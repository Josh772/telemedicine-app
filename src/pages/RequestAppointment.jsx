import React, { useState } from "react";

function RequestAppointment() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [reason, setReason] = useState("");
  const [error, setError] = useState("");

  const handleRequest = (e) => {
    e.preventDefault();

    if (!date || !time || !reason) {
      setError("Please fill out all fields.");
      return;
    }

    // Add logic to handle the appointment request (e.g., API call)
    alert("Appointment requested successfully!");
  };

  return (
    <div className="p-8 bg-white shadow-md rounded-md max-w-lg mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Request New Appointment</h2>
      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

      <form onSubmit={handleRequest} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Date
          </label>
          <input
            type="date"
            className="mt-1 p-3 w-full border rounded-lg"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Time
          </label>
          <input
            type="time"
            className="mt-1 p-3 w-full border rounded-lg"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Reason
          </label>
          <textarea
            className="mt-1 p-3 w-full border rounded-lg"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#28a745] text-white py-3 rounded-lg hover:bg-[#218838]"
        >
          Request Appointment
        </button>
      </form>
    </div>
  );
}

export default RequestAppointment;
