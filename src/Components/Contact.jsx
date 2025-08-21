import React, { useState } from "react";
import axios from "axios";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaRocket,
  FaClock,
  FaCheckCircle,
  FaPaperPlane,
  FaIndustry,
  FaUsers,
  FaHeadset,
} from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 🔹 Validation
  const validateForm = () => {
    let newErrors = {};

    if (!form.name.trim()) newErrors.name = "Full Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^([^\s@]+)@([^\s@]+)\.([^\s@]+)$/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }

    if (form.phone && !/^\d{10}$/.test(form.phone)) {
      newErrors.phone = "Phone must be 10 digits";
    }

    if (!form.message.trim()) newErrors.message = "Message is required";

    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // clear error on input
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-sky-50 relative overflow-hidden">
        {/* Hero Section */}
        <div className="relative pt-20 pb-12 px-4 sm:px-6 lg:px-8 top-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-sm font-medium mb-6">
              <FaRocket className="w-4 h-4 mr-2" />
              Get In Touch
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Let's Start a
              <span className="block text-sky-600 mt-2">Conversation</span>
            </h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative px-4 sm:px-6 lg:px-8 pb-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <div className="text-center lg:text-left mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Connect With Us
                </h2>
                <p className="text-gray-600">
                  Multiple ways to reach our team of industrial solution
                  experts.
                </p>
              </div>

              {/* Cards with Click Action */}
              <div className="space-y-4">
                {[
                  {
                    icon: FaPhone,
                    title: "Call Us",
                    content: "+91 77718 99901",
                    link: "tel:+917771899901",
                    color: "from-green-500 to-green-600",
                    bgColor: "from-green-50 to-green-100",
                  },
                  {
                    icon: FaEnvelope,
                    title: "Email Us",
                    content: "contact@impetustechno.com",
                    link: "mailto:contact@impetustechno.com",
                    subtitle: "We'll respond within 24hrs",
                    color: "from-blue-500 to-blue-600",
                    bgColor: "from-blue-50 to-blue-100",
                  },
                  {
                    icon: FaMapMarkerAlt,
                    title: "Visit Us",
                    content: "Vadodara, Gujarat",
                    link: "https://maps.app.goo.gl/BXhgMyEEhwUhT4dY9", // could be google maps
                    color: "from-purple-500 to-purple-600",
                    bgColor: "from-purple-50 to-purple-100",
                  },
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-gray-100"
                  >
                    <div className="flex items-center">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 group-hover:text-sky-600 transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-gray-800 font-medium">
                          {item.content}
                        </p>
                        {item.subtitle && (
                          <p className="text-sm text-gray-500">
                            {item.subtitle}
                          </p>
                        )}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-gray-200 p-6 sm:p-8 lg:p-10">
                {submitted ? (
                  <div className="text-center py-12">
                    <FaCheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Message Sent Successfully!
                    </h3>
                  </div>
                ) : (
                  <form className="space-y-6">
                    {/* Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-sky-500"
                          placeholder="Enter your full name"
                        />
                        {errors.name && (
                          <p className="text-red-500 text-sm">{errors.name}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-sky-500"
                          placeholder="Enter your email"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    {/* Phone + Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-sky-500"
                          placeholder="Enter phone number"
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-sm">{errors.phone}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          name="companyName"
                          value={form.companyName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-sky-500"
                          placeholder="Enter company name"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows="5"
                        className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-sky-500"
                        placeholder="Tell us about your requirements..."
                      />
                      {errors.message && (
                        <p className="text-red-500 text-sm">{errors.message}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-4 font-semibold rounded-lg ${
                        isSubmitting
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-gradient-to-r from-sky-600 to-sky-700 text-white hover:scale-105 transform transition"
                      }`}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
