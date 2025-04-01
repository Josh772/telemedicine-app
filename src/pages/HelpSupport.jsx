import React, { useState } from "react";
import Navbar from "../components/NavBar";
import { motion } from "framer-motion";

const HelpAndSupportPage = () => {
  const [contactInfo, setContactInfo] = useState({
    email: "",
    message: "",
  });
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactInfo({ ...contactInfo, [name]: value });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Info:", contactInfo);
    setContactInfo({ email: "", message: "" });
  };

  const toggleAnswer = (index) => {
    setSelectedQuestion(selectedQuestion === index ? null : index);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const faqData = [
    {
      question: "How do I create a prescription?",
      answer:
        "To create a prescription, go to the Prescriptions page and click on 'Add Prescription'.",
    },
    {
      question: "How can I update my profile?",
      answer:
        "To update your profile, go to the Settings page and edit your information.",
    },
    {
      question: "I need help with something else.",
      answer: "Feel free to contact us using the form below.",
    },
    {
      question: "What is TeleHealth?",
      answer:
        "TeleHealth is an online telemedicine platform that allows users to manage prescriptions and consult with doctors remotely.",
    },
  ];

  const filteredFaqData = faqData.filter((faq) =>
    faq.question.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="flex min-h-screen bg-gray-100 flex-col">
      <Navbar />
      <main className="flex-1 p-6">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="bg-white p-6 rounded-lg shadow-md mb-6"
        >
          <h1 className="text-2xl font-bold text-gray-800">Help & Support</h1>
          <p className="text-gray-600">
            Find answers to your questions or reach out to support.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="bg-white p-6 rounded-lg shadow-md mb-6"
        >
          <input
            type="text"
            placeholder="Search for answers..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="border p-2 rounded-md w-full"
          />
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="bg-white p-6 rounded-lg shadow-md mb-6"
        >
          <h2 className="text-xl font-bold text-gray-800">
            Frequently Asked Questions
          </h2>
          <div className="mt-4">
            {filteredFaqData.map((faq, index) => (
              <div key={index} className="mb-4">
                <div
                  className="font-bold text-gray-800 cursor-pointer"
                  onClick={() => toggleAnswer(index)}
                >
                  {faq.question}
                </div>
                {selectedQuestion === index && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-gray-600 mt-2"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Contact Support Form */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <h2 className="text-xl font-bold text-gray-800">Contact Support</h2>
          <form onSubmit={handleContactSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={contactInfo.email}
              onChange={handleContactChange}
              className="border p-2 rounded-md w-full mt-2"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={contactInfo.message}
              onChange={handleContactChange}
              className="border p-2 rounded-md w-full mt-4"
              rows="4"
            ></textarea>
            <motion.button
              type="submit"
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-transform transform hover:scale-105"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </main>
    </div>
  );
};

export default HelpAndSupportPage;
