import React, { useState, useEffect } from "react";
import Navbar from "../components/NavBar";
import { motion, AnimatePresence } from "framer-motion";
import doctor1 from "../assets/doctor-1.png";
import doctor2 from "../assets/doctor-2.png";
import doctor3 from "../assets/doctor-3.png";
import doctor4 from "../assets/doctor-4.png";
import doctor5 from "../assets/doctor-5.png";

const doctors = [
  { id: 1, name: "Dr. Smith", specialty: "Cardiologist", image: doctor1 },
  { id: 2, name: "Dr. Patel", specialty: "Dermatologist", image: doctor2 },
  { id: 3, name: "Dr. Johnson", specialty: "Neurologist", image: doctor3 },
  { id: 4, name: "Dr. Adams", specialty: "Orthopedic", image: doctor4 },
  { id: 5, name: "Dr. Williams", specialty: "Pediatrician", image: doctor5 },
];

const Appointments = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % doctors.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? doctors.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100 flex-col">
      <Navbar />
      <main className="flex-1 p-6">
        {/* Past Appointments */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            Past Appointments
          </h1>
          <ul className="text-gray-600 mt-2">
            <li>📅 March 15, 2025 - Dr. Smith (Cardiology)</li>
            <li>📅 March 8, 2025 - Dr. Patel (Dermatology)</li>
          </ul>
        </div>

        {/* Book an Appointment */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            Book an Appointment
          </h1>
          <div className="relative flex items-center justify-center mt-4">
            <button
              onClick={prevSlide}
              className="absolute left-0 p-2 bg-gray-200 rounded-full hover:bg-gray-300"
            >
              ◀
            </button>
            <div className="w-full max-w-lg flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
              <AnimatePresence>
                <motion.img
                  key={doctors[currentIndex].id}
                  src={doctors[currentIndex].image}
                  alt={doctors[currentIndex].name}
                  className="w-56 h-56 object-cover rounded-lg mb-4"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>
              <h2 className="text-xl font-bold text-gray-800">
                {doctors[currentIndex].name}
              </h2>
              <p className="text-gray-600">{doctors[currentIndex].specialty}</p>
              <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-transform transform hover:scale-105">
                Book Now
              </button>
            </div>
            <button
              onClick={nextSlide}
              className="absolute right-0 p-2 bg-gray-200 rounded-full hover:bg-gray-300"
            >
              ▶
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Appointments;
