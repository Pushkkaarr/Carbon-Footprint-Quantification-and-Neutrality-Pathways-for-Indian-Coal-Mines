import React from 'react'
import Fade from "react-reveal/Fade";

function Experience() {
  return (
    <div className="bg-[#211D32] lg:px-28 pt-14 px-10 pb-10" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <Fade bottom cascade>
          <div>
            <img
              src="https://zesty-cajeta-af510d.netlify.app/employee.svg"
              alt="Employee Experiencing Digital World"
            />
          </div>
          <div>
            <div className="w-10 h-1 from-[#7361F2] to-[#BD4FF1] bg-gradient-to-r"></div>
            <h1 className="pt-4 font-semibold xl:text-5xl lg:text-4xl md:text-4xl text-3xl text-white lg:leading-[2.5rem] 2xl:leading-[3.7rem]">
              Get an amazing experience with our top-quality team.
            </h1>
            <p className="text-[#696984] pt-5 pb-5 lg:w-[400px]">
              Trusted by 5000+ companies worldwide. Trusted by 5000+ companies
              worldwide
            </p>
            <button className="rounded px-7 py-3 bg-[#6366F1] text-white border-[#6366F1] border-2 relative group hover:text-white overflow-hidden c-btn tracking-wider">
              <span className="absolute inset-0 bg-white opacity-10"></span>
              <span className="absolute inset-0 flex justify-center items-center">
                Learn More
              </span>
              Learn More
            </button>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Experience