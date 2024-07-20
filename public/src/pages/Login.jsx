import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
export default function Login() {
    const [values, setValues] = useState({
        email: "",
        password: "",
    });
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className='container'>
            <h2>Login Account</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input type='email' name='email' placeholder='email' onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })}></input>
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password' placeholder='password'></input>
                </div>
                <button type="submit">Submit</button>
            </form>
            <ToastContainer />
        </div>
    )
}
