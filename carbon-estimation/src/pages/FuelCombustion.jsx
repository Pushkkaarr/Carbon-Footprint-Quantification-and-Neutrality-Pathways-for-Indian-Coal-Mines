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
    <div>
      <h1>Fuel Combustion Emissions Estimation</h1>
      <div>
        <label>
          Fuel Type:
          <select name="fuel" value={formData.fuel} onChange={handleChange}>
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
        </label>
      </div>
      <div>
        <label>
          Volume of Fuel Consumed (L):
          <input
            type="number"
            name="volume"
            value={formData.volume}
            onChange={handleChange}
          />
        </label>
      </div>
      <button onClick={fetchCombustionData}>Calculate</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {result && (
        <div>
          <h2>Results</h2>
          <ul>
            {Object.entries(result).map(([type, { value, unit }]) => (
              <li key={type}>
                {type}: {value} {unit}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default FuelCombustion;
