import React from "react"
import referalImg from "./images/referal.png"


function Referals(props){
    return(
        <div className="referals">
            <h2 className="heading clash-sb"><img src={referalImg} alt="img"/> Referrals</h2>
            <div className="db-elements">
            <p className="inter-sb">Code<span className="code">{props.code}</span></p>
            <h3 className="inter-sb">Point per Person</h3>
            <p className="inter-r">Refer friends to Tathva events, workshops and lectures using your <br/> unique referrel code to receive points</p>
            <div className="point-table">
                <ul>
                    <li className="row"><p className="inter-r">Workshops</p><p  className="inter-r">2500</p></li>
                    <li className="row"><p  className="inter-r">Hackathons</p><p  className="inter-r">1500</p></li>
                    <li className="row"><p  className="inter-r">Lectures</p><p  className="inter-r">1250</p></li>
                    <li className="row"><p  className="inter-r">Events</p><p className="inter-r">1250</p></li>
                    <li className="row"><p  className="inter-r">Registration</p><p className="inter-r">500</p></li>
                </ul>
               
            </div>
            <div className="ur-referals">
                <h3 className="inter-sb">Your referrals</h3>
                <div className="referal-list">
                    
                </div>
            </div>
            </div>
        </div>

    )
}
export{Referals}