import React from "react";
import logo from "../assets/logo.png";
import { Globe, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="px-4 py-8 sm:px-6 md:px-8 lg:px-20 md:py-16 flex flex-col gap-8 md:gap-12 w-full bg-gray-50">
      {/* Logo Section */}
      <div className="flex justify-center md:justify-start">
        <img src={logo} alt="logo" className="h-16 md:h-20 w-auto" />
      </div>

      {/* Links Section - Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Support Section */}
        <div className="text-center sm:text-left">
          <h4 className="font-semibold text-gray-800 mb-4 text-lg">Support</h4>
          <ul className="space-y-3 text-gray-600 text-sm">
            <li className="hover:text-gray-800 transition-colors cursor-pointer">
              ABOUT US
            </li>
            <li className="hover:text-gray-800 transition-colors cursor-pointer">
              CONTACT US
            </li>
            <li className="text-xs sm:text-sm leading-relaxed">
              SF-04, Vardhini Industrial Estate, Makarpura GIDC, Vadodara -
              390010
            </li>
            <li className="font-medium">
              <a
                href="tel:+917433099901"
                className="hover:text-gray-800 transition-colors"
              >
                +91-7433099901
              </a>
            </li>
          </ul>
        </div>

        {/* Products Section */}
        <div className="text-center sm:text-left">
          <h4 className="font-semibold text-gray-800 mb-4 text-lg">Products</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="#"
                className="text-gray-700 transition hover:text-gray-900 hover:underline block py-1"
              >
                CNC CUTTING TOOLS
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 transition hover:text-gray-900 hover:underline block py-1"
              >
                TOOL HOLDING
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 transition hover:text-gray-900 hover:underline block py-1"
              >
                BOARING SOLUTION
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 transition hover:text-gray-900 hover:underline block py-1"
              >
                CUTTING OIL
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-700 transition hover:text-gray-900 hover:underline flex items-center justify-center sm:justify-start py-1"
              >
                MORE
                <span
                  className="ml-2 text-xl transition-transform hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </a>
            </li>
          </ul>
        </div>

        {/* Company Section */}
        <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
          <h4 className="font-semibold text-gray-800 mb-4 text-lg">Company</h4>
          <div className="text-sm">
            <p className="text-gray-700 leading-relaxed">
              We are pleased to introduce ourselves as Solution provider to your
              esteemed organization. As the name 'Impetus' suggests, we help our
              customers to drive productivity.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom - Mobile Optimized */}
      <div className="border-t pt-6 flex flex-col gap-6">
        {/* Copyright and Links */}
        <div className="text-center md:text-left">
          <div className="text-sm text-gray-600 flex flex-col sm:flex-row sm:items-center gap-2">
            <span>© 2025 Impetus Techno.</span>
            <div className="flex items-center justify-center sm:justify-start gap-4">
              <span className="hidden sm:inline">·</span>
              <a
                href="#"
                className="underline hover:text-gray-800 transition-colors"
              >
                Privacy
              </a>
              <span>·</span>
              <a
                href="#"
                className="underline hover:text-gray-800 transition-colors"
              >
                Terms
              </a>
            </div>
          </div>
        </div>

        {/* Language and Social Icons */}
        <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-6">
          {/* Language Selector */}
          <div className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors cursor-pointer">
            <Globe className="w-5 h-5" />
            <span className="text-sm">English (US)</span>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-6">
            <a
              href="#"
              aria-label="Facebook"
              className="text-gray-600 hover:text-gray-800 transition-colors transform hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="w-5 h-5"
                viewBox="0 0 20 20"
              >
                <path d="M18.896 0H1.104A1.104 1.104 0 0 0 0 1.104v17.792C0 19.617.384 20 1.104 20H10.76V12.46h-2.36v-2.96h2.36V7.05c0-2.36 1.44-3.65 3.56-3.65.7 0 1.5.05 1.8.1v2.08h-1.22c-1.2 0-1.5.7-1.5 1.46v1.76h3.02l-.36 2.96h-2.66V20h5.18c.72 0 1.1-.384 1.1-1.104V1.104A1.104 1.104 0 0 0 18.896 0z"></path>
              </svg>
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-gray-600 hover:text-gray-800 transition-colors transform hover:scale-110"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-gray-600 hover:text-gray-800 transition-colors transform hover:scale-110"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
