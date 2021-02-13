import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import Image from './back.jpeg'

function Footer() {
  return (
    <div className='footer-container'
    >
     
      <div class='footer-links'>
        <div className='footer-link-wrapper'>

          <div class='footer-link-items'>
            <h4>CONTACT US</h4>
            <Link to='/ '> </Link> 
            <p style={{color: "white"}}>Mussoorie diversion road,
malsi po sinola behind hotel forest avenue Dehradun,248003 </p>
              <Link to='/ '> </Link> 
            <Link to='/ '>mob no - 8006087144</Link>
            <Link to='/ '>mob no - 8279814885</Link> 
         
           
          </div>
        </div>
        
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              AHN
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>AHN © 2020</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='https://www.facebook.com/American-home-care-nursing-service-102652621779061'
              target='_blank'
              aria-label='Facebook'
            >

              <a href="https://www.facebook.com/American-home-care-nursing-service-102652621779061"><i class='fab fa-facebook-f' /></a>
              
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
