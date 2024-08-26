import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ElectricityConsumption from './pages/ElectricityConsumption';
import FuelCombustion from './pages/FuelCombustion';
import ShippingEmissions from './pages/ShippingEmissions';
import ExplosionEmissions from './pages/ExplosionEmissions';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ElectricityConsumption />} />
      </Routes>
    </Router>
  );
}

export default App;
