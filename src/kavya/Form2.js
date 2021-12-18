import React, { useState } from 'react'
import './Form2.css'
import face from './face2.png'

const Form2 = () => {
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
            <div className="form-container">
                <form action="" className='form'>
                    <div className="form-face">
                        <img src={face} alt="face-image" className='m-icon'/>
                    </div>
                    <div className="field">
                        <label className='label'>Name</label>
                        <input className='input' type="text" name='name' placeholder='Enter your name' value={ formValues.username} onChange={handleChange}/>
                    </div>
                    <div className="field">
                        <label className='label'>College</label>
                        <input className='input' type="text" name='college' placeholder='Enter your college' value={ formValues.college} onChange={handleChange}/>
                    </div>
                    <div className="field">
                        <label className='label'>Branch</label>
                        <input className='input' type="text" name='Branch' placeholder='Enter your branch' value={ formValues.branch} onChange={handleChange}/>
                    </div>
                    <div className="field">
                        <label className='label'>Year</label>
                        <input className='input' type="text" name='Year' placeholder='Slelect your year' value={ formValues.year} onChange={handleChange}/>
                    </div>
                    <div className="field">
                        <label className='label'>Have you been a campus ambassador before?</label>
                        <input className='input' type="text" name='yes_no' placeholder='Yes/No' value={ formValues.yes_no} onChange={handleChange}/>
                    </div>
                    <div className="field">
                        <label className='label'  >Email</label>
                        <input className='input' type="email" name='email' placeholder='Enter your email'  value={ formValues.email} onChange={handleChange}/>
                    </div>
                    <div className="field">
                        <label className='label'>Whatsapp No.</label>
                        <input className='input' type="text" name='number' placeholder='Enter your whatsapp no.' value={ formValues.number} onChange={handleChange}/>
                    </div>
                    <button className='form-button'>Register</button>
                </form>
            </div>
        </>
    )
}

export default Form2