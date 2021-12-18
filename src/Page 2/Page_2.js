import React from 'react'
import {data} from '../Components/data'
import Rectangle from '../Components/Rectangle'
import './Page_2.css'

const Page_2 = () => {
    return (
        <>
        <div className="page-2">
          <div className="title-page-2">
            <p className='clash-title' >What you should do</p>
          </div>
          <div className="card-container">
          {data.map((item) =>(
            <Rectangle key={item.id} img={item.img} title={item.title} info={item.info} />
            ))}
          </div>  
        </div>
        </>
    )
}

export default Page_2
