import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Facilities from '../facilities'
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import AddressBack from '../addressback';
import AboutUs from '../aboutus'
import Commit from '../commit'
import Form from '../Form'
import Review from '../Review';

//css
import logo from '../../components/images/whatsapp_logo.png'



function Home() {
  return (
    <>
     <div>
       <div className='w_logo'>
         {/* <a href="https://wa.me/918006087144">
           <img style={{position:'fixed',bottom:'40px',right:'0px',height:'60px',width:'60px'}} src={logo} alt="Logo" />
         </a> */}
         <HeroSection />
        
        <AboutUs/>

        <Form/>
        <Cards />
      
        {/* <Facilities/> */}
        <Commit/>
        <Review/>
        <AddressBack />
        <Footer/>
        </div>
        
      
      </div>
    </>
  );
}

export default Home;
