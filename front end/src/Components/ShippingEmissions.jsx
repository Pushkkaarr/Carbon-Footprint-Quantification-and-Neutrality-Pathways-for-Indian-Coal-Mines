import React, { useState } from 'react';
import axios from 'axios';

function ShippingEmissions() {
  const [formData, setFormData] = useState({
    weight_unit: '',
    weight_value: '',
    distance_unit: '',
    distance_value: '',
    transport_method: ''
  });

  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fetchShippingData = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/shipping-emissions', {
        weight_unit: formData.weight_unit,
        weight_value: parseFloat(formData.weight_value),
        distance_unit: formData.distance_unit,
        distance_value: parseFloat(formData.distance_value),
        transport_method: formData.transport_method
      });

      setResult(response.data);
      setError(null);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError('Failed to fetch data. Please check your input and try again.');
      setResult(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 pt-0">
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#2B263F] to-[#4B5563] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#66C5CC] to-[#55B2B6] opacity-20 animate-pulse"></div>
      </div>

      <div className="relative container mx-auto p-6 bg-[#2B263F] rounded-lg shadow-lg border border-[#66C5CC] max-w-3xl">
        <h1 className="text-3xl font-bold text-[#cad9ed] mb-8 text-center">Shipping Emissions Estimation</h1>
        
        <div className="space-y-6">
          <div>
            <label className="block mb-2 text-lg font-medium text-[#cad9ed]">Weight Unit:</label>
            <select
              name="weight_unit"
              value={formData.weight_unit}
              onChange={handleChange}
              className="w-full p-3 border border-[#66C5CC] rounded bg-[#2B263F] text-[#cad9ed] placeholder-gray-400"
            >
              <option value="">--Select Unit--</option>
              <option value="g">grams (g)</option>
              <option value="kg">kilograms (kg)</option>
              <option value="lb">pounds (lb)</option>
              <option value="mt">tonnes (mt)</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 text-lg font-medium text-[#cad9ed]">Weight Value:</label>
            <input
              type="number"
              name="weight_value"
              value={formData.weight_value}
              onChange={handleChange}
              className="w-full p-3 border border-[#66C5CC] rounded bg-[#2B263F] text-[#cad9ed] placeholder-gray-400"
              placeholder="Weight Value"
            />
          </div>
          <div>
            <label className="block mb-2 text-lg font-medium text-[#cad9ed]">Distance Unit:</label>
            <select
              name="distance_unit"
              value={formData.distance_unit}
              onChange={handleChange}
              className="w-full p-3 border border-[#66C5CC] rounded bg-[#2B263F] text-[#cad9ed] placeholder-gray-400"
            >
              <option value="">--Select Unit--</option>
              <option value="km">kilometers (km)</option>
              <option value="mi">miles (mi)</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 text-lg font-medium text-[#cad9ed]">Distance Value:</label>
            <input
              type="number"
              name="distance_value"
              value={formData.distance_value}
              onChange={handleChange}
              className="w-full p-3 border border-[#66C5CC] rounded bg-[#2B263F] text-[#cad9ed] placeholder-gray-400"
              placeholder="Distance Value"
            />
          </div>
          <div>
            <label className="block mb-2 text-lg font-medium text-[#cad9ed]">Transport Method:</label>
            <select
              name="transport_method"
              value={formData.transport_method}
              onChange={handleChange}
              className="w-full p-3 border border-[#66C5CC] rounded bg-[#2B263F] text-[#cad9ed] placeholder-gray-400"
            >
              <option value="">--Select Method--</option>
              <option value="truck">Truck</option>
              <option value="ship">Ship</option>
              <option value="train">Train</option>
              <option value="plane">Plane</option>
            </select>
          </div>
          <div className="text-center">
            <button
              onClick={fetchShippingData}
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
              <li>Distance: {result.distance}</li>
              <li>Weight: {result.weight}</li>
              <li>Carbon Emissions (grams): {result.carbonEmissions.grams}</li>
              <li>Carbon Emissions (kilograms): {result.carbonEmissions.kilograms}</li>
              <li>Carbon Emissions (metric tonnes): {result.carbonEmissions.metricTonnes}</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default ShippingEmissions;