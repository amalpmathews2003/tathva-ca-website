import React from "react";
import tathvaLogo from "./images/Tathva'21 White Logo.png"
import toggle from "./images/nav-img.png"
import { Link } from "react-router-dom";
const Nav= ()=>{
    return(
      <div className="nav container row">
      <div className="tathva-logo-container"> 
           <img src={tathvaLogo} alt="tathva-logo" className="nav-logo"/>
      </div>
      <Link to='/' className="nav-text">Home</Link>
      <Link to='/contact' className="nav-text">Contact</Link>
      <Link to='/leaderboard' className="nav-text">Leaderboard</Link>
           <div className=" row nav-btn flex">
           <h3><a className="inter-r txt-black">Sign In</a></h3>
          <button className="nav-toggle">
                   <img src={toggle} alt="" />
               </button>
               </div>
           </div>

          
    )
}
export {Nav}