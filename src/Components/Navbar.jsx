import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { href, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const navigation = [
  { name: "PRODUCTS", to: "/Pro" },
  { name: "ABOUT US", to: "/AboutUs" },
  { name: "CAREER", to: "/career" },
  {
    name: "CATALOGUE",
    to: href("https://impetustechno.com/pdf/Impetus-Broucher.pdf"),
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <NavLink to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img alt="" src={logo} className="h-16 w-auto" />
            </NavLink>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                className="relative text-black hover:text-sky-500 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-sky-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-sky-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]"
                // className="relative text-black hover:text-sky-500 cursor-pointer"
              >
                {item.name}
              </NavLink>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <button className="inline-flex items-center cursor-pointer bg-sky-700 px-3.5 py-3 text-white transition [box-shadow:rgb(171,_196,245)-8px_8px] hover:[box-shadow:rgb(171,_196,_245)0px_0px] rounded-md pt-1 pb-2.5 text-sm shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">
              <NavLink to="/Contact">
                CONTACT US
                <span
                  aria-hidden="true"
                  style={{
                    fontSize: "30px",
                    top: "3px",
                    position: "relative",
                    left: "5px",
                  }}
                >
                  &rarr;
                </span>
              </NavLink>
            </button>
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <NavLink to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src={logo}
                  className="w-auto"
                  style={{ height: "68px" }}
                />
              </NavLink>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-7" />
              </button>
            </div>
            <br />
            <br />
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.to}
                      className={({ isActive }) =>
                        `-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold ${
                          isActive
                            ? "bg-gray-50 text-sky-600"
                            : "text-gray-900 hover:bg-gray-50"
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
                <div className="py-6">
                  <NavLink
                    to="/Contact"
                    className={({ isActive }) =>
                      `-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold ${
                        isActive
                          ? "bg-gray-50 text-sky-600"
                          : "text-gray-900 hover:bg-gray-50"
                      }`
                    }
                  >
                    Contact Us
                  </NavLink>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  );
}
