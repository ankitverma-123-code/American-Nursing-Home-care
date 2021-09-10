import React from 'react'
import './review.css';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Rotate from 'react-reveal/Rotate';
import Zoom from 'react-reveal/Zoom';

export default function Review() {
    return (
        <
          div style={
            {
                backGroundColor:'#9DEA38'
            }
            }
        >
            <div className='commits'>
      <Zoom bottom>
        <h1 style={{color:'white'}}>Our customers Experience</h1>
      </Zoom>
      <div className='commits__container'>
        <div className='commits__wrapper'>
          <ul className='commits__items'>
          
          <Rotate top left>
            <section className='sc'>
              <p style={{color:'white'}} className="name">1.Pooja Khosla</p>
              <div style={{color:'white'}}>
              <Box component="fieldset" mb={3} borderColor="transparent">
                <Typography component="legend">Rated</Typography>
                <Rating name="read-only" value={5} readOnly />
              </Box>
                  <div style={{color:'white',fontFamily:'inherit',fontSize:'25px',margin:'5px'}}>
                      great experience. They are very efficient, responsive and flexible to the needs of their clients. The staff sent for my mother was very polite, professional and helpful. I will definitely recommend them
                  </div>
              </div>
            </section>
          </Rotate>  
          <Rotate top right>
            <section className='sc'>
              <p style={{color:'white'}} className="name">2.Chitra Bose</p>
              <div style={{color:'white'}}>
              <Box component="fieldset" mb={3} borderColor="transparent">
                <Typography component="legend">Rated</Typography>
                <Rating name="read-only" value={5} readOnly />
              </Box>
                  <div style={{color:'white',fontFamily:'inherit',fontSize:'25px',margin:'5px'}}>
                    They provided excellent staff. The staff was very caring and diligent. They looked after my Father in the hospital, treated my mother and us with utmost respect and care during our hard time.
                  </div>
              </div>
            </section>
          </Rotate>
            
            <Rotate top left>
            <section className='sc'>
              <p style={{color:'white'}} className="name">3.Vicky M</p>
              <div style={{color:'white'}}>
              <Box component="fieldset" mb={3} borderColor="transparent">
                <Typography component="legend">Rated</Typography>
                <Rating name="read-only" value={5} readOnly />
              </Box>
                  <div style={{color:'white',fontFamily:'inherit',fontSize:'25px',margin:'5px'}}>
                  Attendent provided were cordial and committed to the work, Good experience.
                  </div>
              </div>
            </section>
            </Rotate> 
             
          </ul>
          <ul className='commits__items'>
          
          <Rotate top right>
            <section className='sc'>
              <p style={{color:'white'}} className="name">4.Rakesh Sharma</p>
              <div style={{color:'white'}}>
              <Box component="fieldset" mb={3} borderColor="transparent">
                <Typography component="legend">Rated</Typography>
                <Rating name="read-only" value={5} readOnly />
              </Box>
                  <div style={{color:'white',fontFamily:'inherit',fontSize:'25px',margin:'5px'}}>
                      Very Good service for home care...Highly Recommended.
                  </div>
              </div>
            </section>
            </Rotate>
             
             <Rotate top left>
            <section className='sc'>
              <p style={{color:'white'}} className="name">5. Jeetu Faujdar</p>
              <div style={{color:'white'}}>
              <Box component="fieldset" mb={3} borderColor="transparent">
                <Typography component="legend">Rated</Typography>
                <Rating name="read-only" value={5} readOnly />
              </Box>
                  <div style={{color:'white',fontFamily:'inherit',fontSize:'25px',margin:'5px'}}>
                    Patient caring is very nice, Good arrangment of medical equipment.
                  </div>
              </div>
            </section>
             
            </Rotate>
            <Rotate top left>
            <section className='sc'>
              <p style={{color:'white'}} className="name">6. Devi Singh</p>
              <div style={{color:'white'}}>
              <Box component="fieldset" mb={3} borderColor="transparent">
                <Typography component="legend">Rated</Typography>
                <Rating name="read-only" value={5} readOnly />
              </Box>
                  <div style={{color:'white',fontFamily:'inherit',fontSize:'25px',margin:'5px'}}>
                     we had taken the number of this agency by someone. we took the staff and the staff was very Experienced, Punctual and very Good Nursing service provider.
                  </div>
              </div>
            </section>
            </Rotate>
             
          </ul>
          
          
        </div>
      </div>
    </div>
        </div>
    )
}
