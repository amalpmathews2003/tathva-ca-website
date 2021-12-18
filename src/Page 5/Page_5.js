import React from 'react'
import vic from './victory.png'
import './Page_5.css'

const Page_5 = () => {
    return (
        <>
         <div className="page-5">
             <div className="container">
                 <div className="vic-icon-container">
                     <img src={vic} alt="victory" className='vic-icon'/>
                 </div>
                 <div className="text-container">
                    <p className='text-u'>Are you ready?</p>
                    <div className="text-l-container">
                        
                    <p className='text-l'>To be a part of the biggest tech fest in South India</p>
                    </div>
                 </div>
                 <div className="btn-container">
                    <button className='btn'>Sign Up</button>
                 </div>
             </div>
         </div>   
        </>
    )
}

export default Page_5
