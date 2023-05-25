import React from 'react'
import mario from '../Assets/icons_assets/Mario and Adrian A.jpg'
import adrian from '../Assets/icons_assets/Mario and Adrian b.jpg'
import '../Styles/About.css'

function About() {
  return (
        <section className="about-section">
      <div className="about-content">
        <h1 className='about-title'>About Little Lemon</h1>
        <h2 className='about-subtitle'>Chicago</h2>
        <div className='about-description'>
        <p className='about-p'>Welcome to Little Lemon, a charming restaurant located in the heart of Chicago.
            We pride ourselves on providing a delightful dining experience that combines delicious cuisine, warm hospitality, and a cozy ambiance.
            Founded by Adrian and Mario, two passionate food enthusiasts,
            Little Lemon has quickly become a beloved destination for locals and visitors alike. Our commitment to using fresh, locally sourced ingredients ensures that every dish bursts with flavor and showcases the vibrant culinary scene of Chicago.
            At Little Lemon, we believe that food brings people together,
            and we strive to create a welcoming environment where friends, families, and colleagues can gather and create lasting memories.
             Join us for an unforgettable dining experience and savor our carefully crafted menu that showcases the best of Chicago's culinary delights.
            From mouthwatering appetizers to indulgent desserts, our talented chefs take pride in every dish they create.
            </p>
            </div>
      </div>
      <div className="founders-section">
        <div className="founder">
          <img src={adrian} alt="Adrian - Founder" className="founder-img" />
        </div>
        <div className="founder">
          <img src={mario} alt="Mario - Founder" className="founder-img-mario" />
        </div>
      </div>
    </section>
  );
}



export default About
