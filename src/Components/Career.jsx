import React from "react";

// "use client";

import { useState } from "react";
// import { Dialog, DialogPanel } from "@headlessui/react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// import { NavLink } from "react-router-dom";
import "../CSS/Career.css";
// import logo from "../assets/logo.png";
// import join from "../assets/join3.jpg";
import Navbar from "./Navbar";
import Footer from "./Footer";

// const navigation = [
//   { name: "PRODUCTS", to: "/Pro" },
//   { name: "ABOUT US", to: "/about" },
//   { name: "CAREER", to: "/career" },
//   { name: "CATALOGUE", to: "/catalogue" },
// ];

export default function Career() {
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    experience: "",
    position: "",
    message: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
  };

  return (
    <div className="bg-white">
      <Navbar />

      {/* Rest of the component remains the same */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#010010] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <br />
        <br />

        {/* Middle Part */}
        <div className="mt-24 mb-16 flex justify-center">
          <div className="w-full max-w-3xl">
            {/* JOIN US background */}

            {/* Form Container */}
            <div className="bg-white rounded-b-lg p-8 shadow-lg relative -top-20">
              <h2 className="text-4xl font-bold text-gray-700 mb-6 text-center">
                Join Our Team
              </h2>

              <div>
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block text-xl font-medium text-gray-700 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="experience"
                    className="block text-xl font-medium text-gray-700 mb-2"
                  >
                    Experience
                  </label>
                  <input
                    type="text"
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="position"
                    className="block text-xl font-medium text-gray-700 mb-2"
                  >
                    Position
                  </label>
                  <input
                    type="text"
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="resume"
                    className="block text-xl font-medium text-gray-700 mb-2"
                  >
                    Upload Resume
                  </label>
                  <div className="flex items-center">
                    <button
                      onClick={() =>
                        document.getElementById("fileInput").click()
                      }
                      className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md"
                    >
                      Choose File
                    </button>
                    <span className="ml-3 text-gray-600">
                      {formData.resume
                        ? formData.resume.name
                        : "No file chosen"}
                    </span>
                    <input
                      type="file"
                      id="fileInput"
                      onChange={handleFileChange}
                      className="hidden"
                      accept=".pdf,.doc,.docx"
                    />
                  </div>
                </div>

                <div className="mb-8">
                  <label
                    htmlFor="message"
                    className="block text-xl font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full p-3 border border-gray-300 rounded-md"
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-blue-500 text-white py-3 px-4 rounded-md text-xl font-medium hover:bg-blue-600 transition duration-300"
                >
                  Submit Application
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Middle end*/}

        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
