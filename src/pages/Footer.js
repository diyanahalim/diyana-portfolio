import React from 'react'
import '../pages/Footer.css'
import github from '../images/github.png';
import resume from '../images/resume.png';

const Footer = () => {
  return (
    <div className="footer">
        <a href="https://github.com/diyanahalim" target="_blank">
          
          <img src={github} className="footer-icon" alt="Logo" />
            <div className="footer-box">
              <p className="footer-text">github.com/diyanahalim</p>
            </div>
        </a>
        <a href="" target="_blank">
         
              <img src={resume} className="footer-icon" alt="Logo" /> 
              <div className="footer-box">
              <p className="footer-text">my resume :)</p>
          </div>
        </a>
        
    </div>
  )
}

export default Footer
