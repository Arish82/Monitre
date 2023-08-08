import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import transaction from '../assets/transaction.jpg'
import '../Registration/register.css'
import Header from '../../components/Header'
// import ActivityCard from "../../components/ActivityCard"
import "../../assets/scss/trasaction.scss"

const Registration = (props) => {
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
        <>
            <div className="main-containers"  >
                <Header />
                <div className='transaction-form' >
                    <div className="transaction-card" style={{"--delay": ".4s"}}>
                        <h1 className="title">Login</h1>
                        <form className='transaction-form-card' method="POST" autoComplete="off" >
                            <input
                                type="text"
                                name="email"
                                autoComplete='off'
                                placeholder='Email'
                                required
                                className='input-fields'
                                value={email}
                                onChange={(e)=>{setEmail(e.target.value)}}
                            />
                            <input
                                type="password"
                                name="password"
                                autoComplete='off'
                                placeholder='Password'
                                required
                                className='input-fields'
                                value={password}
                                onChange={e=>setPassword(e.target.value)}
                            />
                            <button type="submit" className='button offer-button' onClick={loginUser}>
                                Login
                            </button>
                        </form>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Registration