import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmissionForm from "./EmissionForm";
import Neutrality from "./Neutrality";
import Enavbar from "./Enavbar";
import Footer from "./Footer";

function Emission() {
  return (
    
      <div className="App font-link">
        <Routes>
          <Route path="/" element={
            <>
              <Enavbar />
              <EmissionForm />
              <Footer />
            </>
          } />
          <Route path="/neutrality" element={<Neutrality />} />
        </Routes>
      </div>
    
  );
}

export default Emission;
