import React from "react";
import Logo from "./images/Tathva'21 White Logo.png"
import Site from "./images/link.png"
import Insta from "./images/insta.png"
import Fb from "./images/fb.png"
import Twiter from "./images/twitter.png"
import { Link } from "react-router-dom";

const Footer =()=>{
    return(
        <div className="footer">
            <div className="row footera">
               <Link to="/"> <img className="footer-logo" src={Logo} alt="logo"/></Link>
                <div className="footer-links row">
                    <ul className="hot-links inter-r">
                        <li><p>Site</p></li>
                        <li><a>Sign in</a></li>
                        <li><a>Home</a></li>
                        <li><a>About</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                    <ul className="social inter-r">
                        <li><p>Social</p></li>
                        <li ><a> <p> <img src={Insta}/><span className="social-txt">Instagram</span> </p></a></li>
                        <li ><a ><p><img src={Fb}/> <span className="social-txt"> Facebook </span></p></a></li>
                        <li><a> <p> <img src={Twiter}/> <span className="social-txt">Twitter </span></p></a></li>
                    </ul> 
                </div>
            </div>
            <div className="row">
<p className="inter-r dim">&#169; Tathva 21</p>
<a className="inter-r">Tathva <img src={Site}/></a>
            </div>
        </div>
    )
}
export{Footer}