import React from 'react'
import { ContactUs } from './ContactUs'
import { Footer } from './Footer'
import HeaderBg from './HeaderBg'

const Contact = () => {
    return (
        <>
          <div className="contact-container">
              <HeaderBg/>
              <ContactUs/>
              <Footer/>
          </div>     
        </>
    )
}

export default Contact
