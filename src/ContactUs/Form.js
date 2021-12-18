import React, { useState } from 'react'
import './Form.css'
import message from './message.png'
import hand from './hand.png'
import insta from './insta.png'
import facebook from './facebook.png'
import twitter from './insta.png'
import earth from './earth.png'
import phone from './phone.png'


const Form = () => {
    const initialValues = { username: '', email: '', message: ''};
    const [formValues, setFormValues] = useState(initialValues);

    const handleChange = (e) =>{
        // console.log(e.target);
        const { name, value} = e.target;
        setFormValues({...formValues, [name]:value });
        console.log(formValues);
    }

    return (
        <>
            <div className="form-container">
            <div className="info-left">
                <div className="git">
                <img src={hand} alt="" className='hand'/>
                    <h1>Get in touch</h1>
                    <div className="contact">
                        <div className="phone-container">
                            <img src={phone} alt="" />
                        </div>
                        <div className="contact-details"> 
                        <h2>John Doe</h2>
                        <p className='phone-no'>+91 12345 67890</p>
                    </div>
                    </div>
                    <div className="contact">
                    <div className="phone-container">
                    <img src={phone} alt="" />
                    </div>
                    <div className="contact-details"> 
                        <h2>John Doe</h2>
                        <p className='phone-no'>+91 12345 67890</p>
                    </div>
                    </div>
                    <div className="contact">
                    <div className="phone-container">
                    <img src={phone} alt="" />
                    </div>
                    <div className="contact-details"> 
                        <h2>Email</h2>
                        <p className='phone-no'>tathva@nitc.ac.in</p>
                    </div>
                    </div>
                </div>
                <div className="social">
                    <img src={earth} alt="" />
                    <h1>Social</h1>
                    <div className="s-media-container"> 
                    <div className="s-media">
                        <img src={insta} alt="" />
                    </div>
                    <div className="s-media">
                        <img src={facebook} alt="" />
                    </div>
                    <div className="s-media">
                        <img src={twitter} alt="" />
                    </div>
                    </div>
                </div>
            </div>
                <form action="" className='form'>
                    <div className="form-header">
                        <img src={message} alt="message-image" className='m-icon'/>
                        <h1 className='form-header-text'>Message</h1>
                    </div>
                    <div className="field"> 
                    <label className='label'>Name</label>
                    <input className='input' type="text" name='username' placeholder='Enter your name' value={ formValues.username} onChange={handleChange}/>
                    </div>
                    <div className="field"> 
                    <label className='label'  >Email</label>
                    <input className='input' type="email" name='email' placeholder='Enter your email' value={ formValues.email} onChange={handleChange}/>
                    </div>
                    <div className="field"> 
                    <label className='label'>Message</label>
                    <input className='m-input' type="text" name='message' placeholder='Enter your message' value={ formValues.message} onChange={handleChange}/>
                    </div>
                    <button className='form-button'>Submit</button>
                </form>
            </div>
        </>
    )
}

export default Form
