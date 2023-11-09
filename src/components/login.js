import React, { useState } from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextField from './TextField';
import google from '../assets/google.svg'
import github from '../assets/github.svg'
import {updateProfile, signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../Firebase';
import { useNavigate } from 'react-router-dom';
// import { useUserAuth } from '../context/UserAuthcontext';

export default function Login( {setIsLoginOpen}) {

  const validate = Yup.object({
    firstName: Yup.string()
    .max(20, 'Must be 20 characters or less')
    .required('Required'),
    lastName: Yup.string()
    .max(20, 'Must be 20 characters or less')
    .required('Required'),
    email: Yup.string()
    .email('Email is invalid')
    .required('Email is required'),
    password: Yup.string()
    .min(6, 'Password must be at least 6 charaters')
    .required('Password is required'),
    confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Password must match')
    .required('Confirm password is required'),
  });

  const [existerror, setexisterror]= useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e)=> {

    // if(email && password)
    // {
      // e.preventDefault();
      // try {
      //   await login(email, password);
      //   navigate('/signinsec');  ///change at last
      // } catch (error) {
      //   console.log(error);
      // }
    // }
    signInWithEmailAndPassword(auth, validate.email, validate.password)
    .then(async(res)=>{
      const user = res.user;
      await updateProfile(user, {
        displayName: validate.firstName + " " + validate.lastName,
      });
      navigate("/");
    }).catch((err)=>{
      setexisterror(err.message)
      console.log(err.message);
    });
  };

  const handlegooglelogin = async (e)=> {
    // e.preventDefault();
    // try {
    //   await googlelogin();
    //   navigate('/');  ///change at last
    // } catch (error) {
    //   console.log(error);
    // }
  }


  return (
    <div id='loginpage'>
    <h2>Welcome Again!</h2>
    <p><span>Login To Your Account</span></p>
    <Formik
    initialValues={{
      email: '',
      password: '',
    }}
    validationSchema={validate}
    onSubmit={handleSubmit} 
  >
  <Form className="login-form">
  <TextField placeholder="Email" name="email" type="email"/>
  <TextField placeholder="Password" name="password" type="password"/>
  <button id="loginbtn" type='submit'>Login</button>
  <b className='text-danger'>{existerror}</b>
    </Form>
    </Formik>
    <p>OR</p>
    <div className='otherlogsinbtn'>
    <button onClick={handlegooglelogin}>Login with Google <img src={google} alt="G" /></button>
    <button>Login with Github <img src={github} alt="Git" /></button>
    </div>
    <p className='my-4'>Don't have an account? <span className='switcglog' onClick={() => setIsLoginOpen(false)}>Sign Up</span></p>
    </div>
  )
}
