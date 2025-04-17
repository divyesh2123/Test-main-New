import React from 'react'
import { useFormik } from 'formik';

export default function MuiExample() {

    const formik = useFormik({
        initialValues : {
            firstName : "",
            lastName : ""
        },
        onSubmit: (values) => {
            
            console.log(values);
          },
    })
  return (
    <div>
         <form onSubmit={formik.handleSubmit}>

                <input type="text"  name="firstName"    
                onChange={formik.handleChange}/>

                <input type="text"  name="lastName"   
                 onChange={formik.handleChange}/>

            <input type='submit' value="Save"/>
         </form>


    </div>
  )
}
