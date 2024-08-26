import React, { useState } from 'react';
import axios from 'axios';

function FuelCombustion() {
  const [formData, setFormData] = useState({
    fuel: '',
    volume: ''
  });

  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fetchCombustionData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/fuel-combustion', {
        params: {
          fuel: formData.fuel,
          'values.Volume': formData.volume
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
    <div className="min-h-screen bg-gray-900 text-white p-6 pt-0 pb-0">
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#2B263F] to-[#4B5563] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#66C5CC] to-[#55B2B6] opacity-20 animate-pulse"></div>
      </div>

      <div className="relative container mx-auto p-6 bg-[#2B263F] rounded-lg shadow-lg border border-[#66C5CC] max-w-3xl">
        <h1 className="text-3xl font-bold text-[#cad9ed] mb-8 text-center">Fuel Combustion Emissions Estimation</h1>

        <div className="space-y-6">
          <div>
            <label className="block mb-2 text-lg font-medium text-[#cad9ed]">Fuel Type:</label>
            <select
              name="fuel"
              value={formData.fuel}
              onChange={handleChange}
              className="w-full p-3 border border-[#66C5CC] rounded bg-[#2B263F] text-[#cad9ed] placeholder-gray-400"
            >
              <option value="">--Select Fuel Type--</option>
              <option value="cng">CNG</option>
              <option value="diesel">Diesel</option>
              <option value="Diesel (retail station biofuel blend)">
                Diesel (Retail Station Biofuel Blend)
              </option>
              <option value="lpg">LPG</option>
              <option value="petrol">Petrol</option>
              <option value="Petrol (retail station biofuel blend)">
                Petrol (Retail Station Biofuel Blend)
              </option>
            </select>
          </div>
          <div>
            <label className="block mb-2 text-lg font-medium text-[#cad9ed]">Volume of Fuel Consumed (L):</label>
            <input
              type="number"
              name="volume"
              value={formData.volume}
              onChange={handleChange}
              className="w-full p-3 border border-[#66C5CC] rounded bg-[#2B263F] text-[#cad9ed] placeholder-gray-400"
            />
          </div>
          <div className="text-center">
            <button
              onClick={fetchCombustionData}
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
                <li key={type}>
                  {type}: {value} {unit}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default FuelCombustion;