import React from "react"
import {Footer} from "./Footer"
import {Nav} from "./Nav"
import brGrad from "./images/br-grad.png"
import contact from "./images/contact.png"

function ContactUs(){
    return(<div>
        <Nav/>
<div className="bg-gradiant"><h1><img src={contact}/> Contact Us</h1></div>
<div className="contact-us">
        <div className="contacts">

        </div>
        <div className="message">

        </div>
</div>
<Footer/>
</div>

    )
}
export { ContactUs }