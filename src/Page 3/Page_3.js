import React from 'react'
import poly from "./polygon.png"
import p_1 from "./prize-1.png"
import p_2 from "./prize-2.png"
import p_3 from "./prize-3.png"
import rectangle from "./grad-rectangle.png"
import './Page_3.css'

const Page_3 = () => {
    return (
        <>
            {/* <link href="https://api.fontshare.com/css?f[]=clash-display@200,300,400&display=swap" rel="stylesheet"></link> */}
   
    <div className="page-3">
    <div className="box">
    <p className='text'>Benefits</p>
    </div>
      <div className="polygon">
      <img src={poly} alt="poly-i" className='poly-i'/>
      </div>
      <div className="page-3-info">
      <div className="prize-container">

      <div className="prize-upper">
        <img src={p_1} alt="prize-1" className='prize-1' />
        <img src={p_2} alt="prize-2" className='prize-2'/>
      </div>
      <div className="prize-lower">
        <img src={p_3} alt="prize-3" className='prize-3'/>
      </div>
      </div>
      <div className="other-info-page-3">
        {/* <img src={rectangle} alt="grad-reactangle" className='rectangle' /> */}
        <div className="other-info-content">
        <div className="c-1">
          <p className='rank'>4th & 5th</p>
          <p className='money'>1000</p>
        </div>
        <div className="c-2">
          <p className='rank'>6th to 15th</p>
          <p className='money'>500</p>
        </div>
        <div className="c-3">
          <p className='rank'>16th to 50th</p>
          <p className='money'>Certificates</p>
        </div>
        </div>
        <div className="content-info-desc-page-3">
          <p className='desc'>Special certificate for top 20 people</p> 
          <p className='desc'>Certificate for those who completed a certain tier (% of work)</p>
          <p className='desc'>Extra benefits for excellence in work (Awarded by Tathva PRC)</p>
        </div>
      </div>
      </div>
    </div>
        </>
    )
}

export default Page_3