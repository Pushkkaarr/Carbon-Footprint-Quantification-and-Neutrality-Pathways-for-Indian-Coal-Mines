import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import ScrollArrow from "./ScrollArrow";
import Companies from "./Companies";
import Services from "./Services";
import Experience from "./Experience";
import Projects from "./Projects";
import Clients from "./Clients";
import Footer from "./Footer";
import App from "../App";
import EmissionForm from "./EmissionForm";
import Navbar from "./Navbar";
import Enavbar from "./Enavbar";

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
        <Route path="/services" element={<Services id="services" />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects id="projects" />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/app" element={<App />} />
      </Routes>
      
    </div>
  );
}

export default Emission;