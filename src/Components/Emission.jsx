import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmissionForm from "./EmissionForm";
import Neutrality from "./Neutrality";
import Enavbar from "./Enavbar";
import Footer from "./Footer";
import ElectricityConsumption from "./ElectricityConsumption";
import ExplosionEmissions from "./ExplosionEmissions";
import FuelCombustion from "./FuelCombustion";
import ShippingEmissions from "./ShippingEmissions";
import CombinedCode from "./CombinedCode";

function Emission() {
  return (
    
      <div className="App font-link">
        <Routes>
          <Route path="/" element={
            <>
              <Enavbar />
              {/* <ElectricityConsumption />
              <ExplosionEmissions />
              <FuelCombustion />
              <ShippingEmissions /> */}
              <CombinedCode />
              <Footer />
            </>
          } />
          <Route path="/neutrality" element={<Neutrality />} />
        </Routes>
      </div>
    
  );
}

export default Emission;
