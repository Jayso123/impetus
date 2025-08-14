import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import product from "./data/products.json";
import Navbar from "./Navbar";

export default function PRO() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [showAllProducts, setShowAllProducts] = useState(false);

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

  // Get all products for display
  const allProducts = product.flatMap((group) =>
    Array.isArray(group.product) ? group.product : []
  );

  const displayProducts = showAllProducts
    ? allProducts
    : allProducts.slice(0, 4);

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      <div className="relative isolate px-4 sm:px-6 pt-14 lg:px-8">
        {/* Background gradients */}
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

        {/* Hero Section - Better mobile spacing */}
        <div className="mx-auto max-w-7xl py-16 sm:py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-balance text-3xl sm:text-5xl lg:text-7xl font-semibold tracking-tight text-gray-900">
              <span className="text-sky-700">IMPETUS </span>
              <span className="block sm:inline">TECHNO SOLUTIONS</span>
            </h1>
          </div>

          {/* Main Content */}
          <div className="container mx-auto px-2 sm:px-4 py-8 flex-grow">
            {/* Mobile Category Pills - No Popup! */}
            <div className="md:hidden mb-6">
              <div className="mb-4">
                <h2 className="text-lg font-semibold text-gray-900 mb-3">
                  Categories
                </h2>
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                  <button
                    onClick={handleHomeClick}
                    className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      !selectedCategory
                        ? "bg-sky-600 text-white shadow-md"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    All Products
                  </button>
                  {product.map((categoryItem, index) => (
                    <button
                      key={index}
                      onClick={() => handleCategoryClick(categoryItem.category)}
                      className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                        selectedCategory === categoryItem.category
                          ? "bg-sky-600 text-white shadow-md"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {categoryItem.category}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              {/* Desktop Only Sidebar */}
              <div className="hidden md:block w-1/4">
                <div className="sticky top-6">
                  {/* Desktop Breadcrumb */}
                  <nav className="bg-white p-4 rounded-lg shadow-sm mb-4 border">
                    <ul className="flex flex-wrap text-gray-700 text-sm gap-1">
                      <li>
                        <Link to={"/"}>
                          <button
                            onClick={handleHomeClick}
                            className="hover:text-sky-600 transition-colors font-medium"
                          >
                            Home
                          </button>
                        </Link>
                      </li>
                      <li className="text-gray-400">/</li>
                      <li>
                        <button
                          onClick={handleHomeClick}
                          className="hover:text-sky-600 transition-colors font-medium"
                        >
                          Products
                        </button>
                      </li>
                      <li className="text-gray-400">/</li>
                      <li className="text-gray-900 font-semibold">
                        {selectedCategory || "All Categories"}
                      </li>
                    </ul>
                  </nav>

                  {/* Desktop Category Section */}
                  <div className="bg-white rounded-lg shadow-sm border">
                    <div className="p-4 border-b bg-gradient-to-r from-sky-50 to-blue-50">
                      <h2 className="text-xl font-semibold text-gray-800">
                        Product Categories
                      </h2>
                      <p className="text-sm text-gray-600 mt-1">
                        Find everything you need
                      </p>
                    </div>

                    <div className="p-4 space-y-2">
                      {/* All Products Option - Desktop */}
                      <div
                        className={`p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                          !selectedCategory
                            ? "bg-sky-100 border-l-4 border-sky-600"
                            : "hover:bg-gray-50"
                        }`}
                        onClick={handleHomeClick}
                      >
                        <h3 className="font-semibold text-gray-800">
                          All Products
                        </h3>
                        <p className="text-xs text-gray-600">
                          Browse everything
                        </p>
                      </div>

                      {/* Category Items - Desktop */}
                      {product.map((categoryItem, index) => (
                        <div
                          key={index}
                          className="border-b border-gray-100 last:border-b-0"
                        >
                          <div
                            className={`p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                              selectedCategory === categoryItem.category
                                ? "bg-sky-100 border-l-4 border-sky-600"
                                : "hover:bg-gray-50"
                            }`}
                            onClick={() =>
                              handleCategoryClick(categoryItem.category)
                            }
                            onMouseEnter={() => setHoveredCategory(index)}
                            onMouseLeave={() => setHoveredCategory(null)}
                          >
                            <div className="flex justify-between items-center">
                              <div>
                                <h3 className="font-semibold text-gray-800">
                                  {categoryItem.category}
                                </h3>
                                <p className="text-xs text-gray-600">
                                  {categoryItem.product?.length || 0} products
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Desktop: Hover to show products */}
                          <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${
                              hoveredCategory === index
                                ? "max-h-96 opacity-100"
                                : "max-h-0 opacity-0"
                            }`}
                          >
                            <div className="pl-6 pr-3 pb-3">
                              <ul className="space-y-2">
                                {categoryItem.product?.map((product, idx) => (
                                  <li key={idx}>
                                    <a
                                      href={product.link}
                                      className="text-gray-600 hover:text-sky-600 block py-1 text-sm transition-colors"
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
                </div>
              </div>

              {/* Product Grid - Mobile Full Width, Desktop 3/4 */}
              <div className="w-full md:w-3/4">
                {/* Section Header */}
                <div className="mb-6">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                    {selectedCategory || "Featured Products"}
                  </h2>
                  <p className="text-gray-600">
                    {selectedCategory
                      ? `Explore our ${selectedCategory.toLowerCase()} collection`
                      : "Discover our top recommended products"}
                  </p>
                </div>

                {/* Product Grid - Enhanced for mobile */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {selectedCategory
                    ? // Show filtered products when category is selected
                      filteredProducts[0]?.product?.map((product, index) => (
                        <div
                          key={index}
                          className="bg-white p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-sky-200"
                        >
                          <div>
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-auto h-auto object-cover hover:scale-105 transition-transform duration-300"
                              loading="lazy"
                            />
                          </div>
                          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                            {product.name}
                          </h3>
                          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                            {product.description}
                          </p>
                          <div className="flex flex-col sm:flex-row gap-2">
                            <a
                              href={product.knowmore}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1"
                            >
                              <button className="w-full bg-sky-600 hover:bg-sky-700 text-white px-4 py-2.5 rounded-lg font-medium transition-colors duration-200 active:scale-95">
                                Know More
                              </button>
                            </a>
                            <a
                              href={product.catalogue}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1"
                            >
                              <button className="w-full bg-gray-800 hover:bg-gray-900 text-white px-4 py-2.5 rounded-lg font-medium transition-colors duration-200 active:scale-95">
                                Catalogue
                              </button>
                            </a>
                          </div>
                        </div>
                      ))
                    : // Show featured products when no category selected
                      displayProducts.map((product, index) => (
                        <div
                          key={index}
                          className="bg-white p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-sky-200"
                        >
                          <div>
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-auto h-auto object-cover hover:scale-105 transition-transform duration-300"
                              loading="lazy"
                            />
                          </div>
                          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                            {product.name}
                          </h3>
                          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                            {product.description}
                          </p>
                          <div className="flex flex-col sm:flex-row gap-2">
                            <a
                              href={product.knowmore}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1"
                            >
                              <button className="w-full bg-sky-600 hover:bg-sky-700 text-white px-4 py-2.5 rounded-lg font-medium transition-colors duration-200 active:scale-95">
                                Know More
                              </button>
                            </a>
                            <a
                              href={product.catalogue}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1"
                            >
                              <button className="w-full bg-gray-800 hover:bg-gray-900 text-white px-4 py-2.5 rounded-lg font-medium transition-colors duration-200 active:scale-95">
                                Catalogue
                              </button>
                            </a>
                          </div>
                        </div>
                      ))}
                </div>

                {/* Load More Button for mobile */}
                {!selectedCategory &&
                  !showAllProducts &&
                  allProducts.length > 4 && (
                    <div className="text-center mt-8">
                      <button
                        onClick={() => setShowAllProducts(true)}
                        className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 active:scale-95"
                      >
                        View All Products ({allProducts.length - 4} more)
                      </button>
                    </div>
                  )}
              </div>
            </div>

            {/* Enhanced Recommendations Section */}
            {!selectedCategory && (
              <div className="mt-12 bg-gradient-to-r from-sky-50 to-blue-50 p-6 sm:p-8 rounded-2xl border border-sky-100">
                <div className="text-center mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                    Recommended for You
                  </h2>
                  <p className="text-gray-600">
                    Handpicked products based on popular choices
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                  {allProducts.slice(0, 4).map((product, index) => (
                    <div
                      key={index}
                      className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-white hover:border-sky-200"
                    >
                      <div>
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-auto h-auto object-cover hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 text-xs sm:text-sm mb-3 line-clamp-2">
                        {product.description || "No description available."}
                      </p>
                      <div className="space-y-2">
                        <Link to={product.link} className="block">
                          <button className="w-full bg-sky-600 hover:bg-sky-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 active:scale-95">
                            Know More
                          </button>
                        </Link>
                        <button className="w-full bg-gray-800 hover:bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 active:scale-95">
                          Catalogue
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom gradient */}
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

      <Footer />
    </div>
  );
}
