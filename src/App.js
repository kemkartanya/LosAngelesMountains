import './App.css';
import React from 'react';

import mountainImg0 from './assets/images/LaBanner.png'
import bannerImg from './assets/images/bannerText.png'
import logo from './assets/images/logo.png'

import losangeles_mountains from './assets/images/LOSANGELES MOUNTAINS.png'
import logo_wMountains from './assets/images/Logo_wMountains.png'


import History from './components/History';
import Team from './components/Team';

const App = () => {
  return (
    <div className="container-fluid">
      {/* Section 1 */}
      <section className="section-1">
        <a href="#" className="logo">
          <img src={logo} alt="mountain logo" />
        </a>
        <nav className="navbar">
          <a href="#first-section" className="navbar-link">
            <strong><em>01. History</em></strong>
          </a>
          <a href="#climb-section" className="navbar-link">
            <strong><em>02. Team</em></strong>
          </a>
        </nav>
      </section>
      {/* End of Section 1 */}

      {/* Sticky Nav */}
      <section id="first-section" className="sticky-nav">
        <a href="#" className="logo2">
          <img src={logo_wMountains} alt="mountain logo" />
        </a>
        <nav className="navbar2">
          <a href="#first-section" className="navbar-link2">
            <strong><em>01. History</em></strong>
          </a>
          <a href="#climb-section" className="navbar-link2">
            <strong><em>02. Team</em></strong>
          </a>
        </nav>
      </section>
      {/* End of Sticky Nav */}

      <History />

      <Team />
    </div>
  );
};

export default App;