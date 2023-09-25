import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


function HomePage() {
    const navigate=useNavigate()
    const [data,setData]=useState('')


    const hanleLogout=()=>{
        navigate("/signin")
    }

    const artdata=()=>{
        axios({
            url:"https://status.digitalocean.com/api/v2/summary.json",
            method: "GET"
        })
        .then((res)=>{

            setData(res.data)

        }
        )
        .catch((error)=>{
            console.log(error)
        },)

    }

    useEffect(()=>{

        artdata()
        
    },[])

    console.log(data)
    
  return (
    <div>
        <h1>Welcome to home page</h1>
        <button onClick={hanleLogout}>Logout</button>
        {data?.pages?.map((item)=>(
            <>
            {item?.page?.id}
            </>
        ))}
    </div>
  )
}

export default HomePage