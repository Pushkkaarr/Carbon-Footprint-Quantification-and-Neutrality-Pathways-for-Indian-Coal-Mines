import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Enavbar from './Enavbar';
import EmissionForm from './EmissionForm';
import Footer from './Footer';
import NeutralityForm from './NeurtalityForm';
import NeutralityResult from './NeutralityResult';
import AboutUs from './AboutUs';
import Neutrality from './Neutrality';

function AboutUsPage() {
  return (
    <div className="App font-link">
        <Routes>
          <Route path="/" element={
            <>
              <Enavbar />
              <AboutUs />
              <Footer />
            </>
          } />
          <Route path="/neutrality" element={<Neutrality />} />
          <Route path="/neutralityresult" element={<NeutralityResult />} />
        </Routes>
      </div>
  );
}

export default AboutUsPage;
