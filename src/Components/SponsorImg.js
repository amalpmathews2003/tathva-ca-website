import React from "react";

function SponsorImg(props){
    return(
        <img  className="sponsor-img dim"src={`sponsors/${props.img}`} alt={props.alt}/>
    )
}
export {SponsorImg}