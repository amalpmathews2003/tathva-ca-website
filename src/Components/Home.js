import React from "react"
import {Hero} from "./Hero"
import {Sponsors} from './Sponsors'
import {Nav} from "./Nav"
import {Footer} from "./Footer"


function Home(){
    return(
        <div>
            <Nav/>
            <Hero/>
            <Sponsors/>
            <Footer/>

        </div>
    )
}
export{Home}