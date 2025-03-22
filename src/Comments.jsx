import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Comment from './Comment';

export default function Comments() 
{
    const [data,setData]= useState([]);

    useEffect(()=>
    {
        axios.get("comments")
        .then(y=>{
            console.log(y);
            setData(y.data);
        })

    },[])
  return (
    <table>
    {
      data.map((value,index)=>{

        return (<Comment data={value} id={index}></Comment>)

      })

    }</table>
  )
}
