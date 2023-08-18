import React from 'react'
import "./ContactUs.css";
import Contacts from "./Contact";
import Contactcard from '../../components/ContactCard/ContactCard';

const ContactUs = () => {

  return (
    <div className='contactusPg'>
        <h1 className="heading text-center mt-sm-4 mt-4 heading fade-in">Get In Touch With Us</h1>
     
      <div className="container-fluid containercard">
        <div className="row singlerow gx-5 fade-in">

          {Contacts.map((contact) => {
            return<Contactcard 
              name={contact.name} 
              contactnumber={contact.contactnumber} 
              key={contact.key} 
              image={contact.image} 
             />
          })}

        </div>
      </div>
          <div className="blankdiv mb-5" ></div>

    </div>
  )

}

export default ContactUs;