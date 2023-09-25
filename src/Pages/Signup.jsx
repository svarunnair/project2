import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Signup() {
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState("")
    const userData = JSON.parse(localStorage.getItem('cridential'))||[];
    const navigate=useNavigate()

    const handleName=(e)=>{
        let value=e.target.value
        setName(value)
    }
    const handleEmail=(e)=>{
        let value=e.target.value
        setEmail(value)
    }
    const handlPassword=(e)=>{
        let value=e.target.value
        setPassword(value)
    }
    const handleSubmit=()=>{
        let data2={
            name:name,
            email:email,
            password:password
        }
        userData.push(data2)
        localStorage.setItem('cridential', JSON.stringify(userData))
        navigate("/signin")
    }

    const handleClick=()=>{
        navigate("/signin")
    }
    


  return (
    <div>
        <h1>Sign up</h1>

        <input onChange={handleName} placeholder='Name'/><br/>
        <input onChange={handleEmail} placeholder='Email Id'/><br/>
        <input onChange={handlPassword} placeholder='Password'/><br/>
        <button onClick={handleSubmit}>Submit</button><br/>
        <h6 onClick={handleClick}>for sign in</h6>

    </div>
  )
}

export default Signup



















