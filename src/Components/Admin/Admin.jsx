import React, { useState, useRef, useCallback } from "react";
import { Search, ChevronRight, Trash2, Edit, Upload } from "lucide-react";
import LOGO from "../../assets/logo.png"; // Adjust the path as necessary
import { TrashIcon } from "@heroicons/react/24/solid";

function Admin() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [submissionTab, setSubmissionTab] = useState("contact");

  // Render the appropriate content based on the active tab
  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <DashboardContent
            submissionTab={submissionTab}
            setSubmissionTab={setSubmissionTab}
          />
        );
      case "contact":
        return <SubmissionsTable title="Contact Us Submissions" />;
      case "career":
        return <SubmissionsTable title="Career Form Submissions" />;
      case "inquiry":
        return <SubmissionsTable title="Inquiry Form Submissions" />;
      case "products":
        return <ProductsManagement />;
      default:
        return (
          <DashboardContent
            submissionTab={submissionTab}
            setSubmissionTab={setSubmissionTab}
          />
        );
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200">
        <div className="p-6 border-b border-gray-200">
          {/* <h1 className="text-xl font-bold text-gray-800">Admin Panel</h1> */}
          <img src={LOGO} alt="logo" className="h-20 w-25" />
        </div>
        <nav className="mt-2">
          <SidebarItem
            title="Dashboard"
            isActive={activeTab === "dashboard"}
            onClick={() => setActiveTab("dashboard")}
          />
          <SidebarItem
            title="Contact Us Submissions"
            isActive={activeTab === "contact"}
            onClick={() => setActiveTab("contact")}
          />
          <SidebarItem
            title="Career Form Submissions"
            isActive={activeTab === "career"}
            onClick={() => setActiveTab("career")}
          />
          <SidebarItem
            title="Inquiry Form Submissions"
            isActive={activeTab === "inquiry"}
            onClick={() => setActiveTab("inquiry")}
          />
          <SidebarItem
            title="Products Management"
            isActive={activeTab === "products"}
            onClick={() => setActiveTab("products")}
          />
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-auto">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 p-4 flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-800">
            {activeTab === "dashboard"
              ? "Dashboard"
              : activeTab === "contact"
              ? "Contact Us Submissions"
              : activeTab === "career"
              ? "Career Form Submissions"
              : activeTab === "inquiry"
              ? "Inquiry Form Submissions"
              : "Products Management"}
          </h2>

          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-4 pr-10 py-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <div className="absolute right-3 top-2.5 text-gray-400">
              <Search size={18} />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-auto">{renderContent()}</main>
      </div>
    </div>
  );
}

// Sidebar Item Component
function SidebarItem({ title, isActive, onClick }) {
  return (
    <div
      className={`flex items-center py-3 px-6 cursor-pointer ${
        isActive
          ? "bg-blue-50 text-blue-500 font-medium border-l-4 border-blue-500"
          : "text-gray-500 hover:bg-gray-50"
      }`}
      onClick={onClick}
    >
      <span>{title}</span>
      {!isActive && <ChevronRight size={16} className="ml-auto" />}
    </div>
  );
}

