import React from 'react';
import './commit.css';
import CardItem from './CardItem';
import Roll from 'react-reveal/Roll';
import Wobble from 'react-reveal/Wobble';

function Commit() {
  return (
    <div className='commits'> 
      <h1 style={{color:"white"}}>Our Commitment</h1>
      <div className='commits__container'>
        <div className='commits__wrapper'>
          <ul className='commits__items'>
          <Roll left>
            <section className='sc'>
            <p style={{color:"white"}}>Sewa Bhaw</p>
             <div style={{color:"white"}}>our staff provides ethical, nursing care with 
sewa bhav and improves in patient condition that why we called us like 
sewa bhav is our passion.</div>
            </section>
             </Roll>
             <Roll right>
             <section className='sc'>
            <p style={{color:"white"}}>World-Class nurshing services</p>
             <div style={{color:"white"}}> World-class Aseptic techniques are used 
for the improvement of the patient whatever Nursing program 
should be done by our staff.</div>
            </section>
             </Roll>
            
            <Roll left>
            <section className='sc'>
            <p style={{color:"white"}}>Trust</p>
             <div style={{color:"white"}}>Maintaining trust is the motive for our team and
       keeping this in mind, care is given to the patient</div>
            </section>
             </Roll>
             
          </ul>
          
          
        </div>
      </div>
    </div>
  );
}

export default Commit;
