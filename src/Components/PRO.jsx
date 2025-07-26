// "use client";

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import product from "./data/products.json";
import Navbar from "./Navbar";

export default function PRO() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Filter products based on selected category
  const filteredProducts = selectedCategory
    ? product.filter((item) => item.category === selectedCategory)
    : product;

  // Handle category click
  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  // Handle home/products click to reset
  const handleHomeClick = () => {
    setSelectedCategory(null);
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
        <div className="mx-auto max-w-7xl py-32 sm:py-48 lg:py-50">
          <div className="text-center relative -top-24 z-10">
            <h1 className="text-balance  text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
              <span className="text-sky-700 ">IMPETUS </span>
              TECHNO SOLUTIONS
            </h1>
          </div>

          {/* Main Content */}
          <div className="container mx-auto px-4 py-8 flex-grow">
            {/* Mobile Category Toggle Button */}
            <div className="md:hidden mb-4">
              <button
                onClick={toggleSidebar}
                className="w-full bg-gray-200 py-2 px-4 rounded flex justify-between items-center"
              >
                <span className="font-semibold">Categories</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 transition-transform ${
                    sidebarOpen ? "transform rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <div className="flex flex-col md:flex-row">
              {/* Sidebar */}
              <div
                className={`w-full md:w-1/4 mb-8 md:mb-0 ${
                  sidebarOpen ? "block" : "hidden md:block"
                }`}
              >
                {/* <nav className="bg-white p-4 rounded-lg shadow-sm mb-4">
                  <ul className="flex text-gray-700 text-sm space-x-2">
                    <li>
                      <NavLink to="/" className="hover:text-black">
                        Home
                      </NavLink>
                    </li>
                    <li>/</li>
                    <li>
                      <NavLink to="/Pro" className="hover:text-black">
                        Products
                      </NavLink>
                    </li>
                    <li>/</li>
                    <li className="text-gray-900 font-semibold">Category</li>
                  </ul>
                </nav> */}
                <nav className="bg-white p-4 rounded-lg shadow-sm mb-4">
                  <ul className="flex text-gray-700 text-sm space-x-2">
                    <li>
                      <Link to={"/"}>
                        <button
                          onClick={handleHomeClick}
                          className="hover:text-black"
                        >
                          Home
                        </button>
                      </Link>
                    </li>
                    <li>/</li>
                    <li>
                      <button
                        onClick={handleHomeClick}
                        className="hover:text-black"
                      >
                        Products
                      </button>
                    </li>
                    <li>/</li>
                    <li className="text-gray-900 font-semibold">
                      {selectedCategory || "Category"}
                    </li>
                  </ul>
                </nav>
                {/* Category box */}
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h2 className="text-xl font-semibold mb-4">
                    Give All You Need
                  </h2>

                  {product.map((categoryItem, index) => (
                    <div className="product-card mb-6" key={index}>
                      <h3
                        className="text-lg font-semibold mb-2 cursor-pointer hover:text-blue-600 transition-colors duration-200"
                        onClick={() =>
                          handleCategoryClick(categoryItem.category)
                        }
                        onMouseEnter={() => setHoveredCategory(index)}
                        onMouseLeave={() => setHoveredCategory(null)}
                      >
                        {categoryItem.category}
                      </h3>
                      <div className="product-grid">
                        <div
                          className={`overflow-hidden transition-all duration-300 ease-in-out ${
                            hoveredCategory === index
                              ? "max-h-96 opacity-100"
                              : "max-h-0 opacity-0"
                          }`}
                        >
                          <ul className="space-y-2">
                            {categoryItem.product.map((product, idx) => (
                              <li key={idx}>
                                <a
                                  href={product.link}
                                  className="text-gray-700 hover:text-black block py-1"
                                >
                                  {product.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Product Grid */}
              <div className="w-full md:w-3/4 md:pl-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {selectedCategory
                    ? // Show filtered products when category is selected
                      filteredProducts[0].product.map((product, index) => (
                        <div
                          key={index}
                          className="bg-gray-100 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                        >
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-40 object-cover mb-4 rounded"
                          />
                          <h3 className="text-lg font-semibold">
                            {product.name}
                          </h3>
                          <p className="text-gray-700 text-sm mb-3">
                            {product.description}
                          </p>
                          <a
                            href={product.knowmore}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <button className="ml-2.7 w-30 mt-2 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors">
                              Know More
                            </button>
                          </a>
                          <span className="mx-2"></span>
                          <a
                            href={product.catalogue}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <button className="w-30 mt-2 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors">
                              Catalogue
                            </button>
                          </a>
                        </div>
                      ))
                    : // Show all products (first 4) when no category selected
                      product
                        .flatMap((group) =>
                          Array.isArray(group.product) ? group.product : []
                        )
                        .slice(0, 4)
                        .map((product, index) => (
                          <div
                            key={index}
                            className="bg-gray-100 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                          >
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-40 object-cover mb-4 rounded"
                            />
                            <h3 className="text-lg font-semibold">
                              {product.name}
                            </h3>
                            <p className="text-gray-700 text-sm mb-3">
                              {product.description}
                            </p>
                            <a
                              href={product.knowmore}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <button className="ml-2.7 w-30 mt-2 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors">
                                Know More
                              </button>
                            </a>
                            <span className="mx-2"></span>
                            <a
                              href={product.catalogue}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <button className="w-30 mt-2 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors">
                                Catalogue
                              </button>
                            </a>
                          </div>
                        ))}
                </div>
              </div>
            </div>

            {/* Recommendations Section */}
            <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">
                Explore our recommendations
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {product?.length > 0 &&
                  product
                    .flatMap((group) =>
                      Array.isArray(group.product) ? group.product : []
                    )
                    .slice(0, 4)
                    .map((product, index) => (
                      <div
                        key={index}
                        className="bg-gray-100 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                      >
                        <img
                          src={product.image || "/assets/CNC.png"}
                          alt="Recommendation"
                          className="w-full h-40 object-cover mb-4 rounded"
                        />
                        <h3 className="text-lg font-semibold">
                          {product.name}
                        </h3>
                        <p className="text-gray-700 text-sm mb-3">
                          {product.description || "No description available."}
                        </p>
                        <Link to={product.link}>
                          <button className="ml-2.7 w-30 mt-2 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors">
                            Know More
                          </button>
                        </Link>
                        <span className="mx-2"></span>
                        <button className="w-30 mt-2 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors">
                          Catalogue
                        </button>
                      </div>
                    ))}
              </div>
            </div>
          </div>
        </div>
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