// Dashboard Content Component
function DashboardContent({ submissionTab, setSubmissionTab }) {
  const stats = [
    {
      title: "Contact Submissions",
      count: 127,
      period: "This month",
      color: "text-blue-500",
    },
    {
      title: "Career Applications",
      count: 58,
      period: "This month",
      color: "text-green-500",
    },
    {
      title: "Inquiries",
      count: 84,
      period: "This month",
      color: "text-yellow-500",
    },
  ];

  return (
    <div>
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
          >
            <h3 className={`text-lg font-medium ${stat.color}`}>
              {stat.title}
            </h3>
            <div className="flex items-baseline mt-2">
              <span className="text-3xl font-bold text-gray-800">
                {stat.count}
              </span>
              <span className="ml-2 text-sm text-gray-500">{stat.period}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Submissions Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4">
          Recent Submissions
        </h3>

        {/* Tabs */}
        <div className="flex space-x-4 mb-6">
          <TabButton
            title="Contact"
            isActive={submissionTab === "contact"}
            onClick={() => setSubmissionTab("contact")}
          />
          <TabButton
            title="Career"
            isActive={submissionTab === "career"}
            onClick={() => setSubmissionTab("career")}
          />
          <TabButton
            title="Inquiry"
            isActive={submissionTab === "inquiry"}
            onClick={() => setSubmissionTab("inquiry")}
          />
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-50 text-left rounded">
              <tr>
                <th className="py-3 px-4 text-sm font-medium text-gray-500">
                  Name
                </th>
                <th className="py-3 px-4 text-sm font-medium text-gray-500">
                  Email
                </th>
                <th className="py-3 px-4 text-sm font-medium text-gray-500">
                  Phone
                </th>
                <th className="py-3 px-4 text-sm font-medium text-gray-500">
                  Date
                </th>
                <th className="py-3 px-4 text-sm font-medium text-gray-500">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <TableRow
                name="John Smith"
                email="john@example.com"
                phone="+1 555-123-4567"
                date="May 6, 2025"
              />
              <TableRow
                name="Emily Johnson"
                email="emily@example.com"
                phone="+1 555-987-6543"
                date="May 5, 2025"
              />
              <TableRow
                name="Michael Brown"
                email="michael@example.com"
                phone="+1 555-456-7890"
                date="May 5, 2025"
              />
              <TableRow
                name="Sarah Wilson"
                email="sarah@example.com"
                phone="+1 555-789-0123"
                date="May 4, 2025"
              />
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex space-x-2 mt-6">
          <PaginationButton number={1} isActive={true} />
          <PaginationButton number={2} isActive={false} />
          <PaginationButton number={3} isActive={false} />
        </div>
      </div>
    </div>
  );
}

// Tab Button Component
function TabButton({ title, isActive, onClick }) {
  return (
    <button
      className={`px-6 py-2 rounded ${
        isActive
          ? "bg-blue-50 text-blue-500 font-medium"
          : "bg-white border border-gray-200 text-gray-500"
      }`}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

// Table Row Component
function TableRow({ name, email, phone, date }) {
  return (
    <tr className="bg-white">
      <td className="py-4 px-4">{name}</td>
      <td className="py-4 px-4">{email}</td>
      <td className="py-4 px-4">{phone}</td>
      <td className="py-4 px-4">{date}</td>
      <td className="py-4 px-4">
        <button className="w-8 h-8 flex items-center justify-center bg-red-100 text-red-500 rounded-full hover:bg-red-200">
          <Trash2 size={16} />
        </button>
      </td>
    </tr>
  );
}

// Pagination Button Component
function PaginationButton({ number, isActive }) {
  return (
    <button
      className={`w-10 h-10 flex items-center justify-center rounded ${
        isActive
          ? "bg-blue-50 text-blue-500 font-medium"
          : "bg-white border border-gray-200 text-gray-500"
      }`}
    >
      {number}
    </button>
  );
}

// Submissions Table Component
function SubmissionsTable({ title }) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-bold text-gray-800 mb-6">{title}</h3>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-50 text-left rounded">
            <tr>
              <th className="py-3 px-4 text-sm font-medium text-gray-500">
                Name
              </th>
              <th className="py-3 px-4 text-sm font-medium text-gray-500">
                Email
              </th>
              <th className="py-3 px-4 text-sm font-medium text-gray-500">
                Phone
              </th>
              <th className="py-3 px-4 text-sm font-medium text-gray-500">
                Date
              </th>
              <th className="py-3 px-4 text-sm font-medium text-gray-500">
                Message
              </th>
              <th className="py-3 px-4 text-sm font-medium text-gray-500">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr className="bg-white">
              <td className="py-4 px-4">John Smith</td>
              <td className="py-4 px-4">john@example.com</td>
              <td className="py-4 px-4">+1 555-123-4567</td>
              <td className="py-4 px-4">May 6, 2025</td>
              <td className="py-4 px-4 truncate max-w-xs">
                I would like to inquire about your services...
              </td>
              <td className="py-4 px-4">
                <button className="w-8 h-8 flex items-center justify-center bg-red-100 text-red-500 rounded-full hover:bg-red-200">
                  <Trash2 size={16} />
                </button>
              </td>
            </tr>
            <tr className="bg-white">
              <td className="py-4 px-4">Emily Johnson</td>
              <td className="py-4 px-4">emily@example.com</td>
              <td className="py-4 px-4">+1 555-987-6543</td>
              <td className="py-4 px-4">May 5, 2025</td>
              <td className="py-4 px-4 truncate max-w-xs">
                Please contact me regarding your products...
              </td>
              <td className="py-4 px-4">
                <button className="w-8 h-8 flex items-center justify-center bg-red-100 text-red-500 rounded-full hover:bg-red-200">
                  <Trash2 size={16} />
                </button>
              </td>
            </tr>
            <tr className="bg-white">
              <td className="py-4 px-4">Michael Brown</td>
              <td className="py-4 px-4">michael@example.com</td>
              <td className="py-4 px-4">+1 555-456-7890</td>
              <td className="py-4 px-4">May 5, 2025</td>
              <td className="py-4 px-4 truncate max-w-xs">
                I'm interested in getting a quote for...
              </td>
              <td className="py-4 px-4">
                <button className="w-8 h-8 flex items-center justify-center bg-red-100 text-red-500 rounded-full hover:bg-red-200">
                  <Trash2 size={16} />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex space-x-2 mt-6">
        <PaginationButton number={1} isActive={true} />
        <PaginationButton number={2} isActive={false} />
        <PaginationButton number={3} isActive={false} />
      </div>
    </div>
  );
}

