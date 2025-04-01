import "./App.css"; // Ensure this file exists
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login"; // Import the Login component
import { motion } from "framer-motion";
import DashboardPatient from "./pages/DashboardPatient";
import DoctorDashboard from "./pages/DoctorDashboard";
import RequestAppointment from "./pages/RequestAppointment";
import Messages from "./pages/Messages"; // Create these pages
import Appointments from "./pages/Appointments";
import Calendar from "./pages/Calendar";
import PrescriptionPage from "./pages/Prescription";
import HelpSupportPage from "./pages/HelpSupport";
import Profile from "./pages/profile"; // Import the ProfilePage
import EditProfile from "./pages/EditProfile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<DashboardPatient />} />
        <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
        <Route path="/request-appointment" element={<RequestAppointment />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/prescriptions" element={<PrescriptionPage />} />
        <Route path="/help" element={<HelpSupportPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/edit" element={<EditProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
