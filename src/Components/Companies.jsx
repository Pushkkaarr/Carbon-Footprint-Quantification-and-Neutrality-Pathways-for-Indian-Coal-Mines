import React from 'react';
import Fade from "react-reveal/Fade";

function Companies() {
  return (
    <div className="lg:h-[250px] from-[#301f61] to-[#301f61] bg-gradient-to-r lg:px-28 px-10 pb-10">
      <Fade bottom cascade>
      <p className="text-[#d3dbe8] font-bold text-center lg:pt-12 pt-6 whitespace-nowrap text-lg lg:text-xl leading-relaxed tracking-wider">
  Trusted by Companies.
</p>


        <div className="lg:flex lg:justify-evenly lg:pt-10 grid grid-cols-2 md:grid-cols-3 gap-10 lg:gap-16">
          <img
            src="vale.png"
            alt="Vale"
            className="w-auto h-20 object-contain" // Increased height
          />
          <img
            src="gf.png"
            alt="Gold"
            className="w-auto h-20 object-contain" // Increased height
          />
          <img
            src="baloc.webp"
            alt="BALOC"
            className="w-auto h-20 object-contain" // Increased height
          />
          <img
            src="hzz.webp"
            alt="HZZ"
            className="w-auto h-20 object-contain" // Increased height
          />
          <img
            src="cil.webp"
            alt="cil"
            className="w-auto h-20 object-contain" // Increased height
          />
          <img
            src="Cemex.webp"
            alt="Cemex"
            className="w-auto h-20 object-contain" // Increased height
          />
        </div>
      </Fade>
    </div>
  );
}

export default Companies;
