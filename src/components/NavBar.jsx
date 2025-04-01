import React from "react";
import { NavLink } from "react-router-dom";
import { HiMagnifyingGlass } from "react-icons/hi2";
import profileImage from "../assets/profile.png"; // Ensure you have a profile image in src/assets

function Navbar() {
  return (
    <nav className="bg-[#28a745] text-white p-4 flex items-center justify-between font-roboto">
      {/* Brand Name */}
      <div className="text-2xl font-semibold">
        <NavLink to="/" className="text-white hover:text-gray-200 transition">
          TeleHealth
        </NavLink>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-6">
        {[
          "dashboard",
          "messages",
          "appointments",
          "calendar",
          "prescriptions",
          "help",
        ].map((route) => (
          <NavLink
            key={route}
            to={`/${route}`}
            className={({ isActive }) =>
              `text-white hover:text-gray-200 transition ${
                isActive ? "font-bold border-b-2 border-white" : ""
              }`
            }
          >
            {route.charAt(0).toUpperCase() + route.slice(1)}
          </NavLink>
        ))}
      </div>

      {/* Right Section: Search & Profile */}
      <div className="flex items-center space-x-4">
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="p-2 pr-8 rounded-lg bg-white text-gray-800 focus:outline-none"
          />
          <HiMagnifyingGlass className="absolute right-2 top-2 text-gray-500 text-xl cursor-pointer" />
        </div>

        {/* Profile Picture */}
        <NavLink to="/profile">
          <img
            src={profileImage}
            alt="Profile"
            className="w-10 h-10 rounded-full cursor-pointer hover:ring-2 hover:ring-white transition"
          />
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
