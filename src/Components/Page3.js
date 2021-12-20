import React from 'react'
import poly from "./images/polygon.png"
import p_1 from "./images/prize-1.png"
import p_2 from "./images/prize-2.png"
import p_3 from "./images/prize-3.png"
import rectangle from "./images/grad-rectangle.png"

const Page3 = () => {
    return (
           
    <div className="page-3 row">
        <div>
             <div className="polygon">
      <img src={poly} alt="poly-i" className='poly-i'/>
      <p className='text clash-sb'>Benefits</p>

      </div>
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
        <div className="other-info-content">
        <div className="c-1">
          <p className='rank clash-m'>4th & 5th</p>
          <p className='money clash-sb'>1000</p>
        </div>
        <div className="c-2">
          <p className='rank clash-m'>6th to 15th</p>
          <p className='money clash-sb'>500</p>
        </div>
        <div className="c-3">
          <p className='rank clash-m'>16th to 50th</p>
          <p className='money clash-sb'>Certificates</p>
        </div>
        </div>
        <div className="content-info-desc-page-3">
          <p className='desc inter-r'>Special certificate for top 20 people</p>
          <p className='desc inter-r'>Certificate for those who completed a certain tier (% of work)</p>
          <p className='desc inter-r'>Extra benefits for excellence in work (Awarded by Tathva PRC)</p>
        </div>
      </div>
      </div>
    </div>
        
    )
}

export{Page3}