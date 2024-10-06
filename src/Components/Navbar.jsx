import { MenuIcon, XIcon } from "@heroicons/react/outline";
import React, { useState, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { HashLink } from "react-router-hash-link";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "./logo.png";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Carbon Footprint", href: "/emission" },
  { name: "Solutions", href: "/neutrality" },
  { name: "About Us", href: "/aboutus" }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar({ className }) {
  const location = useLocation();
  const navigate = useNavigate(); // Add useNavigate hook
  const [navs, setNavs] = useState(navigation);

  useEffect(() => {
    // Update the `current` property based on the current URL
    const updatedNavs = navigation.map(nav => ({
      ...nav,
      current: location.pathname === nav.href
    }));
    setNavs(updatedNavs);
  }, [location.pathname]);

  return (
    <Disclosure as="nav" className={`bg-transparent ${className}`}>
      {({ open }) => (
        <>
          <div className="w-full px-4">
          <div className="relative flex items-center justify-between h-20 max-w-screen-2xl mx-auto sm:mt-4 mt-8">

              {/* Mobile menu button */}
              <div className="sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              {/* Title */}
              <div className="flex-shrink-0">
                <img
                  src={logo}
                  alt="Logo"
                  className="h-10 w-auto" // Adjust the height and width of the logo as needed
                />
              </div>

              {/* Desktop Navigation */}
              <div className="hidden sm:flex flex-grow justify-center">
                <div className="flex space-x-24">
                  {navs.map((item) => (
                    <HashLink
                      key={item.name}
                      to={item.href}
                      className={classNames(
                        item.current
                          ? "text-transparent bg-clip-text bg-gradient-to-br from-[#6664F1] to-[#C94AF0] text-xl"
                          : "text-gray-300",
                        "px-4 py-2 rounded-md text-lg font-medium hover:text-white hover:scale-110 ease-in duration-200"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </HashLink>
                  ))}
                </div>
              </div>

              {/* Contact Us Button */}
<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:pr-0 hidden sm:flex">
  <button
    onClick={() => navigate("/contactus")}
    className="relative text-white border rounded px-8 py-3 text-lg hover:text-white c-btn tracking-wider overflow-hidden"
  >
    <span className="absolute inset-0 bg-gradient-to-br from-[#6664F1] to-[#C94AF0]"></span>
    <span className="relative z-10 flex justify-center items-center">
      Contact Us
    </span>
  </button>
</div>


            </div>
          </div>

          {/* Mobile Menu */}
          <Disclosure.Panel className="sm:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navs.map((item) => (
            <Disclosure.Button
              key={item.name}
              as="a"
              href={item.href}
              className={classNames(
                item.current
                  ? "bg-[#342F49] text-[#66C5CC]"
                  : "text-[#66C5CC] hover:bg-[#342F49] hover:text-white",
                "block px-6 py-3 rounded-md text-lg font-semibold"
              )}
              aria-current={item.current ? "page" : undefined}
            >
              {item.name}
            </Disclosure.Button>
          ))}
        </div>
      </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}