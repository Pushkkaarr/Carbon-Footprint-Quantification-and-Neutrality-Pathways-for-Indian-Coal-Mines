import React from "react";
import Fade from "react-reveal/Fade";

function Services() {
  return (
    <div className="bg-[#231E3D] pt-14   lg:px-28 px-10 pb-10" id="services">
      <Fade bottom cascade>
        <div className="w-10 h-1 from-[#7361F2] to-[#BD4FF1] bg-gradient-to-r"></div>
        <h1 className="text-white text-4xl font-semibold pt-3">Our Services</h1>
        <p className="text-[#696984] font-semibold pt-4 whitespace-nowrap">
          Trusted by Companies
        </p>

        
      </Fade>
    </div>
  );
}

export default Services;
