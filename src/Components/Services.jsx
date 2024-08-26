import React from "react";
import Fade from "react-reveal/Fade";

function Services() {
  return (
    <div className="bg-[#231E3D] pt-14 lg:px-28 px-10 pb-20" id="services">
      <Fade bottom cascade>
        <div className="w-12 h-1 bg-gradient-to-r from-[#7361F2] to-[#BD4FF1] rounded-full mb-6"></div>
        <h1 className="text-white text-4xl font-semibold text-center mb-10">Our Services</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="p-8 bg-[#211D32] text-white rounded-lg shadow-lg flex flex-col justify-center items-start transition-transform transform hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center mb-4">
              <img
                src="https://img.icons8.com/ios/50/ffffff/report-card.png"
                alt="Assessment Icon"
                className="w-12 h-12 mr-4"
              />
              <h2 className="text-2xl font-bold">Carbon Footprint Assessment</h2>
            </div>
            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li>Evaluate your current carbon footprint</li>
              <li>Identify key areas for reduction</li>
              <li>Generate a comprehensive report</li>
            </ul>
          </div>

          {/* Service 2 */}
          <div className="p-8 bg-[#211D32] text-white rounded-lg shadow-lg flex flex-col justify-center items-start transition-transform transform hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center mb-4">
              <img
                src="https://img.icons8.com/ios/50/ffffff/report-card.png"
                alt="Sustainability Icon"
                className="w-12 h-12 mr-4"
              />
              <h2 className="text-2xl font-bold">Sustainable Mining Solutions</h2>
            </div>
            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li>Implement eco-friendly mining practices</li>
              <li>Optimize resource usage and waste management</li>
              <li>Enhance environmental impact monitoring</li>
            </ul>
          </div>

          {/* Service 3 */}
          <div className="p-8 bg-[#211D32] text-white rounded-lg shadow-lg flex flex-col justify-center items-start transition-transform transform hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center mb-4">
              <img
                src="https://img.icons8.com/ios/50/ffffff/report-card.png"
                alt="Compliance Icon"
                className="w-12 h-12 mr-4"
              />
              <h2 className="text-2xl font-bold">Regulatory Compliance and Reporting</h2>
            </div>
            <ul className="list-disc pl-6 space-y-2 text-lg">
              <li>Ensure adherence to environmental regulations</li>
              <li>Prepare and submit required documentation</li>
              <li>Conduct regular compliance audits</li>
            </ul>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Services;
