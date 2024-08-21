import { MenuIcon, XIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { HashLink } from "react-router-hash-link";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Carbon Footprint", href: "#carbon-footprint", current: false },
  { name: "Solutions", href: "#solutions", current: false },
  { name: "About Us", href: "#about", current: false }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar({ className }) {
  const [navs, setNavs] = useState(navigation);

  const handleActive = (nav) => {
    navs.forEach((e) => (e.current = e.name === nav.name));
    setNavs([...navs]);
  };

  return (
    <Disclosure as="nav" className={`bg-transparent ${className}`}>
      {({ open }) => (
        <>
          <div className="w-full px-4">
            <div className="relative flex items-center justify-between h-20 max-w-screen-2xl mx-auto">
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
                <h1 className="font-bold text-white text-3xl">CARBON</h1>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden sm:flex flex-grow justify-center">
                <div className="flex space-x-24">
                  {navs.map((item) => (
                    <HashLink
                      onClick={() => handleActive(item)}
                      smooth
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
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:pr-0">
                <button className="text-white border rounded px-8 py-3 text-lg hover:text-white c-btn relative tracking-wider overflow-hidden">
                  <span className="absolute inset-0 bg-gradient-to-br from-[#6664F1] to-[#C94AF0]"></span>
                  <span className="absolute inset-0 flex justify-center items-center">
                    Contact Us
                  </span>
                  Contact Us
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
                  onClick={() => handleActive(item)}
                  className={classNames(
                    item.current
                      ? "bg-transparent text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-4 py-3 rounded-md text-lg font-medium"
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
