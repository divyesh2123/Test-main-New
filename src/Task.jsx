import React, { useEffect, useState } from 'react'
import abc from 'axios';
export default function Task() {

    const [data,setData]= useState([]);

    useEffect(()=>
    {
        abc.get("https://jsonplaceholder.typicode.com/todos")
        .then(y=>{
           
            setData(y.data);
           
            /*
                200->suc
                400->error
                500-> internal server error
                404-> not found
            
            */
        })

    },[]);

   

  return (
    <div>
        {
            data.map((v,index)=>{
             return (<div>{v.title}</div>)
            })
        }
    </div>
  )
}
