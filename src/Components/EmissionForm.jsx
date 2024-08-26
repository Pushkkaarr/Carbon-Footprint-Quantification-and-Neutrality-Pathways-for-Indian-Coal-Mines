import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function EmissionForm() {
  const [formData, setFormData] = useState({
    stateName: '',
    energyPerTime: '',
    responsibleArea: '',
    totalArea: '',
    explosiveType: '',
    amount: '',
    fuel: '',
    volume: '',
    weight_unit: '',
    weight_value: '',
    distance_unit: '',
    distance_value: '',
    transport_method: ''
  });

  const [results, setResults] = useState(null);
  const [explosionResult, setExplosionResult] = useState(null);
  const [combustionResult, setCombustionResult] = useState(null);
  const [shippingResult, setShippingResult] = useState(null);
  const [error, setError] = useState('');
  const [showNeutralityButton, setShowNeutralityButton] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const fetchConsumptionData = async () => {
    try {
      const result = {
        totalConsumption: { value: formData.energyPerTime * formData.totalArea, unit: 'kW·h' },
        perAreaConsumption: { value: formData.energyPerTime / formData.responsibleArea, unit: 'kW·h/m²' }
      };

      setResults(result);
      setShowNeutralityButton(true);
    } catch (error) {
      setError('An error occurred while calculating the data.');
    }
  };

  const fetchExplosionData = async () => {
    try {
      const result = {
        explosiveType: formData.explosiveType,
        amount: formData.amount,
        emissions: {
          CO2: 'Value for CO2',
          CO: 'Value for CO',
          NOx: 'Value for NOx',
          NH3: 'Value for NH3',
          HCN: 'Value for HCN',
          H2S: 'Value for H2S',
          SO2: 'Value for SO2'
        }
      };

      setExplosionResult(result);
    } catch (error) {
      setError('An error occurred while calculating the explosion data.');
    }
  };

  const fetchCombustionData = async () => {
    try {
      const result = {
        emissions: {
          CO2: 'Value for CO2',
          CO: 'Value for CO',
          NOx: 'Value for NOx',
          NH3: 'Value for NH3',
          HCN: 'Value for HCN',
          H2S: 'Value for H2S',
          SO2: 'Value for SO2'
        }
      };

      setCombustionResult(result);
    } catch (error) {
      setError('An error occurred while calculating the combustion data.');
    }
  };

  const fetchShippingData = async () => {
    try {
      const distanceInKm = formData.distance_unit === 'mi' ? formData.distance_value * 1.60934 : formData.distance_value;
      const weightInKg = formData.weight_unit === 'lb' ? formData.weight_value * 0.453592 : formData.weight_value;
      const transportEmissions = {
        truck: 0.12,
        ship: 0.05,
        train: 0.03,
        plane: 0.6
      };
      const emissions = transportEmissions[formData.transport_method] || 0;
      const carbonEmissions = weightInKg * distanceInKm * emissions;

      setShippingResult({
        distance: `${distanceInKm} km`,
        weight: `${weightInKg} kg`,
        carbonEmissions: {
          grams: carbonEmissions * 1000,
          kilograms: carbonEmissions,
          metricTonnes: carbonEmissions / 1000
        }
      });
    } catch (error) {
      setError('An error occurred while calculating the shipping data.');
    }
  };

  const sectionStyle = "bg-[#342F49] p-6 rounded-lg shadow-lg border border-[#66C5CC] w-full max-w-6xl mx-auto mb-10";
  const titleStyle = "text-2xl font-semibold text-[#66C5CC] mb-4 text-center";
  const inputStyle = "w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#66C5CC] text-lg placeholder-black";
  const buttonStyle = "px-6 py-3 text-white font-bold rounded-lg shadow-md transition-transform transform hover:scale-105";
  const submitButtonStyle = "bg-[#66C5CC] hover:bg-[#55B2B6] focus:outline-none focus:ring-2 focus:ring-[#55B2B6]";
  const neutralityButtonStyle = "bg-[#55B2B6] hover:bg-[#66C5CC] focus:outline-none focus:ring-2 focus:ring-[#66C5CC]";

  return (
    <div className="p-6 md:p-10 lg:p-20 min-h-screen flex flex-col items-center relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2B263F] to-[#4B5563] animate-gradient overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#66C5CC] to-[#55B2B6] opacity-20 animate-pulse"></div>
        </div>
      </div>
      <h1 className="text-3xl font-bold text-[#cad9ed] mb-8 text-center">Electricity Consumption Estimation</h1>
  
      <div className={sectionStyle}>
        <div className="space-y-6">
          <div>
            <label className="block mb-2 text-lg font-medium text-[#cad9ed]">State Name:</label>
            <input
              type="text"
              name="stateName"
              value={formData.stateName}
              onChange={handleChange}
              className={inputStyle}
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
              className={inputStyle}
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
              className={inputStyle}
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
              className={inputStyle}
              placeholder="Total Area"
            />
          </div>
          <div className="text-center">
            <button
              onClick={fetchConsumptionData}
              className={`${buttonStyle} ${submitButtonStyle} mx-auto`}
            >
              Calculate
            </button>
          </div>
        </div>
      </div>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {results && (
        <div className="mt-10 p-6 bg-[#342F49] rounded-lg shadow-lg border border-[#66C5CC] w-full max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold text-[#66C5CC] mb-4">Results</h2>
          <ul className="text-lg text-white">
            {Object.entries(results).map(([type, { value, unit }]) => (
              <li key={type}>{type}: {value} {unit}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Explosion Emissions Estimation Form */}
      <div className="mt-20 w-full max-w-6xl mx-auto">
        <h1 className={titleStyle}>Explosion Emissions Estimation</h1>
        <div className={sectionStyle}>
          <div className="space-y-6">
            <div>
              <label className="block mb-2 text-lg font-medium text-[#cad9ed]">Explosive Type:</label>
              <select
                name="explosiveType"
                value={formData.explosiveType}
                onChange={handleChange}
                className={`${inputStyle} bg-[#342F49] text-white`}
              >
                <option value="">--Select Explosive Type--</option>
                <option value="Black powder">Black powder</option>
                <option value="Smokeless powder">Smokeless powder</option>
                <option value="Dynamite">Dynamite</option>
                <option value="TNT">TNT</option>
              </select>
            </div>
            <div>
              <label className="block mb-2 text-lg font-medium text-[#cad9ed]">Amount (kg):</label>
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                className={inputStyle}
                placeholder="Amount"
              />
            </div>
            <div className="text-center">
              <button
                onClick={fetchExplosionData}
                className={`${buttonStyle} ${submitButtonStyle} mx-auto`}
              >
                Calculate
              </button>
            </div>
          </div>
        </div>

        {error && <p className="text-red-500 mt-4">{error}</p>}

        {explosionResult && (
          <div className="mt-10 p-6 bg-[#342F49] rounded-lg shadow-lg border border-[#66C5CC] w-full max-w-6xl mx-auto">
            <h2 className="text-2xl font-semibold text-[#66C5CC] mb-4">Results</h2>
            <p className="text-lg text-white">Explosive Type: {explosionResult.explosiveType}</p>
            <p className="text-lg text-white">Amount: {explosionResult.amount} kg</p>
            <p className="text-lg text-white">CO2: {explosionResult.emissions.CO2}</p>
            <p className="text-lg text-white">CO: {explosionResult.emissions.CO}</p>
            <p className="text-lg text-white">NOx: {explosionResult.emissions.NOx}</p>
            <p className="text-lg text-white">NH3: {explosionResult.emissions.NH3}</p>
            <p className="text-lg text-white">HCN: {explosionResult.emissions.HCN}</p>
            <p className="text-lg text-white">H2S: {explosionResult.emissions.H2S}</p>
            <p className="text-lg text-white">SO2: {explosionResult.emissions.SO2}</p>
          </div>
        )}
      </div>

      {/* Fuel Combustion Emissions Estimation Form */}
      <div className="mt-20 w-full max-w-6xl mx-auto">
        <h1 className={titleStyle}>Fuel Combustion Emissions Estimation</h1>
        <div className={sectionStyle}>
          <div className="space-y-6">
            <div>
              <label className="block mb-2 text-lg font-medium text-[#cad9ed]">Fuel Type:</label>
              <input
                type="text"
                name="fuel"
                value={formData.fuel}
                onChange={handleChange}
                className={inputStyle}
                placeholder="Fuel Type"
              />
            </div>
            <div>
              <label className="block mb-2 text-lg font-medium text-[#cad9ed]">Volume of Fuel Consumed (liters):</label>
              <input
                type="number"
                name="volume"
                value={formData.volume}
                onChange={handleChange}
                className={inputStyle}
                placeholder="Volume of Fuel Consumed"
              />
            </div>
            <div className="text-center">
              <button
                onClick={fetchCombustionData}
                className={`${buttonStyle} ${submitButtonStyle} mx-auto`}
              >
                Calculate
              </button>
            </div>
          </div>
        </div>

        {error && <p className="text-red-500 mt-4">{error}</p>}

        {combustionResult && (
          <div className="mt-10 p-6 bg-[#342F49] rounded-lg shadow-lg border border-[#66C5CC] w-full max-w-6xl mx-auto">
            <h2 className="text-2xl font-semibold text-[#66C5CC] mb-4">Results</h2>
            <p className="text-lg text-white">Fuel Type: {formData.fuel}</p>
            <p className="text-lg text-white">Volume: {formData.volume} liters</p>
            <p className="text-lg text-white">CO2: {combustionResult.emissions.CO2}</p>
            <p className="text-lg text-white">CO: {combustionResult.emissions.CO}</p>
            <p className="text-lg text-white">NOx: {combustionResult.emissions.NOx}</p>
            <p className="text-lg text-white">NH3: {combustionResult.emissions.NH3}</p>
            <p className="text-lg text-white">HCN: {combustionResult.emissions.HCN}</p>
            <p className="text-lg text-white">H2S: {combustionResult.emissions.H2S}</p>
            <p className="text-lg text-white">SO2: {combustionResult.emissions.SO2}</p>
          </div>
        )}
      </div>

      {/* Shipping Emissions Estimation Form */}
      <div className="mt-20 w-full max-w-6xl mx-auto">
        <h1 className={titleStyle}>Shipping Emissions Estimation</h1>
        <div className={sectionStyle}>
          <div className="space-y-6">
            <div>
              <label className="block mb-2 text-lg font-medium text-[#cad9ed]">Weight Unit:</label>
              <select
                name="weight_unit"
                value={formData.weight_unit}
                onChange={handleChange}
                className={inputStyle}
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
                className={inputStyle}
                placeholder="Weight Value"
              />
            </div>
            <div>
              <label className="block mb-2 text-lg font-medium text-[#cad9ed]">Distance Unit:</label>
              <select
                name="distance_unit"
                value={formData.distance_unit}
                onChange={handleChange}
                className={inputStyle}
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
                className={inputStyle}
                placeholder="Distance Value"
              />
            </div>
            <div>
              <label className="block mb-2 text-lg font-medium text-[#cad9ed]">Transport Method:</label>
              <select
                name="transport_method"
                value={formData.transport_method}
                onChange={handleChange}
                className={inputStyle}
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
                className={`${buttonStyle} ${submitButtonStyle} mx-auto`}
              >
                Calculate
              </button>
            </div>
          </div>
        </div>

        {error && <p className="text-red-500 mt-4">{error}</p>}

        {shippingResult && (
          <div className="mt-10 p-6 bg-[#342F49] rounded-lg shadow-lg border border-[#66C5CC] w-full max-w-6xl mx-auto">
            <h2 className="text-2xl font-semibold text-[#66C5CC] mb-4">Results</h2>
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

      {showNeutralityButton && (
        <div className="text-center mt-10">
          <button
            onClick={() => navigate('/neutrality')}
            className={`${buttonStyle} ${submitButtonStyle}`}
          >
            Proceed to Neutrality
          </button>
        </div>
      )}
    </div>
  );
};

export default EmissionForm;
