import React, { useEffect, useState } from 'react'
import { projects } from '../ProjectsList.js';
import '../pages/Projects.css'

const Projects = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const options = {
      root: null,
      threshold: 0.9,
      rootMargin: "0px",
    }
    const observer = new IntersectionObserver(callback, options);
    const targets = document.querySelectorAll('.grid-container .show-onscroll');
    targets.forEach(target => {
        observer.observe(target);
    
    })

    window.addEventListener("resize", () => {
      const ismobile = window.innerWidth < 768;
      if (ismobile !== isMobile) {
        setIsMobile(ismobile);  
      }
        
  }, false);
  }, [isMobile])

  const callback = function (entries) {
    entries.forEach(entry => {
        if(entry.isIntersecting)
        {
            entry.target.classList.add('show');
          }
    });
}
  
  const projectItems = projects.map(project =>
    <div className="grid-container" key={project.id}>
      <div id="grid" className="grid">
          <h1 className="project-index">{project.project_index}</h1>

          <a href={project.link} target="_blank">
            <div className="img-container">
              <img className={`${isMobile ? "image-mobile" : "image"}`} src={project.project_image[0]} alt="Logo" />
              <img className={`${isMobile ? "image-mobile" : "image"}`} src={project.project_image[1]} alt="Logo" />
              <img className={`${isMobile ? "image-mobile" : "image"}`} src={project.project_image[2]} alt="Logo" />
            </div>
          </a>  
      </div>
      <div id="target" className="grid-description show-onscroll">
      <h4 className="project-title">{project.project_title}</h4>
      <p  className="project-description">{project.project_description}</p>
      </div>
  </div>

    
  );

  return (
    
    <div id="projects" className="projects">
      {projectItems}
    </div>
  )
}

export default Projects