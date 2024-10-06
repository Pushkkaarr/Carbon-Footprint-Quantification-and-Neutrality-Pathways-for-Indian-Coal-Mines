import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GrFacebookOption } from "react-icons/gr";
import { FiYoutube } from "react-icons/fi";
import { AiOutlineSkype } from "react-icons/ai";
import { FiFigma } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '0px' });

  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.8 },
  };

  return (
    <div className="bg-[#211D32] lg:px-28 pt-14 px-10 pb-10">
      <motion.div ref={ref} {...fadeIn}>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20">
          <div>
            <h1 className="text-white font-semibold lg:text-2xl">GREENMINES</h1>
            <p className="text-[#696984] xl:w-[559px] pt-4">
              We are dedicated to providing innovative solutions for reducing carbon emissions and promoting sustainability. Join us in our mission to create a greener future.
            </p>
            <div className="grid lg:grid-cols-1 xl:grid-cols-2 grid-cols-1 md:grid-cols-1 pt-9">
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white bg-[#009688] rounded-full leading-4 p-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div>
                  <p className="text-[#696984] text-sm">Have a question?</p>
                  <h3 className="text-white">666-36-29</h3>
                </div>
              </div>

              <div className="flex gap-2 text-white md:pt-4 pt-4 xl:pt-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white bg-[#009688] rounded-full leading-4 p-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                  />
                </svg>
                <div>
                  <p className="text-[#696984] text-sm">Contact us at</p>
                  <h3>greenmines1234@gmail.com</h3>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div>
              <h2 className="text-white font-semibold lg:text-xl md:pt-4 pt-4">Query</h2>
              <p className="text-[#696984] xl:w-[555px] pt-4 pb-5">
                future details
              </p>
              <div className="relative">
                <input
                  placeholder="Enter your Query"
                  className="rounded-full px-4 py-3 bg-[#342F49] w-full input-p"
                />
                <button className="text-white md:px-7 md:py-3 px-3 py-3 text-xs md:text-base rounded-full bg-[#009688] absolute right-2 submit-btn hover:text-white c-btn tracking-wider">
                  <span className="absolute inset-0 bg-[#00796B]"></span>
                  <span className="absolute inset-0 flex justify-center items-center">
                    Submit
                  </span>
                  Submit
                </button>
              </div>
            </div>

            <div className="flex justify-end pt-5 gap-4 socials">
              <div className="relative overflow-hidden block footer-div cursor-pointer">
                <span className="block">
                  <GrFacebookOption className="text-white bg-[#009688] rounded-full leading-4 p-2 h-8 w-8" />
                </span>
                <span>
                  <GrFacebookOption className="text-white bg-[#00796B] rounded-full leading-4 p-2 h-8 w-8" />
                </span>
              </div>
              <div className="relative overflow-hidden block footer-div cursor-pointer">
                <span className="block">
                  <FiYoutube className="text-white bg-[#009688] rounded-full leading-4 p-2 h-8 w-8" />
                </span>
                <span>
                  <FiYoutube className="text-white bg-[#c63232] rounded-full leading-4 p-2 h-8 w-8" />
                </span>
              </div>
              <div className="relative overflow-hidden block footer-div cursor-pointer">
                <span className="block">
                  <AiOutlineSkype className="text-white bg-[#009688] rounded-full leading-4 p-2 h-8 w-8" />
                </span>
                <span>
                  <AiOutlineSkype className="text-white bg-[#5189f1] rounded-full leading-4 p-2 h-8 w-8" />
                </span>
              </div>
              <div className="relative overflow-hidden block footer-div cursor-pointer">
                <span className="block">
                  <FiFigma className="text-white bg-[#009688] rounded-full leading-4 p-2 h-8 w-8" />
                </span>
                <span>
                  <FiFigma className="text-white bg-[#5b337e] rounded-full leading-4 p-2 h-8 w-8" />
                </span>
              </div>
              <div className="relative overflow-hidden block footer-div cursor-pointer">
                <span className="block">
                  <FaWhatsapp className="text-white bg-[#009688] rounded-full leading-4 p-2 h-8 w-8" />
                </span>
                <span>
                  <FaWhatsapp className="text-white bg-[#307f63] rounded-full leading-4 p-2 h-8 w-8" />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Lower footer */}
        <motion.div {...fadeIn} className="grid lg:grid-cols-2 grid-cols-1 pt-16 md:grid-cols-1">
          <div className="md:flex justify-between text-[#696984] text-xs md:text-base flex-col lg:flex-row">
            <p>About Us</p>
            <p>Contact</p>
            <p>Privacy Policy</p>
            <p>Sitemap</p>
            <p>Terms of Use</p>
          </div>
          <div className="text-[#696984] lg:justify-end justify-start pt-4 flex md:justify-start md:pt-4 text-xs md:text-base lg:pt-0">
            © 2024-Present, All Rights Reserved
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Footer;