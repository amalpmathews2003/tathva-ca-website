import React from "react"
import HeroText from "./HeroText"
import HeroImg from "./HeroImg"
const Hero = ()=>{
    return(
        <div className="hero row height-fix">
            <HeroText/>
            <HeroImg/>
        </div>
    )
}
export {Hero}