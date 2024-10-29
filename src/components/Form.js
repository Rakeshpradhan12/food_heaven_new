
// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Login = () => (
  <div>
    <h1 style={{color:"green"}}>WellCome to Authentication Page</h1>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <h2 style={{color:"red"}}>User Authentication</h2>
          <Field type="email" name="email" className="email"/>
          <ErrorMessage name="email" component="div" />
          <Field type="password" name="password" className='password'/>
          <ErrorMessage name="password" component="div"/>
          <button type="submit" disabled={isSubmitting} style={{width :"100px",borderRadius:"4px",backgroundColor:"yellow",height:"30px"}}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Login;