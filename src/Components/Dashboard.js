import React from "react"
import {Nav} from "./Nav"
import {Footer} from "./Footer"
import {Referals} from "./Referals"
import referalImg from "./images/referal.png"
import { Posters } from "./Posters"
import posterImg from "./images/posters.png"
import { Feedback } from "./Feedback"
import feedbackImg from "./images/feedback.png"
import reactDom from "react-dom"
import pic from "./images/profile-pic.png"
import Bg from "./images/db-bg.png"

function Dashboard(){
    return(
       <div className="dashboard-container">
           <Nav/>
           <div ><img src={Bg} alt-="bg" className="db-bg"/></div>
        <div className="dashboard">
            <div className="side-nav">
                <div>
                    <img src={pic}/>
                    <h3 className="ca-name inter-sb">Jane Doe</h3>
                    <p className="Total-points dim inter-r">1389 Points</p>
                </div>
                <ul className="db-links">
                    <li><button className="inter-sb"id="Referals"><p> <img src={referalImg} alt="img"/> Referals</p></button></li>
                    <li><button  className="inter-sb" id="Posters"><p><img src={posterImg}/> Posters</p></button></li>
                    <li><button  className="inter-sb" id="Feedback"><p> <img src={feedbackImg} alt="img"/>  Feedback</p></button></li>
                    
                </ul>
            </div>
            <div className="main-area">
    <Posters/>    
</div>
        </div>
        <Footer/>
        </div>
        
    )

}
export{Dashboard}