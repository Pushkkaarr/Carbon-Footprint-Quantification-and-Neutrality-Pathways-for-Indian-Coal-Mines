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
      </Routes>
      
    </div>
  );
}

export default App;
