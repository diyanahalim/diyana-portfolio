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
        <a href="https://www.canva.com/design/DAFuxaaQlx4/p9Xj2EPSGz4zg2fymGP7kQ/edit?utm_content=DAFuxaaQlx4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank">
         
              <img src={resume} className="footer-icon" alt="Logo" /> 
              <div className="footer-box">
              <p className="footer-text">my resume :)</p>
          </div>
        </a>
        
    </div>
  )
}

export default Footer
