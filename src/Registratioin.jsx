import React from 'react'
import { useState } from 'react'

export default function Registratioin() {

    const d= [
    {
        id:"1",
        name:"india"
    },
    {
        id:"2",
        name:"canada"
    },
    {
        id:"3",
        name:"usa"
    },

]
    const [form,setform] = useState({
        firstName : "",
        lastName : "",
        Address : "",
        isTerm: false,
        gender : "",
        country: ""
    })

   

    const handlelInput = (e)=>{

        if(e.target.type === "checkbox")
        {
            setform({...form,[e.target.name]:e.target.checked})
        }
        else
        {
        setform({...form,[e.target.name]:e.target.value})
        }
    }

   
    
    const handleForm = (e)=>{
        e.preventDefault();
        console.log(form);

    }

  return (
    <form onSubmit={handleForm}>
        <input type="text"  autoComplete='off' name='firstName' onChange={handlelInput} />
        <input type="text"  autoComplete='off' name='lastName'   onChange={handlelInput}/>
        <textarea name="Address"   autoComplete='off' onChange={handlelInput}/>
        <input type='checkbox' name="isTerm" onChange={handlelInput}/>
        
       male <input type='radio' name="gender" onChange={handlelInput} value="male"/>
       fmale <input type='radio' name="gender" onChange={handlelInput} value="fmale"/>

            <select name="country" onChange={handlelInput}>
                {
                    d.map((v)=>{
                        return (<option value={v.id}>{v.name}</option>)
                    })
                }

            </select>
        
        <input type='submit' value="save"/>
    </form>
  )
}
