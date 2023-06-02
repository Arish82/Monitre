import React from 'react'
import login from '../assets/login.jpg'
import './register.css'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='main-container'>
            <div className='sub-container'>
                <div className='img-container'>
                    <img src={login} alt="login" className='image' />
                </div>
                <div className='main-form-container'>
                    <div className="form-heading">Login Here</div>
                    <form className='form-container'>
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
                        <button type="submit" className='submit'>Login</button>
                        <div className='direct-login'>Don't have an account? <Link to='/register' className='direct-login-button'>Sign Up</Link></div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login