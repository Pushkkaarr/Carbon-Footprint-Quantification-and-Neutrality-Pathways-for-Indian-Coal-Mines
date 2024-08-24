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
    <div>
      <h1>Electricity Consumption Estimation</h1>
      <div>
        <label>
          State Name:
          <input type="text" name="stateName" value={formData.stateName} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Energy per Time (kW·h/day):
          <input type="number" name="energyPerTime" value={formData.energyPerTime} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Responsible Area (m²):
          <input type="number" name="responsibleArea" value={formData.responsibleArea} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Total Area (m²):
          <input type="number" name="totalArea" value={formData.totalArea} onChange={handleChange} />
        </label>
      </div>
      <button onClick={fetchConsumptionData}>Calculate</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {result && (
        <div>
          <h2>Results</h2>
          <ul>
            {Object.entries(result).map(([type, { value, unit }]) => (
              <li key={type}>{type}: {value} {unit}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ElectricityConsumption;
