import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import Image from './back.jpeg'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CallIcon from '@material-ui/icons/Call';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import AvTimerIcon from '@material-ui/icons/AvTimer';

function Footer() {
  return (
    <div className='footer-container'
    >
     
      <div class='footer-links'>
        <div className='footer-link-wrapper'>

          <div class='footer-link-items'>
            <div>
                 
                <h4 style={{color:"white",margin:'10px',fontSize:'35px'}}> Contact Us</h4>
            </div>
           
           <div>
            <p style={{color: "white",margin:'10px'}}><LocationOnIcon fontSize="large"/> Malsi po sinola, Dehradun ,248003 </p>
           </div>
            <p style={{color:"white",margin:"10px"}}><CallIcon fontSize="large"/> 8006087144 </p>
           
           <div>
              <p style={{color: "white",margin:'10px'}}><MailOutlineIcon fontSize="large"/> americanhomecarenursing@gmail.com </p>
           </div>
           <div>
              <p style={{color: "white",margin:'10px'}}><AvTimerIcon fontSize="large"/> 24x7 Hours open </p>
           </div>
           
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
              <a  href="https://www.facebook.com/American-home-care-nursing-service-102652621779061"><i class='fab fa-instagram' /></a>
            </Link>

            <Link
              class='social-icon-link youtube'
              to='https://youtube.com/channel/UCJV3OjEMHDusQGZYVBA9KRA'
              target='_blank'
              aria-label='Youtube'
            >
              <a  href="https://youtube.com/channel/UCJV3OjEMHDusQGZYVBA9KRA"><i class='fab fa-youtube' /></a>
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
              to='https://www.linkedin.com/in/american-home-health-service-elderly-patient-care-in-dehradun-b2577121a'
              target='_blank'
              aria-label='LinkedIn'
            >
               <a  href="https://www.linkedin.com/in/american-home-health-service-elderly-patient-care-in-dehradun-b2577121a"><i class='fab fa-linkedin' /></a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
