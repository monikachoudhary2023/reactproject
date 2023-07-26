import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Heroimage2 from '../components/Heroimage2';

const Projects = () => {
  return (
    <div>
        <Navbar/>
        <Heroimage2 heading ="PROJECTS." text ="some of the my most recent work."/>
        <Footer/>
    </div>
  )
}

export default Projects;