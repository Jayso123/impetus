// "use client";

// import { useState } from "react";
// import { Dialog, DialogPanel } from "@headlessui/react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
// import logo from "../assets/logo.png";
import Navbar from "./Navbar";
import Footer from "./Footer";

// const navigation = [
//   { name: "PRODUCTS", to: "/Pro" },
//   { name: "ABOUT US", to: "/about" },
//   { name: "CAREER", to: "/career" },
//   { name: "CATALOGUE", to: "/catalogue" },
// ];

export default function TryNav() {
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
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
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-50">
          <div className="text-center ">
            <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
              <span className="text-sky-700 ">IMPETUS </span>
              TECHNO SOLUTIONS
            </h1>
            <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/6">
              We are pleased to introduce ourselves as Solution provider to your
              esteemed organization. As the name 'Impetus' suggests, we help our
              customers to drive productivity and move industry along by
              delivering most productive solutions, which are being developed
              and introduced continuously.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <NavLink
                to="/about"
                className="rounded-md bg-sky-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                About us
              </NavLink>
              <NavLink
                to="/Pro"
                className="text-sm/17 font-semibold text-gray-900 -top-1.5 relative"
              >
                Products
                <span
                  aria-hidden="true"
                  className="ml-1.5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-sky-700 duration-300"
                  style={{ fontSize: "30px", top: "4px", position: "relative" }}
                >
                  →
                </span>
              </NavLink>
            </div>
          </div>
        </div>
        <section className="relative -mt-32">
          <div className="py-12 bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:text-center">
                <h2 className="font-heading mb-4 bg-sky-300 text-white px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-semibold tracking-widest uppercase title-font">
                  Why choose us?
                </h2>
                <p className="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-4xl">
                  We know tech, we know finance. We are fintech experts.
                </p>
                <p className="mt-4 max-w-2xl text-lg text-gray-500 lg:mx-auto">
                  We know how to handle taxation for all the countried we
                  operate in. We care for our customers and help them manage
                  cashflows.
                </p>
              </div>

              <div className="mt-10">
                <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                  <div className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-black">
                        <FaChevronRight />
                      </div>
                      <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                        Powerful API
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Maiores impedit perferendis suscipit eaque, iste dolor
                      cupiditate blanditiis ratione.
                    </dd>
                  </div>
                  <div className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-black">
                        <FaChevronRight />
                      </div>
                      <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                        Easy to integrate SDK
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      {" "}
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Maiores impedit perferendis suscipit eaque, iste dolor
                      cupiditate blanditiis ratione.
                    </dd>
                  </div>
                  <div className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-black">
                        <FaChevronRight />
                      </div>
                      <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                        Low Transaction Cost
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      {" "}
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Maiores impedit perferendis suscipit eaque, iste dolor
                      cupiditate blanditiis ratione.
                    </dd>
                  </div>
                  <div className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-black">
                        <FaChevronRight />
                      </div>
                      <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                        Powerful Dashboard
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      {" "}
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Maiores impedit perferendis suscipit eaque, iste dolor
                      cupiditate blanditiis ratione.
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </section>
        <script
          src="https://cdn.commoninja.com/sdk/latest/commonninja.js"
          defer
        ></script>
        <div className="commonninja_component pid-720763ab-1710-4f69-ab4f-92c426ca1151"></div>
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
    </>
  );
}
