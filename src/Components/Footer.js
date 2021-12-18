import React from "react";
import Logo from "./images/Tathva'21 White Logo.png"
import Link from "./images/link.png"
import Insta from "./images/insta.png"
import Fb from "./images/fb.png"
import Twiter from "./images/twitter.png"
const Footer =()=>{
    return(
        <div className="footer">
            <div className="row">
                <img className="footer-logo" src={Logo} alt="logo"/>
                <div className="footer-links row">
                    <ul className="hot-links">
                        <li><p>Site</p></li>
                        <li><a>Sign in</a></li>
                        <li><a>Home</a></li>
                        <li><a>About</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                    <ul className="social">
                        <li><p>Social</p></li>
                        <li ><a> <p> <img src={Insta}/> Instagram</p></a></li>
                        <li ><a ><p><img src={Fb}/>  Facebook</p></a></li>
                        <li><a> <p> <img src={Twiter}/> Twitter</p></a></li>
                    </ul>
                </div>
            </div>
            <div className="row">
<p className="inter-r dim">&#169; Tathva 21</p>
<a className="inter-r">Tathva <img src={Link}/></a>
            </div>
        </div>
    )
}
export{Footer}