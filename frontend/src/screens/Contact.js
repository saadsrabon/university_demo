import React from "react";


const Contacts = () => {
    return (
      <>
       <section className="contact-section">
       <div className="header-text">
        <h2>Contact Us</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus aut dignissimos dolores </p>
       </div>
        <div className="contact-text">
        <span>
          <i className="fa-solid fa-location-dot fa-2x"></i>
          <h4>Address</h4>
          <p>Uttara Sector 10,Dhaka</p>
        </span>
        <span>
        <i class="fa-solid fa-phone fa-2x"></i>
          <h4>Phone</h4>
          <p>01774513811</p>
        </span>
        <span>
        <i class="fa-solid fa-envelope fa-2x"></i>
          <h4>Email</h4>
          <p>worthy@gmail.com</p>
        </span>
        </div>
       
     
       </section>
      </>
    );
  };
  
  export default Contacts;


