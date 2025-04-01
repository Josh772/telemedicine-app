import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase"; // Import the db from Firebase
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion
import { doc, setDoc } from "firebase/firestore"; // Firestore methods to save data

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("patient"); // Role default to 'patient'
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError(""); // Reset error message

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Store user info in Firestore with role (doctor or patient)
      await setDoc(doc(db, "users", user.uid), {
        name,
        email,
        role, // 'doctor' or 'patient'
      });

      alert("Signup successful!");

      // Redirect based on role
      if (role === "doctor") {
        navigate("/doctor-dashboard"); // Redirect to Doctor's dashboard
      } else {
        navigate("/patient-dashboard"); // Redirect to Patient's dashboard
      }
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        setError("This email is already registered. Try logging in.");
      } else {
        setError(err.message);
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-[#28a745] mb-6">
          Sign Up
        </h1>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              className="mt-1 p-3 w-full border rounded-lg focus:ring-2 focus:ring-[#17a2b8] outline-none"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="mt-1 p-3 w-full border rounded-lg focus:ring-2 focus:ring-[#17a2b8] outline-none"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              className="mt-1 p-3 w-full border rounded-lg focus:ring-2 focus:ring-[#17a2b8] outline-none"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Role Selection Dropdown */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Select Role
            </label>
            <select
              className="mt-1 p-3 w-full border rounded-lg focus:ring-2 focus:ring-[#17a2b8] outline-none"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
            </select>
          </div>

          {/* Motion-enabled Sign Up Button */}
          <motion.button
            type="submit"
            className="w-full bg-[#28a745] text-white py-3 rounded-lg hover:bg-[#218838] transition"
            whileHover={{ scale: 1.1 }} // Button scales up on hover
            whileTap={{ scale: 0.95 }} // Button scales down on tap
          >
            Sign Up
          </motion.button>

          {/* Motion-enabled Login Button */}
          <motion.button
            type="button"
            onClick={() => navigate("/login")}
            className="w-full bg-[#17a2b8] text-white py-3 rounded-lg hover:bg-[#138496] transition"
            whileHover={{ scale: 1.1 }} // Button scales up on hover
            whileTap={{ scale: 0.95 }} // Button scales down on tap
          >
            Login
          </motion.button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
