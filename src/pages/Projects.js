import React, { useEffect, useState } from 'react'
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import SplitType from 'split-type';
import { projects } from '../ProjectsList.js';
import '../pages/Projects.css'
// import first_project_1 from '../images/Online Booking Website/1.jpg'
// import first_project_2 from '../images/Online Booking Website/2.jpg'
// import first_project_3 from '../images/Online Booking Website/3.jpg'
// import profile_image from '../images/diyana.png'

const Projects = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  // const [imageIndex, setImageIndex] = useState(0);

 
  // window.addEventListener('DOMContentLoaded', callback());
  useEffect(() => {
    
  var myIndex = 0;
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

    function carousel() {
      var i;
      var x = document.querySelectorAll(".image-mobile");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
      }
      myIndex++;
      if (myIndex > x.length) {myIndex = 1}    
      x[myIndex-1].style.display = "block";  
      setTimeout(carousel, 2000); // Change image every 2 seconds
    }
    window.addEventListener("resize", () => {
      const ismobile = window.innerWidth < 768;
      // const carousel = () => {
      //   setImageIndex((prev) => (prev < 2 ? prev + 1 : 0));
      // };
      if (ismobile !== isMobile) {
        setIsMobile(ismobile);  
        // carousel();
        // const timer = setInterval(() => {
        //   carousel();
        // }, 2000); // set the which timer you want
        // return () => {
        //   clearInterval(timer);
        // };
      }
        
  }, false);

 

  }, [isMobile])

  const callback = function (entries) {
    entries.forEach(entry => {
        if(entry.isIntersecting)
        {
            entry.target.classList.add('show');
            // observer.unobserve(entry.target)
          }
    });
}



  // window.addEventListener('DOMContentLoaded', setup);
  // function setup() {
  //   const options = {
  //     rootMargin: '0px 0px -200px 0px'
  //   }
  //   const observer = new IntersectionObserver((entries, observer) => {
  //     entries.forEach(entry => {
  //       if(entry.isIntersecting){
  //         entry.target.classList.add('show');
  //         observer.unobserve(entry.target);
  //       } else {
  //         return;
  //       }
  //     })
  //   }, options);

    // const h1 = document.querySelector('h1');
    // observer.observe(h1);
  //   const paras = document.querySelectorAll('.grid-right-side h4');
  //   paras.forEach(h4 => observer.observe(h4));
    
  //   const paras2 = document.querySelectorAll('.grid-right-side p');
  //   paras2.forEach(p => observer.observe(p));
  // }
  
  const projectItems = projects.map(project =>
    <div className="grid-container" key={project.id}>
      <div id="grid" className="grid">
          <h1 className="project-index">{project.project_index}</h1>
            
          <div className="img-container">
            <img className={`${isMobile ? "image-mobile" : "image"}`} src={project.project_image[0]} alt="Logo" />
            <img className={`${isMobile ? "image-mobile" : "image"}`} src={project.project_image[1]} alt="Logo" />
            <img className={`${isMobile ? "image-mobile" : "image"}`} src={project.project_image[2]} alt="Logo" />
            {/* <img className={`${isMobile ? "image-mobile" : "image"}`} src={project.project_image_1} alt="Logo" />
            <img className={`${isMobile ? "image-mobile" : "image"}`} src={project.project_image_2} alt="Logo" />
            <img className={`${isMobile ? "image-mobile" : "image"}`} src={project.project_image_3} alt="Logo" /> */}
          </div>
      </div>
      <div id="target" className="grid-description show-onscroll">
      <h4 className="project-title">{project.project_title}</h4>
      <p  className="project-description">{project.project_description}</p>
      </div>
  </div>

    
  );

  // useEffect(() => {
  //   gsap.config({ trialWarn: false });
  //   gsap.registerPlugin(ScrollTrigger);

  //   const split = new SplitType('.grid-container .grid-right-side', { type: 'chars' }); // Use SplitType

  //   const anim = gsap.to(split.chars, {
  //     //   delay: 1,
  //     color: 'rgb(1, 0, 254)', // Change color to white
  //     stagger: 1,
  //     ease: 'none',
  //     scrollTrigger: {
  //       trigger: '.grid-container',
  //       start: 'top center',
  //       end: 'bottom center',
  //       scrub: true,
  //       markers: true,
  //     },
  //   });
    
  // ScrollTrigger.refresh()
  // }, []);

//   gsap.registerPlugin(ScrollTrigger);
//   loop through each "h2" element and create an animation/ScrollTrigger for each
// gsap.utils.toArray(".grid-right-side").forEach(element => {
//   gsap.to(element, {
//     opacity: 1, 
//     ease: "none",
//     scrollTrigger: {
//       trigger: element,
//       start: "top center",
//       end: "bottom center",
//       markers: true,
//       toggleActions: "play reverse play reverse"
//     }
//   })
//   ScrollTrigger.refresh()
// });

  return (
    
    <div id="projects" className="projects">
      {projectItems}
    </div>
  )
}

export default Projects