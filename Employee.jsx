import axios from 'axios'
import React from 'react'
import { useState } from 'react'

export default function Employee() {

    const [data,setData]= useState({
        "name":"",
        "avatar":""

    })

    const handleChange = (e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }

    const handleSubmit = (e)=>
    {
        e.preventDefault();

        axios.post("https://66fe248a69936930895731f9.mockapi.io/employee",data)
        .then(y=>{
            console.log(y.data);
        })

    }
  return (
    <form onSubmit={handleSubmit}>

        <input type='text' name="name" onChange={handleChange}/>
        <input type='text' name="avatar" onChange={handleChange}/>
        <input type='submit' value="save"/>
    </form>
  )
}
