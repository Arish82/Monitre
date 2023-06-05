import React, { useState } from 'react'
import register from '../assets/register.jpg'
import './register.css'
import { Link, useNavigate } from 'react-router-dom';


const Register = () => {
    
    const navigate=useNavigate();

    const [user,setUser]=useState({name:"", phone:"", email:"", password:""});

    let name,value;

    const handleInputs=(e)=>{
        // console.log(e);
        name=e.target.name;
        value=e.target.value;

        setUser({...user,[name]:value});
    }

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
        <div className='main-container'>
            <div className='sub-container'>
                <div className='img-container'>
                    <img src={register} alt="register" className='image' />
                </div>
                <div className='main-form-container'>
                    <div className="form-heading">Register Here</div>
                    <form className='form-container' method="POST" autoComplete="off">
                        <input
                            type="string"
                            name="name"
                            autoComplete='new-password'
                            value={user.name}
                            onChange={handleInputs}
                            placeholder='Name'
                            required
                            className='input-container'
                        />
                        <input
                            type="Number"
                            name="phone"
                            value={user.phone}
                            onChange={handleInputs}
                            placeholder='Phone'
                            required
                            autoComplete='new-password'
                            className='input-container'
                        />
                        <input
                            type="email"
                            name="email"
                            value={user.email}
                            onChange={handleInputs}
                            placeholder='Email Address'
                            required
                            autoComplete='new-password'
                            className='input-container'
                        />
                        <input
                            type="password"
                            name="password"
                            value={user.password}
                            onChange={handleInputs}
                            placeholder='Password'
                            required
                            className='input-container'
                        />
                        <button type="submit" className='submit' onClick={postData}>Sign Up</button>
                        <div className='direct-login'>Already a member? <Link to='/login' className='direct-login-button'>Login</Link></div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register