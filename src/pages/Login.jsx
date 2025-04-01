import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore"; // Import Firestore functions
import { auth, db } from "../firebase"; // Ensure Firestore (`db`) is imported
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Reset error message

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Fetch user role from Firestore
      const userDoc = await getDoc(doc(db, "users", user.uid));

      if (userDoc.exists()) {
        const userRole = userDoc.data().role; // Assuming Firestore has a `role` field

        // Redirect based on user role
        if (userRole === "doctor") {
          navigate("/doctor-dashboard"); // Navigate to doctor dashboard
        } else {
          navigate("/dashboard-patient"); // Corrected path for patient dashboard
        }
      } else {
        setError("User role not found. Contact support.");
      }
    } catch (err) {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <motion.div
        className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
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
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 25 }}
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
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 25 }}
            />
          </div>

          <motion.button
            type="submit"
            className="w-full bg-[#28a745] text-white py-3 rounded-lg hover:bg-[#218838] transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Login
          </motion.button>
        </form>

        <motion.p
          className="text-center text-sm mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.a
            href="/forgot-password"
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
