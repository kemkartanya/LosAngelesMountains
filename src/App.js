import './App.css';
import React from 'react';

import mountainImg0 from './images/LaBanner.png'
import bannerImg from './images/bannerText.png'
import logo from './images/logo.png'
import historyImg from './images/01history.png';
import thumb1 from './images/thumb1.png';
import thumb2 from './images/thumb2.png';
import losangeles_mountains from './images/LOSANGELES MOUNTAINS.png'
import logo_wMountains from './images/Logo_wMountains.png'
import climbImg from './images/02climb.png'
import schedule from './images/schedule-content.png'

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

      <Footer />
    </div>
  );
};

export default App;