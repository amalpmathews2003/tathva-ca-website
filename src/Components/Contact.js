import React from 'react'
import { ContactUs } from './ContactUs'
import { Footer } from './Footer'
import HeaderBg from './HeaderBg'
import { RUReady } from './RUReady'
import styles from './Contact.module.css'
import { Nav } from './Nav'
import telephone from './images/contact.png'

const Contact = () => {
    return (
        <>
        <div className={styles["nwdiv"]}>
         
        <Nav/>
          
          <div className={styles["contact-container"]}>
         
          <div className={styles["header-background-contact"]}> 
              <HeaderBg/>
          </div>
          <div className={styles["overlap"]}>
          <div className={styles["header-contact"]}>
                <img src={telephone} alt="" className={styles['header-text-image']} />
                <h1 className={styles['header-text']}>Contact US</h1>
          </div>
              <ContactUs/>

          </div> 
          <div className={styles["RUready-contact"]}> 
              <RUReady/>
          </div>  
          </div> 
          <div className={styles["footer-contact"]}> 
            <Footer/>
          </div>
        </div>
        </>
    )
}

export default Contact
