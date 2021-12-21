import React from 'react'
import vic from './images/victory.png'


const RUReady = () => {
    return (
        <>
         <div className="r-u-ready row rounded media">
             <div className="row-c">
                 <div className="vic-icon-container">
                     <img src={vic} alt="victory" className='vic-icon'/>
                 </div>
                 <div className="text-container">
                    <h2 className='clash-b ruready-h2'>Are you ready ?</h2>
                    <p className='inter-r dim'>To be a part of the biggest tech<br/> fest in South India</p>
                 </div>
                 </div>
                 <div className="btn-container">
                    <button className='btn-pri inter-r '>Sign Up</button>
                 </div>
            
         </div>   
        </>
    )
}

export{RUReady}
