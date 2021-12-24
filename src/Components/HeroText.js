import React from "react"
import { Link } from "react-router-dom";

const HeroText = ()=>{
    return(
        <div className="hero-txt container ">
         <h1 className="hero-h clash-b">Campus <br/>Ambassodor</h1>  
         <p className="inter-r hero-p dim">Be the emissary of Tathva 2021</p> 
       <div className="clash-r  clash-n"><Link to="./signup" className="btn-pri">Sign up</Link>
         <a href="#" className="btn">Explore</a>
         </div> 
         <div className="row stats">
        <div className="stats-h "><h2 className="clash-r">12+</h2> 
        <p className="stats-p inter-r dim">Workshops</p></div>
        <div className="stats-h "><h2 className="clash-r">8+</h2> 
        <p className="stats-p inter-r dim">Lectures</p></div>
        <div className="stats-h"><h2 className="clash-r"> 20+</h2> 
        <p className="stats-p inter-r dim">Sponsors</p></div>
         </div>
        </div>
    )
}
export default HeroText;