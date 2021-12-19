import React from "react"
import {Hero} from "./Hero"
import {Sponsors} from './Sponsors'
import {Nav} from "./Nav"
import {Footer} from "./Footer"
import {Page2} from "./Page2"
import {Page3} from "./Page3"
import{Page4} from "./Page4"
import {RUReady} from "./RUReady"



function Home(){
    return(
        <div>
            <Nav/>
            <Hero/>
            <Sponsors/>
             <Page2/>
             <Page3/>
            <RUReady/>
            <Footer/>

            
                
        </div>
    )
}
export{Home}