import React from "react";
import tathvaLogo from "./images/Tathva'21 White Logo.png"
import toggle from "./images/nav-img.png"
import { Link } from "react-router-dom";
// import { firebase } from "../Firebase/firebase";
// import { initializeApp } from "@firebase/app";
// import { getAuth, GoogleAuthProvider } from "@firebase/auth";

const Nav= ()=>{

    // const SignInWithFirebase = () =>{
    //     var google_provider = new firebase.auth.GoogleAuthProvider()
    //     firebase.auth().signInWithPopup(google_provider)
    //     .then((re)=>{
    //         console.log(re);
    //     })
    //     .catch((err)=>{
    //         console.log(err)
    //     })
    // }

    return(
      <div className="nav container row">
      <div className="tathva-logo-container"> 
           <img src={tathvaLogo} alt="tathva-logo" className="nav-logo"/>
      </div>
      <Link to='/' className="nav-text">Home</Link>
      <Link to='/contact' className="nav-text">Contact</Link>
      <Link to='/leaderboard' className="nav-text">Leaderboard</Link>
      
      <Link to='/Dashboard/Referals'>Dashboard</Link>
           <div className=" row nav-btn flex">
           <h3><a className="inter-r txt-black" >Sign In</a></h3>
          <button className="nav-toggle">
                   <img src={toggle} alt="" />
               </button>
               </div>
           </div>

          
    )
}
export {Nav}