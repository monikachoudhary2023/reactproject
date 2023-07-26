import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Heroimage from '../components/Heroimage2';

const About = () => {
  return (
    <div>
        <Navbar/>
        <Heroimage heading="ABOUT" text="I'm a Front-End Devloper." />
        <Footer/>
    </div>
  )
}

export default About;