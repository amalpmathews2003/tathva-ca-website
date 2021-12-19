import React, { useState } from 'react'
import face from './images/face2.png'
import Bg from "./images/db-bg.png"
import { Nav } from './Nav'
import { Footer } from './Footer'


const Register = () => {
    const initialValues = { name: '',college:'', email: '', number: '',year:'', branch:'',yes_no:''};
    const [formValues, setFormValues] = useState(initialValues);

    const handleChange = (e) =>{
        // console.log(e.target);
        const { name, value} = e.target;
        setFormValues({...formValues, [name]:value });
        console.log(formValues);
    }

    return (
        <>
        <Nav/>
        <div ><img src={Bg} alt-="bg" className="db-bg"/></div>
            <div className="form2-container">           


                <form action="" className='form2'>
                    <div className="form-face">
                        <img src={face} alt="face-image" className='m-icon'/>
                    </div>
                    <div className="field-form-2">
                        <label className='label-form-2'>Name</label>
                        <input className='input-form-2' type="text" name='name' placeholder='Enter your name' value={ formValues.username} onChange={handleChange}/>
                    </div>
                    <div className="field-form-2">
                        <label className='label-form-2'>College</label>
                        <input className='input-form-2' type="text" name='college' placeholder='Enter your college' value={ formValues.college} onChange={handleChange}/>
                    </div>
                    <div className="field-form-2">
                        <label className='label-form-2'>Branch</label>
                        <input className='input-form-2' type="text" name='Branch' placeholder='Enter your branch' value={ formValues.branch} onChange={handleChange}/>
                    </div>
                    <div className="field-form-2">
                        <label className='label-form-2'>Year</label>
                        <input className='input-form-2' type="text" name='Year' placeholder='Slelect your year' value={ formValues.year} onChange={handleChange}/>
                    </div>
                    <div className="field-form-2">
                        <label className='label-form-2'>Have you been a campus ambassador before?</label>
                        <input className='input-form-2' type="text" name='yes_no' placeholder='Yes/No' value={ formValues.yes_no} onChange={handleChange}/>
                    </div>
                    <div className="field-form-2">
                        <label className='label-form-2'  >Email</label>
                        <input className='input-form-2' type="email" name='email' placeholder='Enter your email'  value={ formValues.email} onChange={handleChange}/>
                    </div>
                    <div className="field">
                        <label className='label-form-2'>Whatsapp No.</label>
                        <input className='input' type="text" name='number' placeholder='Enter your whatsapp no.' value={ formValues.number} onChange={handleChange}/>
                    </div>
                    <button className='form2-button'>Register</button>
                </form>
            </div>
            <Footer/>
        </>
    )
}

export{Register}