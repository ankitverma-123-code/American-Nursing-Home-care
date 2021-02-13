import React from 'react';
import backvd from "./background.mp4"
import '../App.css';
import './HeroSection.css';


function HeroSection() {
  return (
    <>
    <div className='hero-container'>
      <video src={backvd} autoPlay loop muted />
      <h1 >WELCOME TO </h1>
      <p>American Home Nursing</p>
      
    </div>
    <div>
      
    </div>
    
    </>
  );
}

export default HeroSection;
