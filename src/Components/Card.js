import React from 'react'

const Card = ({img,title,info}) => {
    return (
        
          <div className="card ">
              <img src={img} alt="img" />
              <p className='clash-sb'>{title}</p>
              <p className='clash-r'>{info}</p>
          </div>  
        
    )
}

export{Card}