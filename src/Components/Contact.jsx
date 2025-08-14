import React, { useState } from "react";
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
    company: "",
    message: "",
    subject: "general",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-sky-50 relative overflow-hidden ">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-64 h-64 bg-sky-100 rounded-full opacity-30 blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-100 rounded-full opacity-20 blur-3xl animate-pulse-slower"></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-pink-100 rounded-full opacity-25 blur-2xl animate-float"></div>
        </div>

        {/* Hero Section */}
        <div className="relative pt-20 pb-12 px-4 sm:px-6 lg:px-8 top-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-sm font-medium mb-6 animate-fade-in">
              <FaRocket className="w-4 h-4 mr-2" />
              Get In Touch
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-slide-up">
              Let's Start a
              <span className="block text-sky-600 mt-2">Conversation</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-delayed">
              Ready to optimize your industrial operations? Our experts are here
              to help you find the perfect solutions.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative px-4 sm:px-6 lg:px-8 pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Contact Information Cards */}
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

                {/* Contact Cards */}
                <div className="space-y-4">
                  {[
                    {
                      icon: FaPhone,
                      title: "Call Us",
                      content: "+91 98765 43210",
                      subtitle: "Mon-Fri 9AM-6PM",
                      color: "from-green-500 to-green-600",
                      bgColor: "from-green-50 to-green-100",
                    },
                    {
                      icon: FaEnvelope,
                      title: "Email Us",
                      content: "info@impetustechno.com",
                      subtitle: "We'll respond within 24hrs",
                      color: "from-blue-500 to-blue-600",
                      bgColor: "from-blue-50 to-blue-100",
                    },
                    {
                      icon: FaMapMarkerAlt,
                      title: "Visit Us",
                      content: "Vadodara, Gujarat",
                      subtitle: "Schedule an appointment",
                      color: "from-purple-500 to-purple-600",
                      bgColor: "from-purple-50 to-purple-100",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-gray-100 animate-fade-in-up"
                      style={{ animationDelay: `${index * 200}ms` }}
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
                          <p className="text-sm text-gray-500">
                            {item.subtitle}
                          </p>
                        </div>
                      </div>
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${item.bgColor} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}
                      ></div>
                    </div>
                  ))}
                </div>

                {/* Why Choose Us */}
                <div
                  className="mt-8 p-6 bg-gradient-to-r from-sky-600 to-sky-700 rounded-2xl text-white animate-fade-in-up"
                  style={{ animationDelay: "600ms" }}
                >
                  <h3 className="font-bold text-lg mb-4 flex items-center">
                    <FaIndustry className="w-5 h-5 mr-2" />
                    Why Choose Impetus?
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center">
                      <FaCheckCircle className="w-4 h-4 mr-2 text-sky-200" />
                      <span>25+ Years Industry Experience</span>
                    </div>
                    <div className="flex items-center">
                      <FaCheckCircle className="w-4 h-4 mr-2 text-sky-200" />
                      <span>500+ Satisfied Clients</span>
                    </div>
                    <div className="flex items-center">
                      <FaCheckCircle className="w-4 h-4 mr-2 text-sky-200" />
                      <span>24/7 Expert Support</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Form */}
              <div className="lg:col-span-2">
                <div
                  className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-gray-200 p-6 sm:p-8 lg:p-10 animate-fade-in-up"
                  style={{ animationDelay: "400ms" }}
                >
                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <FaCheckCircle className="w-10 h-10 text-green-500" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-gray-600 mb-6">
                        Thank you for reaching out. Our team will get back to
                        you within 24 hours.
                      </p>
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setForm({
                            name: "",
                            email: "",
                            phone: "",
                            company: "",
                            message: "",
                            subject: "general",
                          });
                        }}
                        className="inline-flex items-center px-6 py-3 bg-sky-600 text-white font-semibold rounded-lg hover:bg-sky-700 transition-colors duration-300"
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <>
                      <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                          Ready to Get Started?
                        </h2>
                        <p className="text-gray-600">
                          Fill out the form below and we'll get back to you with
                          a customized solution.
                        </p>
                      </div>

                      <form className="space-y-6" onSubmit={handleSubmit}>
                        {/* Form Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div>
                            <label
                              className="block text-sm font-semibold text-gray-700 mb-2"
                              htmlFor="name"
                            >
                              Full Name *
                            </label>
                            <input
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300"
                              type="text"
                              name="name"
                              id="name"
                              value={form.name}
                              onChange={handleChange}
                              required
                              placeholder="Enter your full name"
                            />
                          </div>

                          <div>
                            <label
                              className="block text-sm font-semibold text-gray-700 mb-2"
                              htmlFor="email"
                            >
                              Email Address *
                            </label>
                            <input
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300"
                              type="email"
                              name="email"
                              id="email"
                              value={form.email}
                              onChange={handleChange}
                              required
                              placeholder="Enter your email"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div>
                            <label
                              className="block text-sm font-semibold text-gray-700 mb-2"
                              htmlFor="phone"
                            >
                              Phone Number
                            </label>
                            <input
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300"
                              type="tel"
                              name="phone"
                              id="phone"
                              value={form.phone}
                              onChange={handleChange}
                              placeholder="Enter your phone number"
                            />
                          </div>

                          <div>
                            <label
                              className="block text-sm font-semibold text-gray-700 mb-2"
                              htmlFor="company"
                            >
                              Company Name
                            </label>
                            <input
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300"
                              type="text"
                              name="company"
                              id="company"
                              value={form.company}
                              onChange={handleChange}
                              placeholder="Enter your company name"
                            />
                          </div>
                        </div>

                        <div>
                          <label
                            className="block text-sm font-semibold text-gray-700 mb-2"
                            htmlFor="subject"
                          >
                            Subject
                          </label>
                          <select
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300"
                            name="subject"
                            id="subject"
                            value={form.subject}
                            onChange={handleChange}
                          >
                            <option value="general">General Inquiry</option>
                            <option value="lubricants">
                              Lubricants & Cutting Oils
                            </option>
                            <option value="measuring">
                              Measuring Instruments
                            </option>
                            <option value="storage">Storage Solutions</option>
                            <option value="tools">Hand Tools</option>
                            <option value="support">Technical Support</option>
                          </select>
                        </div>

                        <div>
                          <label
                            className="block text-sm font-semibold text-gray-700 mb-2"
                            htmlFor="message"
                          >
                            Message *
                          </label>
                          <textarea
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-300 resize-none"
                            name="message"
                            id="message"
                            value={form.message}
                            onChange={handleChange}
                            required
                            placeholder="Tell us about your requirements..."
                            rows={5}
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className={`w-full py-4 px-6 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 ${
                            isSubmitting
                              ? "bg-gray-400 cursor-not-allowed"
                              : "bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-700 hover:to-sky-800 text-white shadow-lg hover:shadow-xl"
                          }`}
                        >
                          {isSubmitting ? (
                            <div className="flex items-center justify-center">
                              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                              Sending Message...
                            </div>
                          ) : (
                            <div className="flex items-center justify-center">
                              <FaPaperPlane className="w-5 h-5 mr-2" />
                              Send Message
                            </div>
                          )}
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="relative bg-sky-600 py-16">
          <div className="absolute inset-0 bg-gradient-to-r from-sky-600 to-sky-700"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                { icon: FaUsers, number: "500+", label: "Happy Clients" },
                { icon: FaClock, number: "<24hrs", label: "Response Time" },
                { icon: FaHeadset, number: "24/7", label: "Support" },
                { icon: FaIndustry, number: "25+", label: "Years Experience" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-white animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-sky-200" />
                  <div className="text-2xl sm:text-3xl font-bold mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sky-200 text-sm sm:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />

      {/* Enhanced Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-delayed {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(2deg);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.5;
          }
        }

        @keyframes pulse-slower {
          0%,
          100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.4;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        .animate-slide-up {
          animation: slide-up 1s ease-out forwards;
        }
        .animate-fade-in-delayed {
          animation: fade-in-delayed 0.8s ease-out 0.4s forwards;
          opacity: 0;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-pulse-slower {
          animation: pulse-slower 6s ease-in-out infinite;
        }

        /* Mobile Optimizations */
        @media (max-width: 640px) {
          .transform:hover {
            transform: translateY(-4px) !important;
          }
        }
      `}</style>
    </>
  );
};

export default Contact;
