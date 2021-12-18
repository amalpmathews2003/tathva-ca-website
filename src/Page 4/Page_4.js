import React from 'react'
import './Page_4.css'
import hexa from './Hexagon.png'

const Page_4 = () => {
    return (
        <>
        <div className="page-4">
        <div className="box-page-4">
        <p className='text'>Eligibility</p>
        </div>
        <div className="polygon-page-4">
      <img src={hexa} alt="poly-i" className='poly-i-page-4'/>
      </div>
        <div className="page-4-info">
        <div className="other-info-page-4">
        {/* <img src={rectangle} alt="grad-reactangle" className='rectangle' /> */}
        <div className="content-info-desc-page-4">
          <p className='desc-page-4'>Any student currently pursuing education in an established institute who wishes to participate in Tathva may apply.</p> 
          <p className='desc-page-4'>Applicants having good interpersonal and communication skills with previous experience will be given preference.</p>
        </div>
      </div>
      </div>  
        </div>
        </>
    )
}

export default Page_4
