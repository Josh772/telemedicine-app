import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/NavBar"; // Import Navbar component

const EditProfile = () => {
  const navigate = useNavigate();

  // Example patient profile data
  const [patient, setPatient] = useState({
    name: "Joshua Amos",
    dob: "1990-01-01",
    email: "joshua@sendit.zone",
    phone: "+1234567890",
    profilePicture: "https://via.placeholder.com/150", // Placeholder for profile picture
  });

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatient((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle profile picture change
  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPatient({ ...patient, profilePicture: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveChanges = () => {
    // Save updated profile to local storage
    localStorage.setItem("patientProfile", JSON.stringify(patient));

    // Redirect to profile page after saving
    navigate("/profile");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-3xl mx-auto p-8 bg-white rounded-2xl shadow-xl mt-10">
        <h1 className="text-3xl font-semibold text-gray-800 mb-8 flex items-center">
          <span className="text-teal-500">👤</span> Edit Profile
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

        {/* Profile Edit Form */}
        <div className="space-y-6">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <label className="text-md text-gray-600 mb-2 block" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={patient.name}
              onChange={handleChange}
              className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <label className="text-md text-gray-600 mb-2 block" htmlFor="dob">
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={patient.dob}
              onChange={handleChange}
              className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <label className="text-md text-gray-600 mb-2 block" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={patient.email}
              onChange={handleChange}
              className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500"
            />
          </div>

          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <label className="text-md text-gray-600 mb-2 block" htmlFor="phone">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={patient.phone}
              onChange={handleChange}
              className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500"
            />
          </div>
        </div>

        {/* Save Changes Button */}
        <div className="mt-6">
          <button
            onClick={handleSaveChanges}
            className="bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition duration-300"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
