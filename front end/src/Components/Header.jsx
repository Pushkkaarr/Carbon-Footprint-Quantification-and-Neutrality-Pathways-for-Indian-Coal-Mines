import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Fade from "react-reveal/Fade";

function Header() {
  const navigate = useNavigate();

  return (
    <div className="from-[#2B263F] to-[#231E3D] bg-gradient-to-b w-full px-10 lg:px-28 lg:h-screen overflow-hidden">
      <Navbar className="z-50" />
      <div className="lg:flex lg:pt-8">
        <Fade left cascade>
          <div className="lg:w-[800px] container xl:pt-24 lg:pt-10 pt-20">
            <h1 className="font-[1000] xl:text-[4.2rem] lg:text-[3rem] md:text-[3.2rem] text-3xl lg:w-[79%] text-white xl:leading-[5rem] md:leading-[4rem]">
              Tackling Climate Change with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#66C5CC] to-[#009688]">
                {" "}
                CARBON{" "}
              </span>
              Solutions
            </h1>
            <div className="xl:flex justify-start mt-7">
              <div>
                <button
                  onClick={() => {navigate("/emission");
                    console.log('Button clicked!');
                  }}
                  className="rounded px-7 py-3 bg-[#009688] text-white relative group hover:text-white overflow-hidden c-btn tracking-wider"
                >
                  <span className="absolute inset-0 bg-[#00796B]"></span>
                  <span className="absolute inset-0 flex justify-center items-center">
                    Get Started
                  </span>
                  Get Started
                </button>
              </div>
              <p className="xl:w-[50%] lg:w-[70%] md:w-[80%] text-[28px] text-gray-400 lg:leading-6 xl:pl-5 xl:pt-0 pt-4 pb-4">
                CARBON is dedicated to providing innovative solutions for reducing carbon emissions and promoting sustainability. Join us in our mission to create a greener future.
              </p>
            </div>
          </div>
        </Fade>

        <div className="lg:flex lg:pt-8">
          <Fade right cascade>
            <div className="pr-24 lg:pr-0 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#2B263F] to-[#231E3D] opacity-90 z-0"></div>
              <div className="relative z-10">
                <img
                  src="sust.jpg"
                  alt="Coal Mine Icon"
                  className="w-[760px] h-auto object-cover mix-blend-overlay"
                />
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default Header;
