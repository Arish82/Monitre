import React from 'react'
import register from '../assets/register.jpg'
import './register.css'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div className='main-container'>
            <div className='sub-container'>
                <div className='img-container'>
                    <img src={register} alt="register" className='image' />
                </div>
                <div className='main-form-container'>
                    <div className="form-heading">Register Here</div>
                    <form className='form-container'>
                        <input
                            type="string"
                            name="name"
                            placeholder='Name'
                            required
                            className='input-container'
                        />
                        <input
                            type="Number"
                            name="phone"
                            placeholder='Phone'
                            required
                            className='input-container'
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder='Email Address'
                            required
                            className='input-container'
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder='Password'
                            required
                            className='input-container'
                        />
                        <button type="submit" className='submit'>Sign Up</button>
                        <div className='direct-login'>Already a member? <Link to='/login' className='direct-login-button'>Login</Link></div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register