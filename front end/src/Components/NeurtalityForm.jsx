import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NeutralityForm() {
  const [formType, setFormType] = useState('sink'); // 'sink' or 'existing'
  const [sinkData, setSinkData] = useState({
    name: '',
    vegetationType: 'forest',
    otherVegetationType: '',
    areaCovered: '',
    carbonSequestrationRate: '',
    additionalDetails: '',
  });

  const [result, setResult] = useState(null); // To store result from the backend
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'vegetationType' && value === 'other') {
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...sinkData,
      carbonSequestrationRate: parseFloat(sinkData.carbonSequestrationRate),
      areaCovered: parseFloat(sinkData.areaCovered),
      timeframe: 1 // Example timeframe, adjust as needed
    };

    try {
      const apiEndpoint = formType === 'sink' ? 'http://localhost:5000/api/sinks' : 'http://localhost:5000/api/existing-sinks';
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Response:', data);
        setResult(data.data); // Save response data
        // Clear form fields
        setSinkData({
          name: '',
          vegetationType: 'forest',
          otherVegetationType: '',
          areaCovered: '',
          carbonSequestrationRate: '',
          additionalDetails: '',
        });
      } else {
        console.error('Failed to submit form', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleFormTypeChange = (e) => {
    setFormType(e.target.value);
    // Clear form fields when switching types
    setSinkData({
      name: '',
      vegetationType: 'forest',
      otherVegetationType: '',
      areaCovered: '',
      carbonSequestrationRate: '',
      additionalDetails: '',
    });
    setResult(null);
  };

  const sectionStyle = "bg-[#342F49] p-6 rounded-lg shadow-lg border border-[#66C5CC]";
  const titleStyle = "text-2xl font-semibold text-[#66C5CC] mb-4";
  const inputStyle = "p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#66C5CC] text-lg placeholder-black";
  const buttonStyle = "px-6 py-3 text-white font-bold rounded-lg shadow-md transition-transform transform hover:scale-105 bg-[#66C5CC] hover:bg-[#55B2B6] focus:outline-none focus:ring-2 focus:ring-[#55B2B6]";
  const radioStyle = "mr-4 text-white font-bold";

  return (
    <div className="p-6 md:p-10 lg:p-20 min-h-screen flex flex-col items-center relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2B263F] to-[#4B5563] animate-gradient overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#66C5CC] to-[#55B2B6] opacity-20 animate-pulse"></div>
        </div>
      </div>
      
      <h1 className="text-3xl font-bold text-[#cad9ed] mb-8 text-center">Carbon Sink</h1>

      {/* Radio Buttons for Toggle */}
      <div className="mb-6">
        <label className={radioStyle}>
          <input
            type="radio"
            name="formType"
            value="sink"
            checked={formType === 'sink'}
            onChange={handleFormTypeChange}
            className="mr-2"
          />
          Carbon Sink
        </label>
        <label className={radioStyle}>
          <input
            type="radio"
            name="formType"
            value="existing"
            checked={formType === 'existing'}
            onChange={handleFormTypeChange}
            className="mr-2"
          />
          Existing Sink
        </label>
      </div>

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

        {/* Additional Details */}
        <div className={sectionStyle}>
          <h2 className={titleStyle}>Additional Details</h2>
          <textarea
            name="additionalDetails"
            value={sinkData.additionalDetails}
            onChange={handleChange}
            placeholder="Any additional details"
            className={`${inputStyle} w-full`} // Full width for better length
          />
        </div>

        <div className="text-center mt-8">
          <button type="submit" className={buttonStyle}>
            Submit
          </button>
        </div>
      </form>

      {/* Display Result */}
      {result && (
        <div className="mt-8 p-6 bg-[#342F49] text-white rounded-lg shadow-lg border border-[#66C5CC] text-center">
          <h2 className="text-2xl font-semibold text-[#66C5CC] mb-4">Result</h2>
          <p><strong>Daily Sequestration Rate:</strong> {result.dailySequestrationRate}</p>
          <p><strong>Total Sequestration:</strong> {result.totalSequestration}</p>
        </div>
      )}
    </div>
  );
}

export default NeutralityForm;
