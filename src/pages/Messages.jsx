import React from "react";
import Navbar from "../components/NavBar";

const Messages = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <main className="flex-1 p-8 relative z-10">
        <Navbar />

        {/* Messages Header */}
        <div className="bg-white p-6 rounded-2xl shadow-lg mb-8 border border-gray-200">
          <h1 className="text-3xl font-bold text-gray-900">Messages</h1>
          <p className="text-gray-600 text-lg">
            Chat with your doctor and support team.
          </p>
        </div>

        {/* Chat Section */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 h-[500px] flex flex-col">
          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto space-y-4 p-4">
            {/* Example Messages */}
            <div className="flex justify-start">
              <div className="bg-gray-200 p-3 rounded-lg max-w-xs">
                Hello, how can I assist you today?
              </div>
            </div>
            <div className="flex justify-end">
              <div className="bg-green-500 text-white p-3 rounded-lg max-w-xs">
                I have a question about my prescription.
              </div>
            </div>
          </div>

          {/* Input Field */}
          <div className="mt-4 flex items-center border-t pt-4">
            <input
              type="text"
              className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Type a message..."
            />
            <button className="ml-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
              Send
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Messages;
