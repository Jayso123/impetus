import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Users, Heart, Globe, Award, MapPin, Clock, X } from "lucide-react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import axios from "axios";

const Career = () => {
  // State
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null,
    coverLetter: "",
    experience: "",
  });

  const navigate = useNavigate();

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const submissionData = new FormData();
    Object.keys(formData).forEach((key) => {
      submissionData.append(key, formData[key]);
    });

    try {
      setLoading(true);
      await axios.post("/api/career", submissionData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Application sent successfully!");
      setShowModal(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        resume: null,
        coverLetter: "",
        experience: "",
      });
    } catch (err) {
      console.error(err);
      alert("Failed to send application");
    } finally {
      setLoading(false);
    }
  };

  // Input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // File upload
  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      resume: e.target.files[0],
    }));
  };

  const jobCategories = [
    {
      id: "Sales and Application Engineer",
      title: "Sales",
    },
  ];

  const openRoles = [
    {
      id: 1,
      title: "Sales and Application Engineer - Industrial Products",
      category: "Sales and Application Engineer",
      location: "Bhavnagar",
      type: "1-2 Year",
      department: "Sales",
      posted: "2 days ago",
    },
    {
      id: 2,
      title: "Sales and Application Engineer - Industrial Products",
      category: "Sales and Application Engineer",
      location: "Bhopal (preferred area - Mandideep)",
      type: "1-2 Year",
      department: "Sales",
      posted: "2 days ago",
    },
    {
      id: 3,
      title: "Sales and Application Engineer - Industrial Products",
      category: "Sales and Application Engineer",
      location: "Jamnagar",
      type: "0-2 Year",
      department: "Sales",
      posted: "2 days ago",
    },
    {
      id: 4,
      title: "Sales and Application Engineer - Cutting Tools",
      category: "Sales and Application Engineer",
      location: "Rajkot",
      type: "1-2 Year",
      department: "Sales",
      posted: "2 days ago",
    },
    {
      id: 5,
      title: "Sales & Service Executive - Cutting Oil & Lubricants",
      category: "Sales and Application Engineer",
      location: "Rajkot",
      type: "0-2 Year",
      department: "Sales",
      posted: "2 days ago",
    },
    {
      id: 6,
      title: "Sales and Application Engineer - Industrial Products",
      category: "Sales and Application Engineer",
      location: "Vapi",
      type: "1-3 Year",
      department: "Sales",
      posted: "2 days ago",
    },
    {
      id: 7,
      title: "Sales & Service Executive - Lubricants & Cutting Oil",
      category: "Sales and Application Engineer",
      location: "Vapi",
      type: "1-2 Year",
      department: "Sales",
      posted: "2 days ago",
    },
  ];

  const benefits = [
    {
      icon: "🏥",
      title: "Health & Wellness",
      description:
        "Comprehensive medical, dental, and vision coverage for you and your family",
    },
    {
      icon: "💰",
      title: "Competitive Compensation",
      description:
        "Fair pay, stock options, and performance bonuses that reward your contributions",
    },
    {
      icon: "🏡",
      title: "Flexible Work",
      description:
        "Remote-first culture with flexible hours and work-life balance",
    },
    {
      icon: "📚",
      title: "Learning & Development",
      description:
        "Annual learning budget, conferences, and mentorship programs",
    },
    {
      icon: "🌴",
      title: "Time Off",
      description: "Unlimited PTO, sabbatical options, and paid volunteer time",
    },
    {
      icon: "👶",
      title: "Family Support",
      description:
        "Parental leave, childcare assistance, and family-friendly policies",
    },
  ];

  const companyValues = [
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "Collaboration",
      description:
        "We believe the best ideas come from diverse teams working together",
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Empathy",
      description: "We put ourselves in others' shoes and lead with compassion",
    },
    {
      icon: <Globe className="w-8 h-8 text-green-500" />,
      title: "Innovation",
      description: "We embrace change and continuously push boundaries",
    },
    {
      icon: <Award className="w-8 h-8 text-purple-500" />,
      title: "Excellence",
      description: "We strive for quality in everything we do, big and small",
    },
  ];

  const filteredRoles =
    selectedCategory === "all"
      ? openRoles
      : openRoles.filter((role) => role.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* ======= Company Values Section ======= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Why Work With Us?
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            At our company, every individual matters. We're building more than
            just products – we're creating solutions that improve lives while
            fostering an environment where everyone can thrive, grow, and make
            their mark on the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {companyValues.map((value, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center"
            >
              <div className="flex justify-center mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ======= Open Roles ======= */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-0 text-center md:text-left">
              Open Positions
            </h2>
            <div className="flex flex-wrap gap-2 sm:gap-4 justify-center md:justify-end">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-3 sm:px-4 py-2 rounded text-sm sm:text-base ${
                  selectedCategory === "all"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                All Roles
              </button>
              {jobCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-3 sm:px-4 py-2 rounded text-sm sm:text-base whitespace-nowrap ${
                    selectedCategory === category.id
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {filteredRoles.map((role) => (
              <div
                key={role.id}
                className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {role.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {role.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {role.type}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {role.department}
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">
                      Posted {role.posted}
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedRole(role);
                      setShowModal(true);
                    }}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors mt-4 md:mt-0"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ======= Application Modal ======= */}
      {showModal && selectedRole && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-lg rounded-lg shadow-lg p-6 relative max-h-screen overflow-y-auto">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              onClick={() => setShowModal(false)}
            >
              <X className="w-6 h-6" />
            </button>

            <h2 className="text-2xl font-bold mb-4">
              Apply for {selectedRole.title}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Pre-filled fields */}
              <input
                type="text"
                value={selectedRole.title}
                readOnly
                className="w-full p-2 border rounded bg-gray-100"
              />
              <input
                type="text"
                value={selectedRole.location}
                readOnly
                className="w-full p-2 border rounded bg-gray-100"
              />
              <input
                type="text"
                value={selectedRole.department}
                readOnly
                className="w-full p-2 border rounded bg-gray-100"
              />

              {/* User fields */}
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                required
                className="w-full p-2 border rounded"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                required
                className="w-full p-2 border rounded"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone"
                className="w-full p-2 border rounded"
              />

              <select
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              >
                <option value="">Select experience</option>
                <option value="0-1">0-1 Years</option>
                <option value="1-2">1-2 Years</option>
                <option value="2-3">2-3 Years</option>
                <option value="3-5">3-5 Years</option>
                <option value="5+">5+ Years</option>
              </select>

              <textarea
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleInputChange}
                rows="4"
                placeholder="Cover Letter / Additional Info"
                className="w-full p-2 border rounded"
              />

              <input
                type="file"
                name="resume"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
                required
                className="w-full p-2 border rounded"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 disabled:bg-gray-400"
              >
                {loading ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Career;
