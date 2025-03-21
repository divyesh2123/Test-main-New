import React, { useState } from 'react'

export default function Counter() {

    
    console.log("d");
    const [counter,ab]=useState(0);
   
    const inc = ()=>{

        ab(counter+1);
    }

    const dec = ()=>{
        ab(counter-1);
    }
  return (
    <div>{counter}
    
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>
    </div>
  )
}
