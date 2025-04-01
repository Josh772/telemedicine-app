import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const DoctorNavbar = ({ profilePic, name }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const profilePicRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

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

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-[#28a745] text-white p-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <h1 className="text-2xl font-bold">TeleHealth</h1>
      </div>

      <div className="flex items-center space-x-3">
        <div
          className="w-10 h-10 rounded-full overflow-hidden border-2 border-white cursor-pointer"
          onClick={toggleDropdown}
          ref={profilePicRef}
        >
          <img
            src={profilePic || "default-profile.jpg"}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {isDropdownOpen && (
          <motion.div
            className="absolute right-0 mt-2 w-40 bg-white text-black rounded-lg shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            ref={dropdownRef}
          >
            <div className="text-xl p-2">{name}</div>
            <ul className="p-2">
              <li className="p-2 hover:bg-[#28a745] hover:text-white">
                <Link to="/doctor-dashboard">Dashboard</Link>
              </li>
              <li className="p-2 hover:bg-[#28a745] hover:text-white">
                <Link to="/doctor-appointments">Appointments</Link>
              </li>
              <li className="p-2 hover:bg-[#28a745] hover:text-white">
                <Link to="/doctor-messages">Messages</Link>
              </li>
              <li className="p-2 hover:bg-[#28a745] hover:text-white">
                {/* Updated Settings Route */}
                <Link to="/doctor-settings">Settings</Link>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default DoctorNavbar;
