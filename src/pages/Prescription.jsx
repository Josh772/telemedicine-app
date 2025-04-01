import React, { useState } from "react";
import Navbar from "../components/NavBar";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar } from "react-icons/fa"; // Importing FontAwesome star icon

const PrescriptionPage = () => {
  const [prescriptions, setPrescriptions] = useState([
    {
      id: 1,
      name: "Amoxicillin",
      dosage: "500mg",
      doctor: "Dr. Smith",
      date: "March 25, 2025",
    },
    {
      id: 2,
      name: "Ibuprofen",
      dosage: "200mg",
      doctor: "Dr. Patel",
      date: "March 20, 2025",
    },
  ]);
  const [newPrescription, setNewPrescription] = useState({
    name: "",
    dosage: "",
    doctor: "",
    date: "",
  });

  const [feedback, setFeedback] = useState({
    content: "",
    rating: 1,
    hoverRating: null, // To track the hover effect
  });

  const handleAddPrescription = () => {
    if (
      newPrescription.name &&
      newPrescription.dosage &&
      newPrescription.doctor &&
      newPrescription.date
    ) {
      setPrescriptions([
        ...prescriptions,
        { id: Date.now(), ...newPrescription },
      ]);
      setNewPrescription({ name: "", dosage: "", doctor: "", date: "" });
    }
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback submitted:", feedback);
    setFeedback({ content: "", rating: 1, hoverRating: null });
  };

  return (
    <div className="flex min-h-screen bg-gray-100 flex-col">
      <Navbar />
      <main className="flex-1 p-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="bg-white p-6 rounded-lg shadow-md mb-6"
        >
          <h1 className="text-2xl font-bold text-gray-800">Prescriptions</h1>
          <p className="text-gray-600">
            Manage your prescriptions and add new ones.
          </p>
        </motion.div>

        {/* Prescription List with Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="bg-white p-6 rounded-lg shadow-md mb-6"
        >
          <h2 className="text-xl font-bold text-gray-800">
            Your Prescriptions
          </h2>
          <AnimatePresence>
            {prescriptions.map((prescription) => (
              <motion.div
                key={prescription.id}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-200 p-4 rounded-lg mt-2"
              >
                <p className="text-gray-800 font-bold">
                  {prescription.name} - {prescription.dosage}
                </p>
                <p className="text-gray-600">
                  Prescribed by: {prescription.doctor} on {prescription.date}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Add Prescription Form with Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <h2 className="text-xl font-bold text-gray-800">
            Add a Prescription
          </h2>
          <motion.input
            type="text"
            placeholder="Medication Name"
            className="border p-2 rounded-md w-full mt-2"
            value={newPrescription.name}
            onChange={(e) =>
              setNewPrescription({ ...newPrescription, name: e.target.value })
            }
          />
          <motion.input
            type="text"
            placeholder="Dosage"
            className="border p-2 rounded-md w-full mt-2"
            value={newPrescription.dosage}
            onChange={(e) =>
              setNewPrescription({ ...newPrescription, dosage: e.target.value })
            }
          />
          <motion.input
            type="text"
            placeholder="Doctor's Name"
            className="border p-2 rounded-md w-full mt-2"
            value={newPrescription.doctor}
            onChange={(e) =>
              setNewPrescription({ ...newPrescription, doctor: e.target.value })
            }
          />
          <motion.input
            type="date"
            className="border p-2 rounded-md w-full mt-2"
            value={newPrescription.date}
            onChange={(e) =>
              setNewPrescription({ ...newPrescription, date: e.target.value })
            }
          />
          <motion.button
            onClick={handleAddPrescription}
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-transform transform hover:scale-105"
          >
            Add Prescription
          </motion.button>
        </motion.div>

        {/* Feedback Section with Stars */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.7 }}
          className="bg-white p-6 rounded-lg shadow-md mt-8"
        >
          <h2 className="text-xl font-bold text-gray-800">Feedback</h2>
          <p className="text-gray-600 mb-4">
            We value your feedback. Let us know your thoughts on our service.
          </p>

          <form onSubmit={handleFeedbackSubmit}>
            <textarea
              className="border p-2 rounded-md w-full mt-2"
              rows="4"
              placeholder="Write your feedback here..."
              value={feedback.content}
              onChange={(e) =>
                setFeedback({ ...feedback, content: e.target.value })
              }
            ></textarea>

            <div className="mt-4">
              <label className="text-gray-800">Rating:</label>
              <div className="flex space-x-2 mt-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    className={`cursor-pointer ${
                      feedback.rating >= star || feedback.hoverRating >= star
                        ? "text-yellow-500"
                        : "text-gray-300"
                    }`}
                    size={30}
                    onClick={() => setFeedback({ ...feedback, rating: star })}
                    onMouseEnter={() =>
                      setFeedback({ ...feedback, hoverRating: star })
                    }
                    onMouseLeave={() =>
                      setFeedback({ ...feedback, hoverRating: null })
                    }
                  />
                ))}
              </div>
            </div>

            <motion.button
              type="submit"
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-transform transform hover:scale-105"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit Feedback
            </motion.button>
          </form>
        </motion.div>
      </main>
    </div>
  );
};

export default PrescriptionPage;
