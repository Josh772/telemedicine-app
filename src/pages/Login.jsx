import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"; // Ensure correct Firebase import
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion for animations

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Reset error message

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!"); // Replace with navigation later
      navigate("/dashboard"); // Redirect user to the dashboard after login
    } catch (err) {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      {/* Motion-enabled Login Form */}
      <motion.div
        className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md"
        initial={{ opacity: 0 }} // Initial state (hidden)
        animate={{ opacity: 1 }} // Final state (visible)
        transition={{ duration: 0.5 }} // Animation duration
      >
        <h1 className="text-3xl font-bold text-center text-[#28a745] mb-6">
          Login
        </h1>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <motion.input
              type="email"
              className="mt-1 p-3 w-full border rounded-lg focus:ring-2 focus:ring-[#17a2b8] outline-none"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              initial={{ x: -100 }} // Start from left
              animate={{ x: 0 }} // Move to the original position
              transition={{ type: "spring", stiffness: 100, damping: 25 }} // Add spring effect
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <motion.input
              type="password"
              className="mt-1 p-3 w-full border rounded-lg focus:ring-2 focus:ring-[#17a2b8] outline-none"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              initial={{ x: -100 }} // Start from left
              animate={{ x: 0 }} // Move to the original position
              transition={{ type: "spring", stiffness: 100, damping: 25 }} // Add spring effect
            />
          </div>

          <motion.button
            type="submit"
            className="w-full bg-[#28a745] text-white py-3 rounded-lg hover:bg-[#218838] transition"
            whileHover={{ scale: 1.1 }} // Button scales up on hover
            whileTap={{ scale: 0.95 }} // Button scales down on tap
          >
            Login
          </motion.button>
        </form>

        {/* Forgot password link */}
        <motion.p
          className="text-center text-sm mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }} // Delay for smooth fade-in
        >
          <motion.a
            href="/forgot-password" // You can replace with the correct route if necessary
            className="text-blue-500 hover:underline"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            Forgot Password?
          </motion.a>
        </motion.p>
      </motion.div>
    </div>
  );
}

export default Login;
