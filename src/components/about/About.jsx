import React from 'react';
import "./About.css";
import bkg from "../../images/pic1.jpg";

function About() {
  return (
    <div className='about' id='about'>
        <div className='about-heading'>
             <h2>About Us</h2>
             <p>This is the content in the about section</p>
        </div>
        <div className='about-container'>
            <section className='about-section'>
                <div className='about-image'>
                    <img src={bkg} alt=''/>
                </div>
                <div className='about-content'>
                    <h3>lorem ipsum dolor de nuit </h3>
                    <p>The inventory management app, Invento, simplifies the 
                        process of organizing and tracking inventory for businesses 
                        of all sizes. With its user-friendly interface and powerful features, 
                        Invento streamlines inventory management, allowing businesses to efficiently
                        monitor stock levels, track product movements, and generate detailed reports. Whether
                        it's a small retail store or a large warehouse, Invento provides a comprehensive solution 
                        to optimize inventory control and improve operational efficiency. Stay on top of your inventory 
                        with Invento and experience seamless inventory management like never before.</p>
                    <button className='read-more'>Read More</button>
                </div>
            </section>
        </div>
    </div>
  )
}

export default About;