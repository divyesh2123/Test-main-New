import React, { useEffect, useState } from 'react'

export default function Product() {

    console.log("this is product")
      const [d,setData]= useState([])
      const [count,setcount]= useState(0);


        useEffect(()=>{

                fetch("https://fakestoreapi.com/products").then(y=>y.json())
                .then(y=>{
                setData(y)
                })

        },[])

        //
        
        const inc = ()=>{
            setcount(count+1);
        }


  return (
    <div>{
        d.map((c)=>{
            return (<div>{c.title}</div>)
        })
    }
        <button onClick={inc}>+</button>
    </div>
  )
}
