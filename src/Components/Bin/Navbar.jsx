import React, { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Footer from "../Footer";

// Navigation items
const navigation = [
  { name: "PRODUCTS", href: "#", active: true },
  { name: "ABOUT US", href: "#" },
  { name: "CAREER", href: "#" },
  { name: "CATALOGUE", href: "#" },
];

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header/Navbar from TryNav component */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Impetus Techno Solutions</span>
              {/* Replace with your actual logo */}
              <img
                alt="Logo"
                src="/api/placeholder/120/60"
                className="h-16 w-auto"
              />
            </a>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-semibold hover:underline hover:text-sky-600 inline-block hover:duration-300 cursor-pointer ${
                  item.active ? "text-sky-700" : "text-gray-900"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#"
              className="text-sm font-semibold text-gray-900 hover:underline hover:text-sky-600 inline-block hover:duration-300 cursor-pointer"
            >
              CONTACT US
              <span aria-hidden="true" className="ml-1 text-2xl relative top-1">
                &rarr;
              </span>
            </a>
          </div>
        </nav>

        {/* Mobile menu dialog from TryNav */}
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Impetus Techno Solutions</span>
                <img
                  alt="Logo"
                  src="/api/placeholder/120/60"
                  className="h-16 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold hover:bg-gray-50 ${
                        item.active ? "text-sky-700" : "text-gray-900"
                      }`}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    CONTACT US
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      {/* Hero Section */}
      <div className="bg-sky-700 py-8 sm:py-12 md:py-16 flex items-center justify-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          PRODUCTS
        </h1>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 flex-grow">
        {/* Mobile Category Toggle Button */}
        <div className="md:hidden mb-4">
          <button
            onClick={toggleSidebar}
            className="w-full bg-white py-2 px-4 rounded-md shadow-sm flex justify-between items-center"
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

        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <div
            className={`w-full md:w-1/4 ${
              sidebarOpen ? "block" : "hidden md:block"
            }`}
          >
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4 text-sky-700">
                Product Categories
              </h2>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-sky-700 hover:font-medium block py-1 transition-colors"
                  >
                    CCTV Systems
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-sky-700 hover:font-medium block py-1 transition-colors"
                  >
                    Headphones
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-sky-700 hover:font-medium block py-1 transition-colors"
                  >
                    Phone Holders
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-sky-700 hover:font-medium block py-1 transition-colors"
                  >
                    Shuffa BTS
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-sky-700 hover:font-medium block py-1 transition-colors"
                  >
                    Shuffa Polaro
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-sky-700 hover:font-medium block py-1 transition-colors"
                  >
                    Audio Equipment
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-sky-700 hover:font-medium block py-1 transition-colors"
                  >
                    Smart Devices
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Product Grid */}
          <div className="w-full md:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Product Cards */}
              {Array(9)
                .fill()
                .map((_, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 shadow-sm rounded-lg transition-all hover:shadow-lg"
                  >
                    <div className="relative overflow-hidden rounded-md">
                      <img
                        src="/api/placeholder/300/200"
                        alt="Product"
                        className="w-full h-48 object-cover"
                      />
                      {index % 3 === 0 && (
                        <div className="absolute top-2 right-2 bg-sky-600 text-white text-xs px-2 py-1 rounded">
                          New
                        </div>
                      )}
                    </div>
                    <div className="mt-4">
                      <h3 className="text-lg font-semibold">Product Name</h3>
                      <p className="text-gray-600 text-sm mb-3">₹9,999</p>
                      <button className="w-full bg-sky-700 text-white px-4 py-2 rounded hover:bg-sky-600 transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Featured Products Section */}
        <div className="mt-12 bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-6 text-sky-700">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array(4)
              .fill()
              .map((_, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <img
                    src="/api/placeholder/300/200"
                    alt="Featured Product"
                    className="w-full h-40 object-cover mb-4 rounded-md"
                  />
                  <h3 className="text-lg font-semibold">Featured Product</h3>
                  <p className="text-gray-600 text-sm mb-3">₹7,999</p>
                  <button className="w-full bg-sky-700 text-white px-4 py-2 rounded hover:bg-sky-600 transition-colors">
                    View Details
                  </button>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Navbar;
