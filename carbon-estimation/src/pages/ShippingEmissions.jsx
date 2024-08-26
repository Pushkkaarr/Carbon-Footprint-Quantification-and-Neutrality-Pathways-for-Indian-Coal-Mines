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
    <div>
      <h1>Shipping Emissions Estimation</h1>
      <div>
        <label>
          Weight Unit:
          <select name="weight_unit" value={formData.weight_unit} onChange={handleChange}>
            <option value="">--Select Unit--</option>
            <option value="g">grams (g)</option>
            <option value="kg">kilograms (kg)</option>
            <option value="lb">pounds (lb)</option>
            <option value="mt">tonnes (mt)</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Weight Value:
          <input
            type="number"
            name="weight_value"
            value={formData.weight_value}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Distance Unit:
          <select name="distance_unit" value={formData.distance_unit} onChange={handleChange}>
            <option value="">--Select Unit--</option>
            <option value="km">kilometers (km)</option>
            <option value="mi">miles (mi)</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Distance Value:
          <input
            type="number"
            name="distance_value"
            value={formData.distance_value}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Transport Method:
          <select name="transport_method" value={formData.transport_method} onChange={handleChange}>
            <option value="">--Select Method--</option>
            <option value="truck">Truck</option>
            <option value="ship">Ship</option>
            <option value="train">Train</option>
            <option value="plane">Plane</option>
          </select>
        </label>
      </div>
      <button onClick={fetchShippingData}>Calculate</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {result && (
        <div>
          <h2>Results</h2>
          <ul>
            <li>Distance: {result.distance}</li>
            <li>Weight: {result.weight}</li>
            <li>Carbon Emissions (grams): {result.carbonEmissions.grams}</li>
            <li>Carbon Emissions (kilograms): {result.carbonEmissions.kilograms}</li>
            <li>Carbon Emissions (metric tonnes): {result.carbonEmissions.metricTonnes}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default ShippingEmissions;
