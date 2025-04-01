import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db, storage } from "../firebase"; // Import storage for profile pic
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"; // Firebase Storage

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("patient");
  const [profilePic, setProfilePic] = useState(null); // Track profile picture
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Create user in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      let profilePicURL = "";

      if (profilePic) {
        // Upload profile picture
        const storageRef = ref(storage, `profile_pictures/${user.uid}`);
        const uploadTask = uploadBytesResumable(storageRef, profilePic);

        await new Promise((resolve, reject) => {
          uploadTask.on(
            "state_changed",
            null,
            (error) => reject(error),
            async () => {
              profilePicURL = await getDownloadURL(uploadTask.snapshot.ref);
              resolve();
            }
          );
        });
      }

      // Store user data in Firestore
      await setDoc(doc(db, "users", user.uid), {
        name,
        email,
        role,
        profilePic: profilePicURL || "", // Store image URL
      });

      alert("Signup successful!");
      navigate(role === "doctor" ? "/doctor-dashboard" : "/patient-dashboard");
    } catch (err) {
      setError(
        err.code === "auth/email-already-in-use"
          ? "This email is already registered."
          : err.message
      );
    } finally {
      setLoading(false);
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

          {/* Profile Picture Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Profile Picture
            </label>
            <input
              type="file"
              accept="image/*"
              className="mt-1 p-2 w-full border rounded-lg focus:ring-2 focus:ring-[#17a2b8] outline-none"
              onChange={(e) => setProfilePic(e.target.files[0])}
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

          {/* Sign Up Button */}
          <motion.button
            type="submit"
            disabled={loading}
            className={`w-full text-white py-3 rounded-lg transition ${
              loading ? "bg-gray-400" : "bg-[#28a745] hover:bg-[#218838]"
            }`}
            whileHover={!loading ? { scale: 1.1 } : {}}
            whileTap={!loading ? { scale: 0.95 } : {}}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </motion.button>

          {/* Login Button */}
          <motion.button
            type="button"
            onClick={() => navigate("/login")}
            className="w-full bg-[#17a2b8] text-white py-3 rounded-lg hover:bg-[#138496] transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Login
          </motion.button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
