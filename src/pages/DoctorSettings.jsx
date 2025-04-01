import React, { useState } from "react";
import DoctorNavbar from "../components/DoctorNavbar";

const DoctorSettings = () => {
  const [name, setName] = useState("Dr. Smith");
  const [specialty, setSpecialty] = useState("General Medicine");
  const [email, setEmail] = useState("doctor@example.com");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [fileName, setFileName] = useState(""); // To display the file name

  // Handle the file change and update the profile picture
  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
      setFileName(file.name); // Set the file name
    }
  };

  // Handle save changes (simulate saving profile picture)
  const handleSaveChanges = () => {
    // Simulate saving the changes (e.g., API call to upload profile pic)
    alert("Settings saved successfully!");
    console.log("Profile Picture Uploaded:", profilePic); // Placeholder for actual upload logic
    console.log("Name:", name, "Specialty:", specialty, "Email:", email); // Log other fields
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <DoctorNavbar profilePic="doctor-profile.jpg" name="Dr. Smith" />
      <div className="p-6 flex-1">
        <h1 className="text-3xl font-semibold text-gray-800 mb-8">Settings</h1>

        {/* Profile Information Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Profile Information
          </h2>
          <div className="flex items-center space-x-6 mb-6">
            <div className="w-24 h-24 rounded-full overflow-hidden">
              <img
                src={profilePic || "doctor-profile.jpg"}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="profilePic"
                className="text-sm text-gray-600 cursor-pointer"
              >
                Change Profile Picture
              </label>
              <div className="relative">
                <input
                  type="file"
                  id="profilePic"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  onChange={handleProfilePicChange}
                  accept="image/*"
                />
                <button
                  className="bg-[#28a745] text-white py-2 px-6 rounded-lg mt-2"
                  onClick={() => document.getElementById("profilePic").click()}
                >
                  {fileName ? fileName : "Choose File"}
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label
                className="block text-sm text-gray-600 mb-2"
                htmlFor="name"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#28a745]"
              />
            </div>
            <div>
              <label
                className="block text-sm text-gray-600 mb-2"
                htmlFor="specialty"
              >
                Specialty
              </label>
              <input
                type="text"
                id="specialty"
                value={specialty}
                onChange={(e) => setSpecialty(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#28a745]"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#28a745] mb-6"
            />
          </div>
        </div>

        {/* Password Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Change Password
          </h2>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label
                className="block text-sm text-gray-600 mb-2"
                htmlFor="newPassword"
              >
                New Password
              </label>
              <input
                type="password"
                id="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#28a745]"
              />
            </div>
            <div>
              <label
                className="block text-sm text-gray-600 mb-2"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-[#28a745]"
              />
            </div>
          </div>
        </div>

        {/* Notification Preferences Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Notification Preferences
          </h2>
          <div className="flex items-center space-x-4">
            <label htmlFor="notifications" className="text-sm text-gray-600">
              Enable Notifications
            </label>
            <input
              type="checkbox"
              id="notifications"
              checked={notificationsEnabled}
              onChange={() => setNotificationsEnabled(!notificationsEnabled)}
              className="h-6 w-6"
            />
          </div>
        </div>

        {/* Save Changes Button */}
        <div className="flex justify-center">
          <button
            onClick={handleSaveChanges}
            className="bg-[#28a745] text-white py-3 px-8 rounded-lg hover:bg-green-700 transition duration-300"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorSettings;
