import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Footer from "./Footer";
import product from "./data/products.json";
import Navbar from "./Navbar";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [showAllProducts, setShowAllProducts] = useState(false);

  const filteredProducts = selectedCategory
    ? product.filter((item) => item.category === selectedCategory)
    : product;

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  const handleHomeClick = () => {
    setSelectedCategory(null);
  };

  const allProducts = product.flatMap((group) =>
    Array.isArray(group.product) ? group.product : []
  );

  const displayProducts = showAllProducts
    ? allProducts
    : allProducts.slice(0, 5);

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="relative isolate px-4 sm:px-6 pt-14 lg:px-8">
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

        <div className="mx-auto max-w-7xl py-16 sm:py-24 lg:py-32">
          <div className="container mx-auto px-2 sm:px-4 py-8 flex-grow">
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
              <div className="hidden md:block w-1/4">
                <div className="sticky top-6">
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
                            onMouseLeave={() => setHoveredCategory(index)}
                          >
                            <div className="flex justify-between items-center">
                              <div>
                                <h3 className="font-semibold text-gray-800">
                                  {categoryItem.category}
                                </h3>
                              </div>
                            </div>
                          </div>

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
                                    <Link
                                      to={`/products/${encodeURIComponent(
                                        product.Uname
                                      )}`}
                                    >
                                      {product.name}
                                    </Link>
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

              <div className="w-full md:w-3/4">
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

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {selectedCategory
                    ? filteredProducts[0]?.product?.map((product, index) => (
                        <div
                          key={index}
                          className="bg-white p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-sky-200 flex flex-col"
                        >
                          <div className="w-full h-48 flex items-center justify-center overflow-hidden mb-4">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-auto h-auto object-cover hover:scale-105 transition-transform duration-300"
                              loading="lazy"
                            />
                          </div>
                          <div className="flex-1 flex flex-col justify-between">
                            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                              {product.description}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-2 mt-auto">
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
                        </div>
                      ))
                    : displayProducts.map((product, index) => (
                        <div
                          key={index}
                          className="bg-white p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-sky-200 flex flex-col"
                        >
                          <div className="w-full h-48 flex items-center justify-center overflow-hidden mb-4">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-auto h-auto object-cover hover:scale-105 transition-transform duration-300"
                              loading="lazy"
                            />
                          </div>
                          <div className="flex-1 flex flex-col justify-between">
                            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                              {product.description}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-2 mt-auto">
                              <a
                                href={product.knowmore}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1"
                              >
                                <button className="bg-sky-600 text-white px-4 py-2 rounded-lg">
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
                        </div>
                      ))}
                </div>

                {!selectedCategory &&
                  !showAllProducts &&
                  allProducts.length > 5 && (
                    <div className="text-center mt-8">
                      <button
                        onClick={() => setShowAllProducts(true)}
                        className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 active:scale-95"
                      >
                        View All Products ({allProducts.length - 5} more)
                      </button>
                    </div>
                  )}
              </div>
            </div>

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
                      className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-white hover:border-sky-200 flex flex-col h-full"
                      style={{ minHeight: "380px" }}
                    >
                      <div className="w-full h-40 flex items-center justify-center overflow-hidden mb-3">
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
                      <div className="flex flex-col flex-1 justify-between">
                        <p className="text-gray-600 text-xs sm:text-sm mb-3 line-clamp-2">
                          {product.description || "No description available."}
                        </p>
                        <div className="flex flex-col gap-2 mt-auto">
                          <Link to={product.link} className="block">
                            <button className="w-full bg-sky-600 hover:bg-sky-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 active:scale-95">
                              Know More
                            </button>
                          </Link>
                          <a
                            href={product.catalogue}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <button className="w-full bg-gray-800 hover:bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 active:scale-95">
                              Catalogue
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
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
      <Footer />
    </div>
  );
}
