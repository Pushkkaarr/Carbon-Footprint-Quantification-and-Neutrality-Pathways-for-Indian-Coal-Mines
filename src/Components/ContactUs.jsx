import React from 'react';
import { useNavigate } from 'react-router-dom';

function ContactUs() {
  const navigate = useNavigate();

  const handleReturnHome = () => {
    navigate('/');
  };

  // Define styles
  const sectionStyle = "bg-[#342F49] p-12 rounded-lg shadow-lg border border-[#66C5CC] w-full max-w-xl"; // Increased padding and width
  const titleStyle = "text-4xl font-extrabold text-black mb-8";

  const textStyle = "text-xl text-black mb-6";

  const buttonStyle = "w-full px-6 py-5 font-bold rounded-lg shadow-md focus:outline-none focus:ring-2 transition-transform duration-300 ease-in-out";
  const submitButtonStyle = "bg-[#55B2B6] text-white hover:bg-[#66C5CC] hover:scale-105";
  const returnButtonStyle = "bg-[#3c2c7a] text-white hover:bg-[#4B5563] hover:scale-105 mt-8 px-4 py-2 text-base max-w-xs border-2 border-[#66C5CC] rounded-lg";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-[#2B263F] to-[#4B5563] p-8">
      <h1 className={`text-4xl md:text-5xl font-extrabold text-[#cad9ed] mb-12 text-center`}>Contact Us</h1>
      <form className={`${sectionStyle}`}>
        <div className="mb-6">
          <label htmlFor="name" className="block text-gray-300 text-lg font-semibold mb-3">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#66C5CC] text-lg placeholder:text-gray-400 placeholder:font-bold"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-300 text-lg font-semibold mb-3">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#66C5CC] text-lg placeholder:text-gray-400 placeholder:font-bold"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-300 text-lg font-semibold mb-3">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#66C5CC] h-36 text-lg placeholder:text-gray-400 placeholder:font-bold"
          ></textarea>
        </div>
        <button
          type="submit"
          className={`${buttonStyle} ${submitButtonStyle}`}
        >
          Send Message
        </button>
      </form>
      <button
        onClick={handleReturnHome}
        className={`${buttonStyle} ${returnButtonStyle}`}
      >
        Return to Home
      </button>
    </div>
  );
}

export default ContactUs;
