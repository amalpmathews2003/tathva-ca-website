import React from 'react'
import {cardData} from './Data'
import {Card}from './Card'

const Page2 = () => {
    return (
        <>
        <div className="page-2">
          <div className="">
            <h2 className='clash-sb page-2-h' >What you should do</h2>
          </div>
          <div className="container row page-2-cards">
          {cardData.map((item) =>(
            <Card key={item.id} img={`./images/${item.img}`} title={item.title} info={item.info} />
            ))}
          </div>  
        </div>
        </>
    )
}

export{Page2}