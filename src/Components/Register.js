import React, { useState } from 'react'
import face from './images/face2.png'
import Bg from "./images/db-bg.png"
import { Nav } from './Nav'
import { Footer } from './Footer'
import { useNavigate } from 'react-router-dom'
import { useUserContext } from './userContext'
import addAmbassador from './registerUserFirebase'

const Register = () => {

    const {user}=useUserContext()
    const initialValues = { name: '',college:'',uid:user.uid, email: '', phone: '',year:'', branch:'',yes_no:''};
    const [formValues, setFormValues] = useState(initialValues);

    const handleChange = (e) =>{
        // console.log(e.target);
        const { name, value} = e.target;
        setFormValues({...formValues, [name]:value });
    }
    let navigate  = useNavigate();

    const RedirectToDashboard = async(e) =>{ 
        addAmbassador(formValues)
        e.preventDefault();
        navigate('/Dashboard/Referals')
    }

    return (
        <>
        {/* <Nav/> */}
        {/* <div ><img src={Bg} alt-="bg" className="db-bg"/></div> */}
            <div className="form2-container">           


                <form action="" className='form2'>
                    <div className="form-face">
                        <img src={user.photoUrl} alt="face-image" className='m-register-icon'/>
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
                        <input className='input-form-2' type="text" name='branch' placeholder='Enter your branch' value={ formValues.branch} onChange={handleChange}/>
                    </div>
                    <div className="field-form-2">
                        <label className='label-form-2'>Year</label>
                        <input className='input-form-2' type="text" name='year' placeholder='Slelect your year' value={ formValues.year} onChange={handleChange}/>
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
                        <input className='input' type="text" name='phone' placeholder='Enter your whatsapp no.' value={ formValues.number} onChange={handleChange}/>
                    </div>
                    <button className='form2-button' onClick={RedirectToDashboard} >Register</button>
                </form>
            </div>
            {/* <Footer/> */}
        </>
    )
}

export{Register}