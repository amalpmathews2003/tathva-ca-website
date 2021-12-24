import React , {useState} from "react"
import guideToggle from "./images/guide-toggle.png"
import {PosterData} from "./Data"
import {Poster} from "./poster"
import posterImg from "./images/posters.png"
const PosterCard = PosterData.map(item=>{
    return(<Poster heading={item.heading} writeup={item.writeup}/>)
})


function Posters(){
   const [show,setShow]=useState(false)
    return(
        <div className="posters">
      <h2 className="heading inter-sb"><img src={posterImg}/> Posters</h2>
        <div className="db-elements">
            <div className="row guide-tab"><h3 className="clash-sb">Guide</h3>
            <button className="guide-toggle" onClick={()=>setShow(!show)}><img src={guideToggle}/></button></div>
            {
                    show?<div className="guide">
                <div><h3 className="inter-sb">Whatsapp</h3>
                <p className="inter-r"> For every group shared to 10 points will be awarded. For every 5th group shared to, an additional 10 points is awarded. eg: 4 groups means 40 points and 5 groups means 60 points.
For every status put up atleast 10 points will be awarded. For every 50 views 10 points will be awarded and for every 150 views additional 10 points will be awarded. eg: If your status gets 30 views you will get 10 points, 50 views you will get 10 points, 100 views you will get 20 points and so on. 150 vies you will get 30 + 10 = 40 points. The maximum points of the above mentioned criteria is 220 points</p></div>
                <div><h3 className="inter-sb">Instagram</h3>
                <p className="inter-r">Instagam post will be awarded 100 points. For the points to be counted the post should stay up atleast 2 days. Sharing via instagram stories has the same point structure as WhatsApp status. The maximum will be 240 points for Instagram story</p></div>
                <div><h3 className="inter-sb">Facebook</h3>
                <p className="inter-r">Facebook post will be awarded 100 points. For the points to be counted the post should stay up for atleast 2 days.</p></div>
                <div><h3 className="inter-sb">Guidelines</h3>
                <p className="inter-r"> Create a Google Drive folder named [YOUR_NAME]. For each poster, upload the screenshots of the completed task to a folder within it named [YOUR_NAME]_[POSTER_NAME]. Submit the link to the main folder in the field below.</p></div>
                <div> 
            <form>
            <label>
                    <input type="text"  className="inter-r" name="drive link" placeholder="Enter Google Drive folder URL" />
            </label>
            <input className="btn-pri inter-sb" type="submit" value="Submit" />
            </form>
            </div>
            </div>:null
        }
              
            <div>
                {PosterCard}
            </div>
        </div>

        </div>
    )
}
export{Posters}