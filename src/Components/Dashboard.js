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
import {Link,Route, Routes} from "react-router-dom"
import { useEffect,useState } from "react"
import getAmbassador from "./getUserFirebase"
import { useUserContext } from "./userContext"
function Dashboard(){
    const [ambassador, setAmbassador] = useState({name:"",points:0})
    const {user}=useUserContext()
    useEffect(() => {
        getAmbassador("0DperUSRUqQp6EACy0d7jcc4sp82")
        .then(res=>{
            setAmbassador(res[0])
        })
    }, [])
    return(
       <div className="dashboard-container">
           {/* <Nav/> */}
           {/* <div ><img src={Bg} alt-="bg" className="db-bg"/></div> */}
        <div className="dashboard">
            <div className="side-nav">
                <div>
                      <img src={user.photoUrl}/>
                    <h3 className="ca-name inter-sb">{ambassador.name}</h3>
                    <p className="Total-points dim inter-r">{ambassador.points} Points</p>
                </div>
                <ul className="db-links dashboard-ul">
                   <a><Link to={`/Dashboard/Referals`}> <button className="inter-sb"id="Referals"><p> <img src={referalImg} alt="img"/> Referals</p></button></Link></a>
                   <a> <Link to={`/Dashboard/Posters`}><button  className="inter-sb" id="Posters"><p><img src={posterImg}/> Posters</p></button></Link> </a>
                   <a> <Link  to={`/Dashboard/Feedback`}><button  className="inter-sb" id="Feedback"><p> <img src={feedbackImg} alt="img"/>  Feedback</p></button></Link></a>
                    
                </ul>
            </div>

            <div className="main-area">

  <Routes>
      <Route path="/Referals" element={<Referals/>}/>
      <Route path="/Posters" element={<Posters/>}/>
      <Route path="/Feedback" element={<Feedback/>}/>
  </Routes>
</div>

        </div>
        {/* <Footer/> */}
        </div>
        
    )

}
export{Dashboard}