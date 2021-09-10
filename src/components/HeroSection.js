import React from 'react';
import backvd from "./background.mp4"
import '../App.css';
import './HeroSection.css';
import background from "../components/images/american.jpeg";
import logo from '../components/images/whatsapp_logo.png'
import call from '../components/images/call.png'
import Zoom from 'react-reveal/Zoom';


function HeroSection() {
  return (
    <>
    <div className='hero-container' > 
       <Zoom bottom>
        <div className="header" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '40vh'}}>
          Welcome To   American Home Care Nursing 
        </div>
       </Zoom>
       <Zoom right>
       <div className='sub-heading'>
         
            <p style={{fontWeight:'bold',fontSize:'20px'}}>
              Care that comes to you 
            </p>
            <p>
              Let us Provide you with High quality Care.
            </p>
       
       </div>
       </Zoom>
       <div className='logo'>
          <a href="tel:8006087144">
              <img style={{position:'fixed', left:'0px',height:'50px',width:'50px',marginLeft:'30px'}} src={call} alt="Logo" />
          </a>
       </div>
       <div className='logo'>
          <a href="https://wa.me/918006087144">
              <img style={{position:'fixed', right:'20px',height:'60px',width:'60px',marginLeft:'30px'}} src={logo} alt="Logo" />
          </a>
       </div>
    </div> 
    <div>
      
    </div>
    
    </>
  );
}

export default HeroSection;
