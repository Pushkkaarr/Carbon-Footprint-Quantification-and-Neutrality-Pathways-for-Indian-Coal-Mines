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
    <div className="p-6 md:p-10 lg:p-20 min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#342F49] to-[#2B263F] relative overflow-hidden">
    <div className="absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-r from-[#66C5CC] to-[#55B2B6] opacity-30 animate-gradient overflow-hidden"></div>
    </div>
    
    <h1 className="text-4xl font-bold text-[#cad9ed] mb-10 text-center">Carbon Sink</h1>
  
    {/* Radio Buttons for Toggle */}
    <div className="flex space-x-6 mb-8">
      <label className={`cursor-pointer text-lg font-medium text-[#cad9ed]`}>
        <input
          type="radio"
          name="formType"
          value="sink"
          checked={formType === 'sink'}
          onChange={handleFormTypeChange}
          className="mr-2 accent-[#66C5CC]"
        />
        Carbon Sink
      </label>
      <label className={`cursor-pointer text-lg font-medium text-[#cad9ed]`}>
        <input
          type="radio"
          name="formType"
          value="existing"
          checked={formType === 'existing'}
          onChange={handleFormTypeChange}
          className="mr-2 accent-[#66C5CC]"
        />
        Existing Sink
      </label>
    </div>
  
    <form className="space-y-8 w-full max-w-4xl bg-[#2B263F] p-8 rounded-lg shadow-lg" onSubmit={handleSubmit}>
      {/* Name */}
      <div className="mb-6">
        <h2 className="text-2xl text-[#cad9ed] font-semibold mb-2">Name</h2>
        <input
          type="text"
          name="name"
          value={sinkData.name}
          onChange={handleChange}
          placeholder="Name or identifier for the carbon sink"
          className="w-full p-3 rounded-md bg-[#342F49] text-[#cad9ed] border border-[#66C5CC] focus:ring focus:ring-[#66C5CC]"
        />
      </div>
  
      {/* Vegetation Type */}
      <div className="mb-6">
        <h2 className="text-2xl text-[#cad9ed] font-semibold mb-2">Vegetation Type</h2>
        <select
          name="vegetationType"
          value={sinkData.vegetationType}
          onChange={handleChange}
          className="w-full p-3 rounded-md bg-[#342F49] text-[#cad9ed] border border-[#66C5CC] focus:ring focus:ring-[#66C5CC]"
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
            className="mt-4 w-full p-3 rounded-md bg-[#342F49] text-[#cad9ed] border border-[#66C5CC] focus:ring focus:ring-[#66C5CC]"
          />
        )}
      </div>
  
      {/* Area Covered */}
      <div className="mb-6">
        <h2 className="text-2xl text-[#cad9ed] font-semibold mb-2">Area Covered (hectares)</h2>
        <input
          type="number"
          name="areaCovered"
          value={sinkData.areaCovered}
          onChange={handleChange}
          placeholder="Total area covered by the sink"
          className="w-full p-3 rounded-md bg-[#342F49] text-[#cad9ed] border border-[#66C5CC] focus:ring focus:ring-[#66C5CC]"
        />
      </div>
  
      {/* Carbon Sequestration Rate */}
      <div className="mb-6">
        <h2 className="text-2xl text-[#cad9ed] font-semibold mb-2">Carbon Sequestration Rate (tons CO2/hectare/year)</h2>
        <input
          type="number"
          name="carbonSequestrationRate"
          value={sinkData.carbonSequestrationRate}
          onChange={handleChange}
          placeholder="Rate at which the sink sequesters carbon"
          className="w-full p-3 rounded-md bg-[#342F49] text-[#cad9ed] border border-[#66C5CC] focus:ring focus:ring-[#66C5CC]"
        />
      </div>
  
      {/* Additional Details */}
      <div className="mb-6">
        <h2 className="text-2xl text-[#cad9ed] font-semibold mb-2">Additional Details</h2>
        <textarea
          name="additionalDetails"
          value={sinkData.additionalDetails}
          onChange={handleChange}
          placeholder="Any additional details"
          className="w-full p-3 rounded-md bg-[#342F49] text-[#cad9ed] border border-[#66C5CC] focus:ring focus:ring-[#66C5CC]"
        />
      </div>
  
      <div className="text-center">
        <button
          type="submit"
          className="py-3 px-6 bg-[#66C5CC] hover:bg-[#55B2B6] text-[#2B263F] font-bold rounded-md transition duration-300"
        >
          Submit
        </button>
      </div>
    </form>
  
    {/* Display Result */}
    {result && (
      <div className="mt-10 p-8 bg-[#342F49] text-[#cad9ed] rounded-lg shadow-lg border border-[#66C5CC] text-center w-full max-w-4xl mx-auto">
      <h2 className="text-4xl font-semibold text-[#66C5CC] mb-6">Result</h2>
      <p className="text-2xl mb-2"><strong>Daily Sequestration Rate:</strong> {result.dailySequestrationRate}</p>
      <p className="text-2xl"><strong>Total Sequestration:</strong> {result.totalSequestration}</p>
    </div>
    
    
    
    )}
  </div>
  
  );
}

export default NeutralityForm;