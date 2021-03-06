import React from "react"
import referalImg from "./images/referal.png"
import { useUserContext } from "./userContext"
import { useState,useEffect } from "react"

function Referals(props){
    const {user}=useUserContext()

    const [refCode, setRefCode] = useState()
    useEffect(() => {
        let code=user.name.slice(0,2)+user.uid.slice(-2);
        
        setRefCode(code)
    }, [])
    return(
        <div className="referals">
            <h2 className="heading clash-sb"><img src={referalImg} alt="img"/> Referrals</h2>
            <div className="db-elements">
            <div className="code-container"> 
            <p className="inter-sb referal-code-text">Code</p>
            <span className="code">{props.code}</span> 
            </div>
            <h3 className="inter-sb">Point per Person</h3>
            <p className="inter-r">Refer friends to Tathva events, workshops and lectures using your <br/> unique referrel code to receive points</p>
            <div className="point-table">
                <ul className="referals-ul">
                    <li className="row"><p className="inter-r workshop-li">Workshops</p><p  className="inter-r">2500</p></li>
                    <li className="row"><p  className="inter-r">Hackathons</p><p  className="inter-r">1500</p></li>
                    <li className="row"><p  className="inter-r">Lectures</p><p  className="inter-r">1250</p></li>
                    <li className="row"><p  className="inter-r">Events</p><p className="inter-r">1250</p></li>
                    <li className="row"><p  className="inter-r">Registration</p><p className="inter-r">500</p></li>
                </ul>
               
            </div>
            <div className="ur-referals">
                <h3 className="inter-sb">Your referrals</h3>
                <div className="referal-list">
                    {refCode}
                </div>  
            </div>
            </div>
        </div>

    )
}
export{Referals}