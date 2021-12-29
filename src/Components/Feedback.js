import React, { useState } from "react"
import feedbackImg from "./images/feedback.png"
import {updateAmbassadorFeedback} from "./updateUserFirebase"
import { useUserContext } from "./userContext"


function Feedback(){
    const [feedback, setFeedback] = useState("")
    const {user}=useUserContext()
    function handleChange(e){
        setFeedback(e.target.value)
    }

    function submitFeedback(){
        updateAmbassadorFeedback(user.uid,feedback)
        setFeedback("Your feedback submitted succesfully")
    }

    return(<div className="feedback">
<h2 className="heading feedback-heading"><img src={feedbackImg} alt="img"/> Feedback</h2>
<div className="db-elements">
    <p>We'd love to know your thoughts</p>
    <div>
        <textarea 
        name="feedback"
        placeholder="Enter your message"
        className="feedback-txt" 
        onChange={handleChange}
        value={feedback}
        />
        <button className='form-button' onClick={submitFeedback}>Submit</button>
      </div>

</div>
    </div>)
}
export{Feedback}