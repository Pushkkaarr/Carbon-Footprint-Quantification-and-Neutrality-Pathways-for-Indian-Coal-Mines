import React, { useState } from 'react';
import axios from 'axios';

function ExplosionEmissions() {
  const [formData, setFormData] = useState({
    explosiveType: '',
    amount: ''
  });

  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fetchExplosionData = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/explosion-emissions', {
        explosiveType: formData.explosiveType,
        amount: formData.amount
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
    <div className="min-h-screen bg-gray-900 text-white p-6 pt-0 pb-0">
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#2B263F] to-[#4B5563] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#66C5CC] to-[#55B2B6] opacity-20 animate-pulse"></div>
      </div>

      <div className="relative container mx-auto p-6 bg-[#2B263F] rounded-lg shadow-lg border border-[#66C5CC] max-w-3xl">
        <h1 className="text-3xl font-bold text-[#cad9ed] mb-8 text-center">Explosion Emissions Estimation</h1>

        <div className="space-y-6">
          <div>
            <label className="block mb-2 text-lg font-medium text-[#cad9ed]">Explosive Type:</label>
            <select
              name="explosiveType"
              value={formData.explosiveType}
              onChange={handleChange}
              className="w-full p-3 border border-[#66C5CC] rounded bg-[#2B263F] text-[#cad9ed] placeholder-gray-400"
            >
              <option value="">--Select Explosive Type--</option>
              <option value="Black powder">Black powder</option>
              <option value="Smokeless powder">Smokeless powder</option>
              <option value="Dynamite, straight">Dynamite, straight</option>
              <option value="Dynamite, ammonia">Dynamite, ammonia</option>
              <option value="Dynamite, gelatin">Dynamite, gelatin</option>
              <option value="ANFO">ANFO</option>
              <option value="TNT">TNT</option>
              <option value="RDX">RDX</option>
              <option value="PETN">PETN</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 text-lg font-medium text-[#cad9ed]">Amount of Explosive Used (kg):</label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              className="w-full p-3 border border-[#66C5CC] rounded bg-[#2B263F] text-[#cad9ed] placeholder-gray-400"
            />
          </div>
          <div className="text-center">
            <button
              onClick={fetchExplosionData}
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
            <p className="text-[#cad9ed]">Explosive Type: {result.explosiveType}</p>
            <p className="text-[#cad9ed]">Amount: {result.amount} kg</p>
            <p className="text-[#cad9ed]">CO2: {result.emissions.CO2}</p>
            <p className="text-[#cad9ed]">CO: {result.emissions.CO}</p>
            <p className="text-[#cad9ed]">NOx: {result.emissions.NOx}</p>
            <p className="text-[#cad9ed]">NH3: {result.emissions.NH3}</p>
            <p className="text-[#cad9ed]">HCN: {result.emissions.HCN}</p>
            <p className="text-[#cad9ed]">H2S: {result.emissions.H2S}</p>
            <p className="text-[#cad9ed]">SO2: {result.emissions.SO2}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ExplosionEmissions;