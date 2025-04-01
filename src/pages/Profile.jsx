import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/NavBar"; // Import Navbar component

const Profile = () => {
  const navigate = useNavigate();

  // Example patient profile data
  const [patient, setPatient] = useState({
    name: "Joshua Amos",
    dob: "1990-01-01",
    email: "joshua@sendit.zone",
    phone: "+1234567890",
    profilePicture: "https://via.placeholder.com/150", // Placeholder for profile picture
    medicalHistory: [
      { date: "2025-03-15", condition: "Flu" },
      { date: "2025-02-20", condition: "Back Pain" },
    ],
    allergies: ["Penicillin", "Pollen"],
  });

  // Handle profile picture change
  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPatient({ ...patient, profilePicture: reader.result });
      };
      reader.readAsDataURL(file); // Read the file as a Data URL
    }
  };

  const handleEditProfile = () => {
    navigate("/profile/edit"); // Navigate to the edit profile page
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-3xl mx-auto p-8 bg-white rounded-2xl shadow-xl mt-10">
        <h1 className="text-3xl font-semibold text-gray-800 mb-8 flex items-center">
          <span className="text-teal-500">👤</span> Your Profile
        </h1>

        {/* Profile Header Section */}
        <div className="flex items-center space-x-6 mb-8">
          <div className="flex-shrink-0">
            <img
              src={patient.profilePicture}
              alt="Profile"
              className="w-40 h-40 rounded-full object-cover border-4 border-teal-500 shadow-xl"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-semibold text-gray-800">
              {patient.name}
            </h2>
            <div className="mt-4 space-y-2">
              <p className="text-md text-gray-600">
                <strong>Date of Birth:</strong> {patient.dob}
              </p>
              <p className="text-md text-gray-600">
                <strong>Email:</strong> {patient.email}
              </p>
              <p className="text-md text-gray-600">
                <strong>Phone:</strong> {patient.phone}
              </p>
            </div>
            <div className="mt-4">
              <button
                onClick={handleEditProfile}
                className="bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition duration-300"
              >
                Edit Profile
              </button>
            </div>
            {/* Image Upload */}
            <div className="mt-4">
              <label
                htmlFor="profile-picture-upload"
                className="bg-teal-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-teal-600"
              >
                Upload New Profile Picture
              </label>
              <input
                type="file"
                id="profile-picture-upload"
                accept="image/*"
                className="hidden"
                onChange={handleProfilePictureChange}
              />
            </div>
          </div>
        </div>

        {/* Medical Information Section */}
        <div className="space-y-6">
          {/* Medical History */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Medical History
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              {patient.medicalHistory.length === 0 ? (
                <p className="text-gray-500">No medical history available.</p>
              ) : (
                patient.medicalHistory.map((history, index) => (
                  <li key={index} className="text-gray-600">
                    {history.date} - {history.condition}
                  </li>
                ))
              )}
            </ul>
          </div>

          {/* Allergies */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Allergies
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              {patient.allergies.length === 0 ? (
                <p className="text-gray-500">No known allergies.</p>
              ) : (
                patient.allergies.map((allergy, index) => (
                  <li key={index} className="text-gray-600">
                    {allergy}
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
