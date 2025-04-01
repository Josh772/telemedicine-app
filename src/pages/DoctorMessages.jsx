import React, { useState } from "react";
import DoctorNavbar from "../components/DoctorNavbar";

const DoctorMessages = () => {
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [messages, setMessages] = useState({});
  const [newMessage, setNewMessage] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const patients = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Robert Brown" },
  ];

  const handleSelectPatient = (patient) => {
    setSelectedPatient(patient);
    if (!messages[patient.id]) {
      setMessages({ ...messages, [patient.id]: [] });
    }
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages({
        ...messages,
        [selectedPatient.id]: [
          ...messages[selectedPatient.id],
          { sender: "Doctor", text: newMessage },
        ],
      });
      setNewMessage("");
    }
  };

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <DoctorNavbar profilePic="doctor-profile.jpg" name="Dr. Smith" />

      {/* Main Body Content */}
      <div className="flex flex-1 p-6">
        <div className="w-1/4 bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Patients
          </h2>
          <ul className="space-y-3">
            {patients.map((patient) => (
              <li
                key={patient.id}
                className={`p-3 cursor-pointer rounded-lg transition duration-300 ${
                  selectedPatient?.id === patient.id
                    ? "bg-[#28a745] text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
                onClick={() => handleSelectPatient(patient)}
              >
                {patient.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Messages Section */}
        <div className="w-3/4 bg-white p-6 shadow-lg rounded-lg ml-4 flex flex-col">
          {selectedPatient ? (
            <>
              <h2 className="text-2xl font-semibold text-gray-800 border-b pb-3 mb-4">
                Chat with {selectedPatient.name}
              </h2>
              <div className="flex-1 overflow-y-auto p-6 bg-gray-100 rounded-lg shadow-inner">
                {messages[selectedPatient.id]?.map((msg, index) => (
                  <div
                    key={index}
                    className={`p-3 mb-3 rounded-lg max-w-xs mx-auto ${
                      msg.sender === "Doctor"
                        ? "bg-[#28a745] text-white text-right"
                        : "bg-[#17a2b8] text-white text-left"
                    }`}
                  >
                    {msg.text}
                  </div>
                ))}
              </div>
              <div className="flex mt-4 border-t pt-4">
                <input
                  type="text"
                  className="flex-1 p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#28a745]"
                  placeholder="Type a message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                />
                <button
                  className="ml-4 bg-[#28a745] text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300"
                  onClick={handleSendMessage}
                >
                  Send
                </button>
              </div>
            </>
          ) : (
            <p className="text-center text-gray-500 w-full">
              Select a patient to start messaging.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DoctorMessages;
