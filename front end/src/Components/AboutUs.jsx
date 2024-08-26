import React from 'react';

function AboutUs() {
  const sectionStyle = "bg-[#342F49] p-8 rounded-lg shadow-lg border border-[#66C5CC]";
  const titleStyle = "text-3xl font-bold text-[#66C5CC] mb-4";
  const textStyle = "text-lg text-white mb-4";
  const listStyle = "list-disc pl-5 text-lg text-white";

  return (
    <div className="p-6 md:p-10 lg:p-20 min-h-screen flex flex-col items-center relative overflow-hidden bg-gradient-to-r from-[#2B263F] to-[#4B5563]">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-[#66C5CC] to-[#55B2B6] opacity-20 animate-pulse"></div>
      </div>
      <h1 className="text-4xl font-extrabold text-[#cad9ed] mb-12 text-center">About Us</h1>

      <div className="space-y-8 w-full max-w-3xl">
        {/* Our Mission */}
        <div className={sectionStyle}>
          <h2 className={titleStyle}>Our Mission</h2>
          <p className={textStyle}>
            At CARBON, our mission is to combat climate change by providing innovative solutions for quantifying and reducing carbon emissions. We aim to support industries and organizations in their journey towards carbon neutrality through accurate measurements, actionable insights, and effective strategies.
          </p>
        </div>

        {/* Our Team */}
        <div className={sectionStyle}>
          <h2 className={titleStyle}>Our Team</h2>
          <p className={textStyle}>
            Our team is composed of dedicated professionals with diverse expertise in environmental science, technology, and sustainability. We collaborate to develop cutting-edge tools and methodologies that help our clients achieve their carbon reduction goals.
          </p>
          <ul className={listStyle}>
            <li><strong>Member 1</strong> - Environmental Scientist</li>
            <li><strong>Member 2</strong> - Sustainability Consultant</li>
            <li><strong>Member 3</strong> - Data Analyst</li>
            <li><strong>Member 4</strong> - Software Engineer</li>
            <li><strong>Member 5</strong> - Data Analyst</li>
            <li><strong>Member 6</strong> - Data Analyst</li>
          </ul>
        </div>

        {/* Our Goals */}
        <div className={sectionStyle}>
          <h2 className={titleStyle}>Our Goals</h2>
          <p className={textStyle}>
            We strive to:
          </p>
          <ul className={listStyle}>
            <li>Provide accurate and reliable carbon emissions data</li>
            <li>Develop effective carbon offset and reduction strategies</li>
            <li>Promote awareness and education on carbon neutrality</li>
            <li>Support organizations in achieving their sustainability targets</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className={sectionStyle}>
          <h2 className={titleStyle}>Contact Us</h2>
          <p className={textStyle}>
            Have questions or need assistance? Feel free to reach out to us:
          </p>
          <p className={textStyle}>
            Email: <a href="mailto:carbonsink@gmail.com" className="text-[#66C5CC] hover:underline">carbonsink@gmail.com</a>
          </p>
          <p className={textStyle}>
            Phone: <a href="tel:+1234567890" className="text-[#66C5CC] hover:underline">(123) 456-7890</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
