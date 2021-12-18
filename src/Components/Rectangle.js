import React from 'react'
import './Rectangle.css'

const Rectangle = ({img,title,info}) => {
    return (
        <>
          <div className="card-bg"></div>
          <div className="card">
              <img src={img} alt="img" />
              <p className='clash'>{title}</p>
              <p className='clash'>{info}</p>
          </div>  
        </>
    )
}

export default Rectangle