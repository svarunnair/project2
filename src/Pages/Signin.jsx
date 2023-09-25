import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

function Signin() {
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState("")
    const userData = JSON.parse(localStorage.getItem('cridential'))
    const navigate=useNavigate()



  const handleEmail=(e)=>{
    let value=e.target.value
    setEmail(value)
}
const handlPassword=(e)=>{
    let value=e.target.value
    setPassword(value)
}
const handleSubmit=()=>{
  let flag=false
  for(let i=0;i<userData?.length;i++){
    if(userData[i].email===email&&userData[i].password===password){
      flag=true
    }
  }
  if(flag===true){
    navigate("/home")
  }
  else{
    alert("please sign up")
    navigate("/signup")
  }
}


  return (
    <div>
      <h1>Sign in</h1>
        <input onChange={handleEmail} placeholder='Email Id'/><br/>
        <input onChange={handlPassword} placeholder='Password'/><br/>
        <button onClick={handleSubmit}>Submit</button><br/>
    </div>
  )
}

export default Signin