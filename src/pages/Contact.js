import React from 'react'
import '../pages/Contact.css'

const Contact = () => {
  return (
    <div id="contact" className="contact">
        <h1>Hoping to connect with you soon</h1>
        {/* <div class="loader"></div> */}
        {/* <div className="img-container">
            <span></span>
        </div> */}
        <div className="contact-details">
          <a href="mailto:sitinurdiyana98.dh@gmail.com" ><p> + sitinurdiyana98.dh@gmail.com</p></a>
          <a href="https://wa.me/175205459" target="_blank"><p> + 017 - 5205459</p></a>
          <p> + Ipoh, Perak</p>
        </div>
            
      {/* <h1>Hoping to connect with you soon ^^</h1>
        <div className="container">
            <span></span>
            <span></span>
            <span></span>
            <div className="contact-details">
                <p> + Ipoh, Perak</p>
                <p> + 017 - 5205459</p>
                <p> + sitinurdiyana98.dh@gmail.com</p>
            </div>
        </div> */}
    </div>
  )
}

export default Contact

