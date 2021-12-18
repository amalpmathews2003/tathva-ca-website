import React from "react"
function Poster(props){
return(
    <div className="poster-card">
        <img className="poster-img" src={props.img} />    
        <div>
            <h3 className="inter-sb">{props.heading}</h3>
            <p className="inter-r dim">{props.writeup}</p>
        </div>
        </div>
)
}
export{Poster}