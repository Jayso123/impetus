import React from "react";
import Footer from "./Footer";

const { useState } = React;

function Product() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="https://placehold.co/40x40"
              alt="Logo"
              className="h-8 w-8 sm:h-10 sm:w-10"
            />
            <div className="hidden md:flex ml-4">
              <a
                href="#"
                className="ml-4 text-lg font-semibold hover:text-gray-600 transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="ml-4 text-lg font-semibold hover:text-gray-600 transition-colors"
              >
                Shop
              </a>
              <a
                href="#"
                className="ml-4 text-lg font-semibold hover:text-gray-600 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="flex items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="border rounded-md px-2 py-1 w-24 sm:w-auto"
              />
              <button className="ml-2 bg-gray-300 p-2 rounded-md hidden sm:inline-block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <button
              className="ml-2 md:hidden focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <a
              href="#"
              className="block px-4 py-2 text-lg font-semibold hover:bg-gray-100"
            >
              Home
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-lg font-semibold hover:bg-gray-100"
            >
              Shop
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-lg font-semibold hover:bg-gray-100"
            >
              Contact
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="bg-gray-300 py-8 sm:py-12 md:py-16 flex items-center justify-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Shop</h1>
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
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Give All You Need</h2>
              <h3 className="text-lg font-semibold mb-2">Category</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-black block py-1"
                  >
                    CCTV
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-black block py-1"
                  >
                    Headphones
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-black block py-1"
                  >
                    Phone Holder
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-black block py-1"
                  >
                    Shuffa BTS
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-black block py-1"
                  >
                    Shuffa Polaro
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-black block py-1"
                  >
                    Shuffa Polaro
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-black block py-1"
                  >
                    Shuffa Polaro
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Product Grid */}
          <div className="w-full md:w-3/4 md:pl-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Product Card */}
              {Array(12)
                .fill()
                .map((_, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 shadow-md rounded-lg transition-transform hover:shadow-lg"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src="https://placehold.co/200x150"
                        alt="Product"
                        className="w-full h-40 sm:h-48 object-cover mb-4 rounded"
                      />
                      {/* <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                        Sale
                      </div> */}
                    </div>
                    <h3 className="text-lg font-semibold">Product Name</h3>
                    <p className="text-gray-600 text-sm mb-2">$99.99</p>
                    <button className="w-full mt-2 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors">
                      Buy Now
                    </button>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {Array(4)
              .fill()
              .map((_, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <img
                    src="https://placehold.co/200x150"
                    alt="Recommendation"
                    className="w-full h-40 object-cover mb-4 rounded"
                  />
                  <h3 className="text-lg font-semibold">Recommendation Name</h3>
                  <p className="text-gray-600 text-sm mb-2">$79.99</p>
                  <button className="w-full mt-2 bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors">
                    Buy Now
                  </button>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
    // <div
    //         style={{
    //           clipPath:
    //             "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
    //         }}
    //         className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#010010] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
    //       />
    //     </div>
    //     <br />
    //     <br />
    //     <div className="mx-auto max-w-7xl py-32 sm:py-48 lg:py-50">
    //       <div className="text-center relative -top-24 z-10">
    //         <h1 className="text-balance  text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
    //           <span className="text-sky-700 ">IMPETUS </span>
    //           TECHNO SOLUTIONS
    //         </h1>
    //       </div>
  );
}

export default Product;
