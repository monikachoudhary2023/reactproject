import "./FooterStyle.css";
import React from 'react';
import {FaHome} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                  <FaHome size ={20} style={{color:"#fff", marginRight:"2rem"}}/>
                  <div>
                    <p>Banmankhi ward no. 14</p>
                    <p>Purnea, Bihar.</p>
                  </div>
                </div>
              <div className="phone">
                <h4>7004837974</h4>
              </div>  
              <div className="email">
                <h4>choudharymonika0212@gmail.com</h4>
              </div>
            </div> 
            <div className="right"></div>
        </div>
    </div>
  )
}

export default Footer