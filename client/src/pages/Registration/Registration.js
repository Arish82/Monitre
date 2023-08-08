import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import transaction from '../assets/transaction.jpg'
import './register.css'
import Header from '../../components/Header'
// import ActivityCard from "../../components/ActivityCard"
import "../../assets/scss/trasaction.scss"

const Registration = (props) => {
    const [user,setUser]=useState({name:"", phone:"", email:"", password:""});

    const navigate=useNavigate();
    const postData=async(e)=>{
        e.preventDefault();

        const {name,phone, email, password}=user;

        const res=await fetch("/register",{
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name,phone, email, password})
        })

        const data=res.json();
        if(res.status === 422 | !data){
            window.alert("Invalid registration")
        }
        else{
            window.alert("Registration successful")

            navigate("/login")
        }
    }

    return (
        <>
            <div className="main-containers"  >
                <Header />
                <div className='transaction-form' >
                    <div className="transaction-card" style={{"--delay": ".4s"}}>
                        <h1 className="title">Registration</h1>
                        <form className='transaction-form-card' method="POST" autoComplete="off" >
                            <input
                                type="text"
                                name="name"
                                autoComplete='off'
                                placeholder='Full Name'
                                required
                                className='input-fields'
                                value={user.name}
                                onChange={e=>setUser({...user, name: e.target.value})}
                            />
                            <input
                                type="number"
                                name="phone"
                                autoComplete='off'
                                placeholder='Phone Number'
                                required
                                className='input-fields'
                                value={user.phone}
                                onChange={e=>setUser({...user, phone: e.target.value})}
                            />
                            <input
                                type="text"
                                name="email"
                                autoComplete='off'
                                placeholder='Email'
                                required
                                className='input-fields'
                                value={user.email}
                                onChange={e=>setUser({...user, email: e.target.value})}
                            />
                            <input
                                type="password"
                                name="password"
                                autoComplete='off'
                                placeholder='Password'
                                required
                                className='input-fields'
                                value={user.password}
                                onChange={e=>setUser({...user, password: e.target.value})}
                            />
                            <button type="submit" className='button offer-button' onClick={postData}>
                                Register
                            </button>
                        </form>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Registration