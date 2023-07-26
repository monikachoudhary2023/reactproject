import "./HeroStyle.css";
import React from 'react'
import IntroImg from "../assets/intro-img.jpg";
import { Link } from "react-router-dom";


const Heroimage = () => {
  return (
    <div className = "hero">
        <div className="mask">
          <img className="into-img" src= { IntroImg} alt=" IntroImg"/>
        </div>
        <div className="content">
            <p>
                HI I'M A FREELANCER.
            </p>
            <h1>Frontend Devloper</h1>
            <div>
                <Link to="/Project" className="btn">Projects</Link>
                <Link to="/Contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Heroimage