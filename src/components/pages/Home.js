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





function Home() {
  return (
    <>
      <HeroSection />
     
      <AboutUs/>

      <Form/>
      <Cards />
    
      <Facilities/>
      <Commit/>
      <AddressBack />
      <Footer/>
      
      
    </>
  );
}

export default Home;
