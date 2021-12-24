import React from "react"
import {SponsorImg} from "./SponsorImg"
import { SponsorData } from "./Data"


 export default function Sponsors(){
    const Sponsorimg=SponsorData.map((data) =>
    <SponsorImg img={data.img} alt={data.alt}/>
    )
    return( 
    <div className=" sponsors row">
        {Sponsorimg}
    </div>
      
    )
}

 
