import React from "react"
import feedbackImg from "./images/feedback.png"


function Feedback(){
    return(<div className="feedback">
<h2 className="heading feedback-heading"><img src={feedbackImg} alt="img"/> Feedback</h2>
<div className="db-elements">
    <p>We'd love to know your thoughts</p>
    <div>
        <textarea 
        name="feedback"
        placeholder="Enter your message"
        className="feedback-txt" 
        />
        <button className='form-button'>Submit</button>
      </div>

</div>
    </div>)
}
export{Feedback}