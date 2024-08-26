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
    <div>
      <h1>Explosion Emissions Estimation</h1>
      <div>
        <label>
          Explosive Type:
          <select name="explosiveType" value={formData.explosiveType} onChange={handleChange}>
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
        </label>
      </div>
      <div>
        <label>
          Amount of Explosive Used (kg):
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
          />
        </label>
      </div>
      <button onClick={fetchExplosionData}>Calculate</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {result && (
        <div>
          <h2>Results</h2>
          <p>Explosive Type: {result.explosiveType}</p>
          <p>Amount: {result.amount} kg</p>
          <p>CO2: {result.emissions.CO2}</p>
          <p>CO: {result.emissions.CO}</p>
          <p>NOx: {result.emissions.NOx}</p>
          <p>NH3: {result.emissions.NH3}</p>
          <p>HCN: {result.emissions.HCN}</p>
          <p>H2S: {result.emissions.H2S}</p>
          <p>SO2: {result.emissions.SO2}</p>
        </div>
      )}
    </div>
  );
}

export default ExplosionEmissions;
