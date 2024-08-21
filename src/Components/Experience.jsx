import React from 'react';
import Fade from "react-reveal/Fade";

function Experience() {
  return (
    <div className="bg-[#211D32] lg:px-28 pt-14 px-10 pb-10" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Fade bottom cascade>
          <div className="flex items-center justify-center">
            <img
              src="https://zesty-cajeta-af510d.netlify.app/employee.svg"
              alt="Employee Experiencing Digital World"
              style={{ width: 'auto', height: '300px', objectFit: 'contain' }}
            />
          </div>
        </Fade>
        <Fade bottom cascade>
          <div className="flex flex-col justify-center">
            <div className="w-16 h-2 from-[#7361F2] to-[#BD4FF1] bg-gradient-to-r mb-4"></div>
            <h1 className="font-semibold xl:text-5xl lg:text-4xl md:text-4xl text-3xl text-white lg:leading-[2.5rem] 2xl:leading-[3.7rem]">
              Get an amazing experience with our top-quality team.
            </h1>
            
            <button className="mt-6 w-32 rounded px-4 py-2 bg-[#6366F1] text-white relative group hover:text-white overflow-hidden c-btn tracking-wider">
  <span className="absolute inset-0 bg-[#5558ff] transition-transform duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0"></span>
  <span className="relative z-10">Learn More</span>
</button>

          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Experience;
