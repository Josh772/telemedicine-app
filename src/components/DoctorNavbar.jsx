import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const DoctorNavbar = ({ profilePic, name }) => {
  // State to manage dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Refs to handle click outside detection
  const dropdownRef = useRef(null);
  const profilePicRef = useRef(null);

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown if click is outside the dropdown or profile picture
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        profilePicRef.current &&
        !profilePicRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    // Attach event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-[#28a745] text-white p-4 flex justify-between items-center">
      {/* Brand Name */}
      <div className="flex items-center space-x-2">
        <h1 className="text-2xl font-bold">TeleHealth</h1>
      </div>

      {/* Doctor's Profile Picture and Dropdown */}
      <div className="flex items-center space-x-3">
        {/* Profile Picture */}
        <div
          className="w-10 h-10 rounded-full overflow-hidden border-2 border-white cursor-pointer"
          onClick={toggleDropdown} // Toggle dropdown when the profile picture is clicked
          ref={profilePicRef} // Ref for profile picture
        >
          <img
            src={profilePic || "default-profile.jpg"} // Fallback image
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Dropdown for doctor-specific links */}
        {isDropdownOpen && (
          <motion.div
            className="absolute right-0 mt-2 w-40 bg-white text-black rounded-lg shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            ref={dropdownRef} // Ref for dropdown menu
          >
            <div className="text-xl">{name}</div>
            <ul className="p-2">
              <li className="p-2 hover:bg-[#28a745] hover:text-white">
                <Link to="/doctor-dashboard">Dashboard</Link>
              </li>
              <li className="p-2 hover:bg-[#28a745] hover:text-white">
                <Link to="/appointments">Appointments</Link>
              </li>
              <li className="p-2 hover:bg-[#28a745] hover:text-white">
                <Link to="/messages">Messages</Link>
              </li>
              <li className="p-2 hover:bg-[#28a745] hover:text-white">
                <Link to="/settings">Settings</Link>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default DoctorNavbar;