// Products Management Component with image-only drag-and-drop upload
// const PaginationButton = ({ number, isActive }) => (
//   <button
//     className={`px-3 py-1 rounded ${
//       isActive ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"
//     }`}
//   >
//     {number}
//   </button>
// );

function ProductsManagement() {
  const [formData, setFormData] = useState({ image: null });
  const inputRef = useRef(null);

  const allowedImageTypes = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/gif",
    "image/webp",
  ];

  const onFileChange = (e) => {
    const file = e.target.files[0];
    if (file && allowedImageTypes.includes(file.type)) {
      setFormData((prev) => ({ ...prev, image: file }));
    } else {
      alert("Please upload only image files (jpeg, jpg, png, gif, webp)");
    }
  };

  const onDrop = useCallback(
    (e) => {
      e.preventDefault();
      const file = e.dataTransfer.files[0];
      if (file && allowedImageTypes.includes(file.type)) {
        setFormData((prev) => ({ ...prev, image: file }));
      } else {
        alert("Please upload only image files (jpeg, jpg, png, gif, webp)");
      }
    },
    [allowedImageTypes]
  );

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onClickUpload = () => {
    inputRef.current?.click();
  };

  const imagePreviewUrl = formData.image
    ? URL.createObjectURL(formData.image)
    : null;

  return (
    <div className="space-y-8">
      {/* Add Product Form */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 max-w-4xl mx-auto">
        <h3 className="text-lg font-bold text-gray-800 mb-4">
          Add New Product
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-1">
              Category
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter category"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-500 mb-1">
              Product Name
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter product name"
            />
          </div>

          {/* Image Upload */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-500 mb-1">
              Product Image
            </label>
            <div
              onDrop={onDrop}
              onDragOver={onDragOver}
              onClick={onClickUpload}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === "Enter") onClickUpload();
              }}
              className="flex flex-col items-center justify-center w-full p-6 border-2 border-dashed border-gray-300 rounded bg-gray-50 cursor-pointer hover:border-indigo-600 transition-colors"
            >
              <Upload className="text-gray-400 mb-2" size={48} />
              {imagePreviewUrl ? (
                <img
                  src={imagePreviewUrl}
                  alt="Uploaded preview"
                  className="max-w-full max-h-52 object-contain rounded"
                />
              ) : (
                <p className="text-sm text-gray-500 select-none">
                  Click to upload or drag and drop an image
                </p>
              )}
              <input
                type="file"
                ref={inputRef}
                accept="image/*"
                onChange={onFileChange}
                className="hidden"
              />
            </div>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-500 mb-1">
              Description
            </label>
            <textarea
              rows={4}
              className="w-full p-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter product description"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-500 mb-1">
              Know More Link
            </label>
            <input
              type="url"
              className="w-full p-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="https://example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-500 mb-1">
              Catalogue Link
            </label>
            <input
              type="url"
              className="w-full p-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="https://example.com/catalogue"
            />
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition">
            Add Product
          </button>
        </div>
      </div>

      {/* Products Table Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-bold text-gray-800">Products List</h3>
          <div className="flex space-x-4">
            <select className="p-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>All Categories</option>
              <option>Electronics</option>
              <option>Audio</option>
              <option>Photography</option>
            </select>
            <select className="p-2 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Sort by: Latest</option>
              <option>Sort by: Name A-Z</option>
              <option>Sort by: Name Z-A</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-50 text-left rounded">
              <tr>
                <th className="py-3 px-4 text-sm font-medium text-gray-500">
                  Image
                </th>
                <th className="py-3 px-4 text-sm font-medium text-gray-500">
                  Name
                </th>
                <th className="py-3 px-4 text-sm font-medium text-gray-500">
                  Category
                </th>
                <th className="py-3 px-4 text-sm font-medium text-gray-500">
                  Description
                </th>
                <th className="py-3 px-4 text-sm font-medium text-gray-500">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="py-3 px-4 text-sm text-gray-700">
                  <div className="w-16 h-16 bg-gray-200 rounded" />
                </td>
                <td className="py-3 px-4 text-sm text-gray-700">
                  Smart Watch Pro
                </td>
                <td className="py-3 px-4 text-sm text-gray-700">Electronics</td>
                <td className="py-3 px-4 text-sm text-gray-700">
                  Premium smartwatch with health tracking capabilities...
                </td>
                <td className="py-3 px-4 text-sm text-gray-700">
                  <button className="text-blue-500 hover:underline">
                    Edit
                  </button>
                  <TrashIcon className="w-5 h-5 text-red-500 cursor-pointer ml-2" />
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-sm text-gray-700">
                  <div className="w-16 h-16 bg-gray-200 rounded" />
                </td>
                <td className="py-3 px-4 text-sm text-gray-700">
                  Smart Watch Pro
                </td>
                <td className="py-3 px-4 text-sm text-gray-700">Electronics</td>
                <td className="py-3 px-4 text-sm text-gray-700">
                  Premium smartwatch with health tracking capabilities...
                </td>
                <td className="py-3 px-4 text-sm text-gray-700">
                  <button className="text-blue-500 hover:underline">
                    Edit
                  </button>
                  <TrashIcon className="w-5 h-5 text-red-500 cursor-pointer ml-2" />
                </td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>

        <div className="flex space-x-2 mt-6">
          <PaginationButton number={1} isActive={true} />
          <PaginationButton number={2} isActive={false} />
          <PaginationButton number={3} isActive={false} />
        </div>
      </div>
    </div>
  );
}

// Product Row Component (if you want to list products)
// function ProductRow({ name, category, description }) {
//   return (
//     <tr className="bg-white">
//       <td className="py-4 px-4">
//         <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center flex-col text-gray-400">
//           <span className="text-xs">Product</span>
//           <span className="text-xs">Image</span>
//         </div>
//       </td>
//       <td className="py-4 px-4 font-medium">{name}</td>
//       <td className="py-4 px-4">{category}</td>
//       <td className="py-4 px-4 truncate max-w-xs">{description}</td>
//       <td className="py-4 px-4">
//         <div className="flex space-x-2">
//           <button className="px-3 py-1 bg-blue-50 text-blue-500 rounded hover:bg-blue-100">
//             <Edit size={16} className="inline mr-1" /> Edit
//           </button>
//           <button className="px-3 py-1 bg-red-50 text-red-500 rounded hover:bg-red-100">
//             <Trash2 size={16} className="inline mr-1" /> Delete
//           </button>
//         </div>
//       </td>
//     </tr>
//   );
// }

export default Admin;
