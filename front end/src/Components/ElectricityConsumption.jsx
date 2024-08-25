import React, { useState } from 'react';
import axios from 'axios';

function ElectricityConsumption() {
  const [formData, setFormData] = useState({
    stateName: '',
    energyPerTime: '',
    responsibleArea: '',
    totalArea: ''
  });

  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fetchConsumptionData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/electricity-consumption', {
        params: {
          stateName: formData.stateName,
          'values.EnergyperTime': formData.energyPerTime,
          'values.Responsiblearea': formData.responsibleArea,
          'values.Totalarea': formData.totalArea
        }
      });
      setResult(response.data.result);
      setError(null);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError('Failed to fetch data. Please check your input and try again.');
      setResult(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 pb-0">

  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#2B263F] to-[#4B5563] overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-[#66C5CC] to-[#55B2B6] opacity-20 animate-pulse"></div>
  </div>


  <div className="relative container mx-auto p-6 bg-[#2B263F] rounded-lg shadow-lg border border-[#66C5CC] max-w-3xl">
  
    <h1 className="text-3xl font-bold text-[#cad9ed] mb-8 text-center">Electricity Consumption Estimation</h1>

  
    <div className="space-y-6">
      <div>
        <label className="block mb-2 text-lg font-medium text-[#cad9ed]">State Name:</label>
        <input
          type="text"
          name="stateName"
          value={formData.stateName}
          onChange={handleChange}
          className="w-full p-3 border border-[#66C5CC] rounded bg-[#2B263F] text-[#cad9ed] placeholder-gray-400"
          placeholder="State Name"
        />
      </div>
      <div>
        <label className="block mb-2 text-lg font-medium text-[#cad9ed]">Energy per Time (kW·h/day):</label>
        <input
          type="number"
          name="energyPerTime"
          value={formData.energyPerTime}
          onChange={handleChange}
          className="w-full p-3 border border-[#66C5CC] rounded bg-[#2B263F] text-[#cad9ed] placeholder-gray-400"
          placeholder="Energy per Time"
        />
      </div>
      <div>
        <label className="block mb-2 text-lg font-medium text-[#cad9ed]">Responsible Area (m²):</label>
        <input
          type="number"
          name="responsibleArea"
          value={formData.responsibleArea}
          onChange={handleChange}
          className="w-full p-3 border border-[#66C5CC] rounded bg-[#2B263F] text-[#cad9ed] placeholder-gray-400"
          placeholder="Responsible Area"
        />
      </div>
      <div>
        <label className="block mb-2 text-lg font-medium text-[#cad9ed]">Total Area (m²):</label>
        <input
          type="number"
          name="totalArea"
          value={formData.totalArea}
          onChange={handleChange}
          className="w-full p-3 border border-[#66C5CC] rounded bg-[#2B263F] text-[#cad9ed] placeholder-gray-400"
          placeholder="Total Area"
        />
      </div>
      <div className="text-center">
        <button
          onClick={fetchConsumptionData}
          className="px-6 py-2 bg-[#66C5CC] text-[#2B263F] rounded-lg font-semibold hover:bg-[#55B2B6] transition duration-300"
        >
          Calculate
        </button>
      </div>
    </div>

  
    {error && <p className="text-red-500 mt-4 text-center">{error}</p>}

    {result && (
      <div className="mt-10 p-6 bg-[#342F49] rounded-lg shadow-lg border border-[#66C5CC]">
        <h2 className="text-2xl font-semibold text-[#66C5CC] mb-4">Results</h2>
        <ul className="text-lg text-white">
          {Object.entries(result).map(([type, { value, unit }]) => (
            <li key={type}>{type}: {value} {unit}</li>
          ))}
        </ul>
      </div>
    )}
  </div>
</div>

  );
}

export default ElectricityConsumption;