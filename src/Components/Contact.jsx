import React, { useState } from "react";

import contact from "../assets/contact.png"; // Adjust the path as necessary
import Navbar from "./Navbar";
import Footer from "./Footer";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-10 flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 px-2 relative overflow-hidden">
        {/* Decorative background shapes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full opacity-30 blur-2xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-200 rounded-full opacity-30 blur-2xl animate-pulse"></div>
        </div>
        {/* Responsive layout: image + form */}
        <div className="relative z-10 w-full max-w-4xl mx-auto my-10 flex flex-col md:flex-row items-center gap-8">
          {/* Animated illustration */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img
              src={contact}
              alt="Contact Illustration"
              className="w-80 h-70 -mr-6 object-contain animate-fade-in rounded-xl"
              loading="lazy"
            />
          </div>
          {/* Main content */}
          <div className="w-full md:w-1/2">
            <div className="bg-white/90 rounded-lg shadow-md backdrop-blur-sm p-6 animate-fade-in">
              <h2 className="text-2xl font-bold text-center mb-6">
                Contact Us
              </h2>
              {submitted ? (
                <div className="text-green-600 text-center text-lg mt-8">
                  Thank you for contacting us!
                </div>
              ) : (
                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div>
                    <label className="block font-medium mb-1" htmlFor="name">
                      Name
                    </label>
                    <input
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      type="text"
                      name="name"
                      id="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block font-medium mb-1" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      type="email"
                      name="email"
                      id="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="Your Email"
                    />
                  </div>
                  <div>
                    <label className="block font-medium mb-1" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      name="message"
                      id="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      placeholder="Your Message"
                      rows={5}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
        {/* Fade-in animation keyframes */}
        <style>
          {`
          .animate-fade-in {
            animation: fadeIn 1.2s ease;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(30px);}
            to { opacity: 1; transform: translateY(0);}
          }
        `}
        </style>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
