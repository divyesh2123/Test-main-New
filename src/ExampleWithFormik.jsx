import React from 'react'
 import {Formik,Form,Field,ErrorMessage}  from 'formik';
 import * as Yup from 'yup';
export default function ExampleWithFormik() {

    const myhobbies = ["cricket","book","guitar","xyz"];

    const SignupSchema = Yup.object().shape({
        firstName: Yup.string().matches("","This is invalid")
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required'),
        lastName: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required')
        
      });

    const validationInfo = (data) =>{

        let error= {};

        if(!data.firstName)
        {
            error["firstName"] = "please enter firstName"
        }

       else if(data.firstName.length <2)
            {
                error["firstName"] = "please enter firstName"
            }

        
            if(!data.lastName)
            {
                 error["lastName"] = "please enter firstName"
            }

        return error;


    }

  return (
        <Formik initialValues={{
            firstName :"",
            lastName : "",
            middleName : "",
            hobbies: [],
            acceptTerm: false,
            colors: ""
        }}

        validate={validationInfo}
        
        onSubmit={(values)=>
        {
            console.log(values);

        }}
        
        >

            <Form>

                <Field name="firstName"></Field>
                    <ErrorMessage name="firstName"></ErrorMessage>
                <Field name="middleName"></Field>
              
                <Field name="lastName"></Field>
                <ErrorMessage name="lastName"></ErrorMessage>
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
