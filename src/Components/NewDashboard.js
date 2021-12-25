import React from 'react'
import HeaderBg from './HeaderBg'
import { ContactUs } from './ContactUs'
import { Footer } from './Footer'
// import HeaderBg from './HeaderBg'
import { RUReady } from './RUReady'
import styles from './RegisterPage.module.css'
import { Nav } from './Nav'
import telephone from './images/contact.png'
import { Register } from './Register'
import pen from './images/pen.png'
// import React from "react"
// import {Nav} from "./Nav"
// import {Footer} from "./Footer"
import {Referals} from "./Referals"
import referalImg from "./images/referal.png"
import { Posters } from "./Posters"
import posterImg from "./images/posters.png"
import { Feedback } from "./Feedback"
import feedbackImg from "./images/feedback.png"
import reactDom from "react-dom"
import pic from "./images/profile-pic.png"
import Bg from "./images/db-bg.png"
import {Link,Route, Routes} from "react-router-dom"
import { Dashboard } from './Dashboard'

const NewDashboard = () => {
    return (
        <>
             <div className={styles["nwdiv"]}>
         
         <Nav/>
           
           <div className={styles["register-container"]}>
          
           <div className={styles["header-background-register"]}> 
               <HeaderBg/>
           </div>
           <div className={styles["overlap-register"]}>
           <div className={styles["header-register"]}>
                 <img src={pen} alt="" className={styles['register-text-image']} />
                 <h1 className={styles['register-text']}>Registration</h1>
           </div>
               <Dashboard/>
 
           </div>  
           </div> 
           <div className={styles["footer-register"]}> 
             <Footer/>
           </div>
         </div>

        </>
    )
}

export default NewDashboard
