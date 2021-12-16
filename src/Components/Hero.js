import React from "react"
import HeroText from "./HeroText"
import HeroImg from "./HeroImg"
const Hero = ()=>{
    return(
        <div className="hero row">
            <HeroText/>
            <HeroImg/>
        </div>
    )
}
export default Hero;