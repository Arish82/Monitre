import React, { useState } from 'react'
import login from '../assets/login.jpg'
import './register.css'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate=useNavigate();

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const loginUser=async(e)=>{
        e.preventDefault();

        const res=await fetch('/login',{
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({email,password})
        })

        const data=res.json();
        if(res.status === 400 || !data){
            window.alert('Invalid credentials')
        }
        else{
            window.alert('Login successful')
            navigate('/')
        }
    }

    return (
        <div className='main-container'>
            <div className='sub-container'>
                <div className='img-container'>
                    <img src={login} alt="login" className='image' />
                </div>
                <div className='main-form-container'>
                    <div className="form-heading">Login Here</div>
                    <form method="POST" className='form-container' autoComplete='off'>
                        <input
                            type="email"
                            name="email"
                            autoComplete="new-password"
                            placeholder='Email Address'
                            required
                            value={email}
                            onChange={(e)=>{setEmail(e.target.value)}}
                            className='input-container'
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder='Password'
                            required
                            value={password}
                            onChange={(e)=>{setPassword(e.target.value)}}
                            className='input-container'
                        />
                        <button type="submit" className='submit' onClick={loginUser}>Login</button>
                        <div className='direct-login'>Don't have an account? <Link to='/register' className='direct-login-button'>Sign Up</Link></div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login