import React from 'react'
 import {Formik,Form,Field}  from 'formik'
export default function ExampleWithFormik() {

    const myhobbies = ["cricket","book","guitar","xyz"];
  return (
        <Formik initialValues={{
            firstName :"",
            lastName : "",
            middleName : "",
            hobbies: [],
            acceptTerm: false,
            colors: ""
        }}
        
        onSubmit={(values)=>
        {
            console.log(values);

        }}
        
        >

            <Form>

                <Field name="firstName"></Field>
                <Field name="middleName"></Field>
                <Field name="lastName"></Field>
                <label>
                    Please read acceptms
                <Field name="acceptTerm" type="checkbox"></Field>
                </label>

        <div role="group" aria-labelledby="checkbox-group">
            {
                myhobbies.map((a,b)=><>

                    <label>
                    <Field type="checkbox" name="hobbies" 
                    value={a} />
                    {a}
                  </label>

                  </>)

            }


          
           
          </div>

          <Field name="colors" as="select" className="my-select">
   <option value="red">Red</option>
   <option value="green">Green</option>
   <option value="blue">Blue</option>
 </Field>


                <input type="submit"/>
             
            </Form>


        </Formik>
  )
}
