import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NeutralityForm() {
  const [sinkData, setSinkData] = useState({
    name: '',
    vegetationType: 'forest',
    otherVegetationType: '', // To store custom vegetation type if 'Other' is selected
    areaCovered: '',
    carbonSequestrationRate: '',
    location: {
      type: 'Point',
      coordinates: ['', ''] // Assuming latitude and longitude
    },
    additionalDetails: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'coordinates') {
      // Handling coordinates separately
      setSinkData(prevData => ({
        ...prevData,
        location: {
          ...prevData.location,
          coordinates: value.split(',').map(coord => parseFloat(coord.trim()))
        }
      }));
    } else if (name === 'vegetationType' && value === 'other') {
      // Clear the custom vegetation type if 'Other' is selected
      setSinkData(prevData => ({
        ...prevData,
        vegetationType: value,
        otherVegetationType: ''
      }));
    } else {
      setSinkData(prevData => ({
        ...prevData,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the sink data
    console.log('Carbon Sink Data:', sinkData);
    // Navigate to a summary or result page if needed
    navigate('/neutralityresult');
  };

  const sectionStyle = "bg-[#342F49] p-6 rounded-lg shadow-lg border border-[#66C5CC]";
  const titleStyle = "text-2xl font-semibold text-[#66C5CC] mb-4";
  const inputStyle = "p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#66C5CC] text-lg placeholder-black";
  const buttonStyle = "px-6 py-3 text-white font-bold rounded-lg shadow-md transition-transform transform hover:scale-105 bg-[#66C5CC] hover:bg-[#55B2B6] focus:outline-none focus:ring-2 focus:ring-[#55B2B6]";

  return (
    <div className="p-6 md:p-10 lg:p-20 min-h-screen flex flex-col items-center relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2B263F] to-[#4B5563] animate-gradient overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#66C5CC] to-[#55B2B6] opacity-20 animate-pulse"></div>
        </div>
      </div>
      <h1 className="text-3xl font-bold text-[#cad9ed] mb-8 text-center">Carbon Sink</h1>

      <form className="space-y-8 w-full max-w-4xl" onSubmit={handleSubmit}>
        {/* Name */}
        <div className={sectionStyle}>
          <h2 className={titleStyle}>Name</h2>
          <input
            type="text"
            name="name"
            value={sinkData.name}
            onChange={handleChange}
            placeholder="Name or identifier for the carbon sink"
            className={`${inputStyle} w-full`} // Full width for better length
          />
        </div>

        {/* Vegetation Type */}
        <div className={sectionStyle}>
          <h2 className={titleStyle}>Vegetation Type</h2>
          <select
            name="vegetationType"
            value={sinkData.vegetationType}
            onChange={handleChange}
            className={`${inputStyle} w-full`} // Full width for better length
          >
            <option value="forest">Forest</option>
            <option value="grassland">Grassland</option>
            <option value="wetland">Wetland</option>
            <option value="agricultural">Agricultural</option>
            <option value="mangrove">Mangrove</option>
            <option value="other">Other</option>
          </select>
          {sinkData.vegetationType === 'other' && (
            <input
              type="text"
              name="otherVegetationType"
              value={sinkData.otherVegetationType}
              onChange={handleChange}
              placeholder="Please specify"
              className={`${inputStyle} mt-4 w-full`} // Additional margin for separation
            />
          )}
        </div>

        {/* Area Covered */}
        <div className={sectionStyle}>
          <h2 className={titleStyle}>Area Covered (hectares)</h2>
          <input
            type="number"
            name="areaCovered"
            value={sinkData.areaCovered}
            onChange={handleChange}
            placeholder="Total area covered by the sink"
            className={`${inputStyle} w-full`} // Full width for better length
          />
        </div>

        {/* Carbon Sequestration Rate */}
        <div className={sectionStyle}>
          <h2 className={titleStyle}>Carbon Sequestration Rate (tons CO2/hectare/year)</h2>
          <input
            type="number"
            name="carbonSequestrationRate"
            value={sinkData.carbonSequestrationRate}
            onChange={handleChange}
            placeholder="Rate at which the sink sequesters carbon"
            className={`${inputStyle} w-full`} // Full width for better length
          />
        </div>

        {/* Location */}
        <div className={sectionStyle}>
          <h2 className={titleStyle}>Location (latitude, longitude)</h2>
          <input
            type="text"
            name="coordinates"
            value={sinkData.location.coordinates.join(', ')}
            onChange={handleChange}
            placeholder="Enter latitude and longitude separated by a comma"
            className={`${inputStyle} w-full`} // Full width for better length
          />
        </div>

     

        <div className="text-center mt-8">
          <button type="submit" className={buttonStyle}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default NeutralityForm;
