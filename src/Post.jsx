import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Post() {
    const [data,setData]=useState([]);

    useEffect(()=>
    {
        axios.get("posts").then(y=>{
            setData(y);

            console.log(y);
        });


    },[])
  return (
    <div>Post</div>
  )
}
