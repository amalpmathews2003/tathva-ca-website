import React from "react"

const HeroText = ()=>{
    return(
        <div className="hero-txt container ">
         <h1 className="hero">Campus <br/>Ambassodor</h1>  
         <p className="inter-r hero-p">Be the emissary of Tathva 2021</p> 
       <div className=""> <a href="#" className="btn-pri">Sign up</a>
         <a href="#" className="btn">Explore</a>
         </div> 
         <div className="row stats">
        <div className="stats-h"><h2>12+</h2> 
        <p className="stats-p inter-r">Workshops</p></div>
        <div className="stats-h"><h2>8+</h2> 
        <p className="stats-p inter-r">Lectures</p></div>
        <div className="stats-h "><h2>20+</h2> 
        <p className="stats-p inter-r">Sponsors</p></div>
         </div>
        </div>
    )
}
export default HeroText;