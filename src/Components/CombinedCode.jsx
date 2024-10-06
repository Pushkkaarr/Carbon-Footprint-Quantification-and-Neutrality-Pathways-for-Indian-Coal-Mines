import React, { useState } from 'react';
import axios from 'axios';
import GraphPage from './GraphPage';
import { Navigate, useNavigate } from 'react-router-dom';
const stateOptions = [
  'andhra pradesh', 'arunachal pardesh', 'assam', 'bihar', 'chattisgarh',
  'delhi', 'goa', 'orissa', 'punjab', 'rajasthan',
  'tamil nadu', 'tripura', 'uttar pradesh', 'uttaranchal', 'west bengal',
  'gujarat', 'haryana', 'himachal pradesh', 'jammu and kashmir', 'jharkhand',
  'karnataka', 'kereala', 'madhya pradesh', 'maharashtra', 'manipur',
  'meghalaya', 'mizoram', 'nagaland'
];

function CombinedCode() {
  const navigate = useNavigate();

  

  const [electricityData, setElectricityData] = useState({
    stateName: '',
    energyPerTime: '',
    responsibleArea: '',
    totalArea: ''
  });

  const [explosionData, setExplosionData] = useState({
    explosiveType: '',
    amount: ''
  });

  const [fuelData, setFuelData] = useState({
    fuel: '',
    volume: ''
  });

  const [shippingData, setShippingData] = useState({
    weight_Unit: '',
    weight_Value: '',
    distance_Unit: '',
    distance_Value: '',
    transport_Method: ''
  });
  
  const [electricityResult, setElectricityResult] = useState(null);
  const [explosionResult, setExplosionResult] = useState(null);
  const [fuelResult, setFuelResult] = useState(null);
  const [shippingResult, setShippingResult] = useState(null);
  const [error, setError] = useState(null);

  const handleElectricityChange = (e) => {
    setElectricityData({ ...electricityData, [e.target.name]: e.target.value });
  };

  const handleExplosionChange = (e) => {
    setExplosionData({ ...explosionData, [e.target.name]: e.target.value });
  };

  const handleFuelChange = (e) => {
    setFuelData({ ...fuelData, [e.target.name]: e.target.value });
  };

  const handleShippingChange = (e) => {
    setShippingData({ ...shippingData, [e.target.name]: e.target.value });
  };

  const fetchElectricityData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/electricity-consumption', {
        params: {
          stateName: electricityData.stateName,
          'values.EnergyperTime': electricityData.energyPerTime,
          'values.Responsiblearea': electricityData.responsibleArea,
          'values.Totalarea': electricityData.totalArea
        }
      });
      setElectricityResult(response.data.result);
      setError(null);
    } catch (error) {
      console.error("Error fetching electricity data:", error);
      setError('Failed to fetch electricity data. Please check your input and try again.');
      setElectricityResult(null);
    }
  };

  const fetchExplosionData = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/explosion-emissions', {
        explosiveType: explosionData.explosiveType,
        amount: explosionData.amount
      });
      setExplosionResult(response.data);
      setError(null);
    } catch (error) {
      console.error("Error fetching explosion data:", error);
      setError('Failed to fetch explosion data. Please check your input and try again.');
      setExplosionResult(null);
    }
  };

  const fetchFuelData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/fuel-combustion', {
        params: {
          fuel: fuelData.fuel,
          'values.Volume': fuelData.volume
        }
      });
      setFuelResult(response.data.result);
      setError(null);
    } catch (error) {
      console.error("Error fetching fuel data:", error);
      setError('Failed to fetch fuel data. Please check your input and try again.');
      setFuelResult(null);
    }
  };

  const fetchShippingData = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/shipping-emissions', {
        weight_unit: shippingData.weight_unit,
        weight_value: parseFloat(shippingData.weight_value),
        distance_unit: shippingData.distance_unit,
        distance_value: parseFloat(shippingData.distance_value),
        transport_method: shippingData.transport_method
      });

      setShippingResult(response.data);
      setError(null);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError('Failed to fetch data. Please check your input and try again.');
      setShippingResult(null);
    }
  };
  

  return (
     <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-6 md:p-8 w-full overflow-x-hidden">
    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#2B263F] to-[#4B5563] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#66C5CC] to-[#55B2B6] opacity-20 animate-pulse"></div>
    </div>
  
    <div className="relative container mx-auto p-4 sm:p-6 md:p-8 pt-10 bg-[#372f55] rounded-lg shadow-lg border border-[#66C5CC] sm:w-full md:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
      {/*  max-w-3xl,  w-3/4 grid grid-cols-2 gap-8 */}
      <div className="p-6 bg-[#2B263F] rounded-lg shadow-lg border border-[#66C5CC] mb-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-[#cad9ed] mb-4 sm:mb-6 text-center">Electricity Consumption</h1>
      
      <div className="space-y-4 sm:space-y-6">
        <div>
          <label className="block mb-2 text-lg font-medium text-[#cad9ed]">State Name:</label>
      <select
        name="stateName"
        value={electricityData.stateName}
        onChange={handleElectricityChange}
        className="w-full p-3 border border-[#66C5CC] rounded bg-[#2B263F] text-[#cad9ed] placeholder-gray-400"
      >
        <option value="" disabled>Select State</option>
        {stateOptions.map((state, index) => (
          <option key={index} value={state}>{state}</option>
        ))}
      </select>   
    </div>
    <div>
      <label className="block mb-2 text-lg font-medium text-[#cad9ed]">Energy per Time (kW·h/day):</label>
      <input
        type="number"
        name="energyPerTime"
        value={electricityData.energyPerTime}
        onChange={handleElectricityChange}
        className="w-full p-3 border border-[#66C5CC] rounded bg-[#2B263F] text-[#cad9ed] placeholder-gray-400"
        placeholder="Energy per Time"
      />
    </div>
    <div>
      <label className="block mb-2 text-lg font-medium text-[#cad9ed]">Responsible Area (m²):</label>
      <input
        type="number"
        name="responsibleArea"
        value={electricityData.responsibleArea}
        onChange={handleElectricityChange}
        className="w-full p-3 border border-[#66C5CC] rounded bg-[#2B263F] text-[#cad9ed] placeholder-gray-400"
        placeholder="Responsible Area"
      />
    </div>
    <div>
      <label className="block mb-2 text-lg font-medium text-[#cad9ed]">Total Area (m²):</label>
      <input
        type="number"
        name="totalArea"
        value={electricityData.totalArea}
        onChange={handleElectricityChange}
        className="w-full p-3 border border-[#66C5CC] rounded bg-[#2B263F] text-[#cad9ed] placeholder-gray-400"
        placeholder="Total Area"
      />
    </div>
    <div className="text-center">
          <button
            onClick={fetchElectricityData}
            className="px-4 py-2 sm:px-6 sm:py-2 bg-[#66C5CC] text-black font-bold rounded-lg shadow-lg hover:bg-[#55B2B6] hover:text-white transform hover:scale-105 active:scale-95 transition duration-100 ease-in-out"
          >
            Calculate
          </button>
        </div>
  </div>

  {electricityResult && (
     <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-[#342F49] rounded-lg shadow-lg border border-[#66C5CC]">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#66C5CC] mb-4">Electricity Consumption Results</h2>
      <ul className="text-lg text-white">
        {Object.entries(electricityResult).map(([type, { value, unit }]) => (
          <li key={type}>{type}: {value} {unit}</li>
        ))}
      </ul>
    </div>
  )}
</div>

<div className="p-4 sm:p-6 bg-[#2B263F] rounded-lg shadow-lg border border-[#66C5CC] mb-6 sm:mb-8">
  <h1 className="text-2xl sm:text-3xl font-bold text-[#cad9ed] mb-6 sm:mb-8 text-center">Explosion Emissions</h1>

  <div className="space-y-4 sm:space-y-6">
    <div>
      <label className="block mb-2 text-base sm:text-lg font-medium text-[#cad9ed]">Explosive Type:</label>
      <select
        name="explosiveType"
        value={explosionData.explosiveType}
        onChange={handleExplosionChange}
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
      <label className="block mb-2 text-base sm:text-lg font-medium text-[#cad9ed]">Amount of Explosive Used (kg):</label>
      <input
        type="number"
        name="amount"
        value={explosionData.amount}
        onChange={handleExplosionChange}
        className="w-full p-3 border border-[#66C5CC] rounded bg-[#2B263F] text-[#cad9ed] placeholder-gray-400"
      />
    </div>
    <div className="text-center">
      <button
        onClick={fetchExplosionData}
        className="px-4 py-2 sm:px-6 sm:py-3 bg-[#66C5CC] text-black font-bold rounded-lg shadow-lg hover:bg-[#55B2B6] hover:text-white transform hover:scale-105 active:scale-95 transition duration-300 ease-in-out"
      >
        Calculate
      </button>
    </div>
  </div>

  {error && <p className="text-red-500 mt-4 text-center">{error}</p>}

  {explosionResult && (
    <div className="mt-6 sm:mt-10 p-4 sm:p-6 bg-[#342F49] rounded-lg shadow-lg border border-[#66C5CC]">
      <h2 className="text-xl sm:text-2xl font-semibold text-[#66C5CC] mb-4">Explosion Emissions Results</h2>
      <p className="text-base sm:text-lg text-[#cad9ed]">Explosive Type: {explosionResult.explosiveType}</p>
      <p className="text-base sm:text-lg text-[#cad9ed]">Amount: {explosionResult.amount} kg</p>
      <p className="text-base sm:text-lg text-[#cad9ed]">CO2: {explosionResult.emissions.CO2}</p>
      <p className="text-base sm:text-lg text-[#cad9ed]">CO: {explosionResult.emissions.CO}</p>
      <p className="text-base sm:text-lg text-[#cad9ed]">NOx: {explosionResult.emissions.NOx}</p>
      <p className="text-base sm:text-lg text-[#cad9ed]">NH3: {explosionResult.emissions.NH3}</p>
      <p className="text-base sm:text-lg text-[#cad9ed]">HCN: {explosionResult.emissions.HCN}</p>
      <p className="text-base sm:text-lg text-[#cad9ed]">H2S: {explosionResult.emissions.H2S}</p>
      <p className="text-base sm:text-lg text-[#cad9ed]">SO2: {explosionResult.emissions.SO2}</p>
    </div>
  )}
</div>

  
        <div className="p-6 bg-[#2B263F] rounded-lg shadow-lg border border-[#66C5CC] mb-8">
        <h1 className="text-3xl font-bold text-[#cad9ed] mb-8 text-center">Fuel Combustion Emissions </h1>

        <div className="space-y-6">
          <div>
            <label className="block mb-2 text-lg font-medium text-[#cad9ed]">Fuel Type:</label>
            <select
              name="fuel"
              value={fuelData.fuel}
              onChange={handleFuelChange}
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
            <label className="block mb-2 text-lg font-medium text-[#cad9ed]">Volume of Fuel Consumed (liters):</label>
            <input
              type="number"
              name="volume"
              value={fuelData.volume}
              onChange={handleFuelChange}
              className="w-full p-3 border border-[#66C5CC] rounded bg-[#2B263F] text-[#cad9ed] placeholder-gray-400"
            />
          </div>
          <div className="text-center">
          <button
  onClick={fetchFuelData}
  className="px-6 py-2 bg-[#66C5CC] text-black font-bold rounded-lg shadow-lg hover:bg-[#55B2B6] hover:text-white transform hover:scale-105 active:scale-95 transition duration-300 ease-in-out"
>
  Calculate
</button>

          </div>
        </div>

        {fuelResult && (
          <div className="mt-10 p-6 bg-[#342F49] rounded-lg shadow-lg border border-[#66C5CC]">
            <h2 className="text-2xl font-semibold text-[#66C5CC] mb-4">Fuel Combustion Emissions Results</h2>
            <ul className="text-lg text-white">
              {Object.entries(fuelResult).map(([type, {value, unit}]) => (
                <li key={type}>
                  {type}: {value} {unit}</li>
              ))}
            </ul>
          </div>
        )}
        </div>

       <div className="p-6 bg-[#2B263F] rounded-lg shadow-lg border border-[#66C5CC] mb-8">
<h1 className="text-3xl font-bold text-[#cad9ed] mb-8 text-center">Shipping Emissions </h1>
<div className="space-y-6">
          <div>
            <label className="block mb-2 text-lg font-medium text-[#cad9ed]">Weight Unit:</label>
            <select
              name="weight_unit"
              value={shippingData.weight_unit}
              onChange={handleShippingChange}
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
              value={shippingData.weight_value}
              onChange={handleShippingChange}
              className="w-full p-3 border border-[#66C5CC] rounded bg-[#2B263F] text-[#cad9ed] placeholder-gray-400"
              placeholder="Weight Value"
            />
          </div>
          <div>
            <label className="block mb-2 text-lg font-medium text-[#cad9ed]">Distance Unit:</label>
            <select
              name="distance_unit"
              value={shippingData.distance_unit}
              onChange={handleShippingChange}
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
              value={shippingData.distance_value}
              onChange={handleShippingChange}
              className="w-full p-3 border border-[#66C5CC] rounded bg-[#2B263F] text-[#cad9ed] placeholder-gray-400"
              placeholder="Distance Value"
            />
          </div>
          <div>
            <label className="block mb-2 text-lg font-medium text-[#cad9ed]">Transport Method:</label>
            <select
              name="transport_method"
              value={shippingData.transport_method}
              onChange={handleShippingChange}
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
  className="px-6 py-2 bg-[#66C5CC] text-black font-bold rounded-lg shadow-lg hover:bg-[#55B2B6] hover:text-white transform hover:scale-105 active:scale-95 transition duration-300 ease-in-out"
>
  Calculate
</button>

          </div>
        </div>

        {shippingResult && (
          <div className="mt-10 p-6 bg-[#342F49] rounded-lg shadow-lg border border-[#66C5CC]">
            <h2 className="text-2xl font-semibold text-[#66C5CC] mb-4">Shipping Emissions Results</h2>
            <ul className="text-lg text-white">
            <li>Distance: {shippingResult.distance}</li>
              <li>Weight: {shippingResult.weight}</li>
              <li>Carbon Emissions (grams): {shippingResult.carbonEmissions.grams}</li>
              <li>Carbon Emissions (kilograms): {shippingResult.carbonEmissions.kilograms}</li>
              <li>Carbon Emissions (metric tonnes): {shippingResult.carbonEmissions.metricTonnes}</li>
            </ul>
          </div>
        )}
        </div>

        

        {error && (
          <div className="mt-10 p-6 bg-red-600 text-white rounded-lg shadow-lg border border-red-700">
            <h2 className="text-2xl font-semibold">Error</h2>
            <p>{error}</p>
          </div>
        )}
      </div>
      <div className="flex justify-center mt-8 pt-8">
  <button
    onClick={() => {
      navigate("/graphpage");
    }}
    className="px-5 py-3 bg-gradient-to-r from-[#66C5CC] to-[#55B2B6] text-black font-extrabold text-xl rounded-xl shadow-2xl hover:bg-gradient-to-l hover:from-[#55B2B6] hover:to-[#66C5CC] hover:text-white transform hover:scale-110 active:scale-95 transition duration-300 ease-in-out"  >
    Generate Graph
  </button>
</div>

      {/* <div className='pt-20 pb-25'>
      <GraphPage />
      </div> */}
    </div>
    
  );
}

export default CombinedCode;