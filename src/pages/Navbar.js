import React, { useState } from 'react'
// import { Link, NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import '../pages/Navbar.css'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)
  const handleShowNavbar = () => {
    console.log('If this message appears in the console, JavaScript is running.');
    console.log('test');
    let bars = document.querySelectorAll('.bar');
    bars.forEach(bar => bar.classList.toggle('change'));
    setShowNavbar(!showNavbar);
    document.body.classList.toggle('no-scroll');
  }
  return (
    <nav id="navbar" className="navbar">
        <div className="navbar-logo"><h1>diyana <span>halim</span></h1></div>

      <div className={`navbar-menu ${showNavbar && 'active'}`}>
        <ul className="navbar-menu-content">
            <li className="navbar-menu-link" onClick={handleShowNavbar}><HashLink smooth to="/#home">HOME</HashLink></li>
            <li className="navbar-menu-link" onClick={handleShowNavbar}><HashLink smooth to="/#projects">PROJECTS</HashLink></li>
            <li className="navbar-menu-link" onClick={handleShowNavbar}><HashLink smooth to="/#contact">CONTACT</HashLink></li>
        </ul>
      </div>
      
      <div className="navbar-menu-icon" onClick={handleShowNavbar}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
      </div>
    </nav>
  )
}

export default Navbar
