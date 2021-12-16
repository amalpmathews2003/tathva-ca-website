import React from "react"
import heroImg from "./images/hero-img.png"
const HeroImg = ()=>{
    return(
  <div className="hero-img-container">
      <img className="hero-img" src={heroImg}></img>
      <div className="line-container">
        <div className="lines"></div>  
        <div className="lines"></div>  
        <div className="lines"></div>  
        <div className="lines"></div>  
        <div className="lines"></div>  
        <div className="lines"></div>  
        <div className="lines"></div>  
        <div className="lines"></div>  
        <div className="lines"></div>  
      </div>
  </div>
    )
}
export default HeroImg