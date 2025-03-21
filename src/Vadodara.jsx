import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export default function Vadodara() 
{
    const [data,setData]= useState([]);
    
     fetch("https://jsonplaceholder.typicode.com/posts")
     .then(y=>y.json())
     .then()
  return (
    <div>Vadodara</div>
  )
}
