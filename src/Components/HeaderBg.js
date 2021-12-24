import hbg from './images/db-bg.png'

import React from 'react'

const HeaderBg = () => {
    return (
        <>
          <div className="hbg-container">
            <img src={hbg} alt="Header-Background" className='hbg'/>
          </div>  
        </>
    )
}

export default HeaderBg
