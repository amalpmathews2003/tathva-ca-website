import React from "react";
import Share from "./Components/images/share.png"
import Notices from "./Components/images/notices.png"
import Encourage from "./Components/images/encourage.png"

export default function cards(props){
    return(
        <div>
            <h2 className=""container>What you shoud do</h2>
            <div class="container row ">
            <div className="card">
                
                <img src={Share} alt="notices"></img>
                <h3>Share</h3>
                <p>Share all <span className="color-pri">posters</span> and <span className="color-sec">links</span> on your social media and groups</p>
            </div>
            <div className="card">
        <img src={Notices} alt="notices"/>
            <h3>Notices</h3>
            <p>Put  up posters we send you on your <span className="color-pri">notice boards</span></p>

            </div>
            <div className="card">
                
        <img src={Encourage} alt="encourage"/>
        <h3>Encourage</h3>
        <p>Encourage  students of <span className="color-pri">your college</span>to <span className="solor-sec">participare</span>in Tathva</p>
            </div>
            </div>
        </div>
    )
}