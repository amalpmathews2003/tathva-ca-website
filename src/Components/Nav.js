import React from "react";
import tathvaLogo from "./images/Tathva'21 White Logo.png"
import toggle from "./images/nav-img.png"
const Nav= ()=>{
    return(
      <div className="nav container row">
           <img src={tathvaLogo} alt="tathva-logo" className="nav-logo"/>
           <div className=" row">
           <h3><a className="inter-r">Sign In</a></h3>
          <button className="nav-toggle">
                   <img src={toggle} alt="" />
               </button>
               </div>
           </div>

          
    )
}
export default Nav;