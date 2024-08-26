import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Companies from './Components/Companies';
import Services from './Components/Services';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Clients from './Components/Clients';
import Footer from './Components/Footer';
import ScrollArrow from './Components/ScrollArrow';
import Emission from './Components/Emission';
import './app.css';
import Neutrality from './Components/Neutrality';
import NeutralityResult from './Components/NeutralityResult';
import AboutUs from './Components/AboutUs';
import AboutUsPage from './Components/AboutUsPage';
import ContactUs from './Components/ContactUs';
import GraphPage from './Components/GraphPage';

function App() {
  return (
    <div className="App font-link">
    
     
      <Routes>
      <Route path="/" element={
          <>
            <Header id="home" />
            <ScrollArrow />
            <Companies id="about" />
            <Services id="services" />
            <Experience />
            <Projects id="projects" />
            <Clients />
            <Footer />
          </>
        } />
        <Route path="/services" element={<Services id="services" />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects id="projects" />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/emission" element={<Emission />} />
        <Route path="/neutrality" element={<Neutrality />} />
        <Route path="/neutralityresult" element={<NeutralityResult />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/graphpage" element={<GraphPage />} />
      </Routes>
      
    </div>
  );
}

export default App;
