import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { motion, useInView } from "framer-motion";

function Header() {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "0px" });

  // Updated Animation variants for more fade
  const fadeInLeft = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 1.5, ease: "easeInOut" }, // Smooth easing
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 1.5, ease: "easeInOut" }, // Smooth easing
  };

  return (
    <div className="from-[#2B263F] to-[#231E3D] bg-gradient-to-b w-full px-6 sm:px-10 lg:h-screen overflow-x-hidden">
      <Navbar className="z-50" />
      <div className="flex lg:flex-row flex-col justify-between items-center lg:-mt-16 mt-10 lg:mt-0">
        {/* Left div with text and button */}
        <motion.div
          ref={ref}
          initial="initial"
          animate="animate"
          variants={fadeInLeft}
          className="lg:w-1/2 w-full lg:pt-24 pt-12"
        >
          <h1 className="font-extrabold xl:text-[4.2rem] lg:text-[3rem] md:text-[3.2rem] text-[2.2rem] lg:w-[90%] text-white xl:leading-[5rem] md:leading-[4rem] leading-9">
            Tackling Climate Change with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#66C5CC] to-[#009688]">
              CARBON
            </span>{" "}
            Solutions
          </h1>

          <p className="xl:w-[80%] lg:w-[90%] w-full text-[1rem] sm:text-[1.2rem] text-gray-400 lg:leading-8 leading-6 tracking-wider mt-4 sm:mt-6">
            GREENMINES provides innovative solutions to reduce carbon emissions
            and promote sustainability. Join us in building a greener future.
          </p>

          <div className="mt-6">
            <button
              onClick={() => {
                navigate("/emission");
                console.log("Button clicked!");
              }}
              className="rounded px-7 py-3 bg-[#009688] text-white relative group hover:text-white overflow-hidden tracking-wider"
            >
              <span className="relative inset-0 bg-[#00796B]"></span>
              <span className="relative inset-0 flex justify-center items-center">
                Get Started
              </span>
            </button>
          </div>
        </motion.div>

        {/* Right div with image */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeInRight}
          className="lg:w-1/2 w-full lg:pt-0 flex justify-center mt-12 lg:mt-28"
        >
          <img
            src="sust.jpg"
            alt="Sustainability"
            className="w-[100%] sm:w-[90%] lg:w-[80%] h-auto object-cover rounded-lg"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Header;