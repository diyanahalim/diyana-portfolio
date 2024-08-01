import React from 'react'
import '../pages/Home.css'
import skill1 from '../images/skill1.png';
import skill2 from '../images/skill2.png';
import skill3 from '../images/skill3.png';
import skill4 from '../images/skill4.png';
import skill5 from '../images/skill5.png';
import skill6 from '../images/skill6.png';
import skill7 from '../images/skill7.png';
import skill8 from '../images/skill8.png';

const Home = () => {
  
  return (
    <div id="home" className="home">
      <div className="left-container">
        <h1 className="introduction-title">
          Diyana's Portfolio
        </h1>
        <h2 className="introduction-description">
          Frontend Developer 
        </h2>
        <div className="skills-container">
          <img src={skill1} className="skill-logo" alt="Logo" />
          <img src={skill2} className="skill-logo" alt="Logo" />
          <img src={skill3} className="skill-logo" alt="Logo" />
          <img src={skill4} className="skill-logo" alt="Logo" />
          <img src={skill5} className="skill-logo" alt="Logo" />
          <img src={skill6} className="skill-logo" alt="Logo" />
          <img src={skill7} className="skill-logo" alt="Logo" />
          <img src={skill8} className="skill-logo" alt="Logo" />
      </div>
      </div>
      <div className="right-container">
      </div>
    </div>
  )
}

export default Home
