import React, { useState } from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import google from '../assets/google.svg'
import github from '../assets/github.svg'
import TextField from './TextField';
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';
import {auth} from '../Firebase';
import { useNavigate } from 'react-router-dom';

export default function Signup({setIsLoginOpen}) {

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
  const [sebmitdisabled, setsebmitdisabled]= useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e)=> {
    // e.preventDefault();
    // try {
    //   await signup(email, password);
    //   navigate('/signinsec');
    // } catch (error) {
    //   console.log(error);
    // }
    setsebmitdisabled(true);
    createUserWithEmailAndPassword(auth, validate.email, validate.password)
    .then(async(res)=>{
      setsebmitdisabled(false);
      const user = res.user;

      await updateProfile(user, {
        displayName: validate.firstName + " " + validate.lastName,
      });
      
      navigate("/");

    }).catch((err)=>{
      setsebmitdisabled(false);
      console.log(err.message);
      setexisterror(err.message);
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
    <div id='signuppage'>
    <h2>Hello!</h2>
    <p><span>create Your Account</span></p>

    <Formik
    initialValues={{
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    }}
    validationSchema={validate}
    onSubmit={handleSubmit}
  >
  <Form action="" className="login-form">
    <TextField placeholder="First Name" name="firstName" type="text"/>
    <TextField placeholder="Last Name" name="lastName" type="text"/>
    <TextField placeholder="Email" name="email" type="email"/>
    <TextField placeholder="Password" name="password" type="password"/>
    <TextField placeholder="Confirm Password" name="confirmPassword" type="password"/>
    <button id="signupbtn" type='submit' disabled={sebmitdisabled}>SignUp</button>
    <b className='text-danger'>{existerror}</b>
    </Form>
    </Formik>
    <p>OR</p>
    <div className='otherlogsinbtn'>
    <button onClick={handlegooglelogin }>Sign Up with Google <img src={google} alt="G" /></button>
    <button>Login with Github <img src={github} alt="Git" /></button>
    </div>
    <p className='my-4'>Already have an account? <span className='switcglog' onClick={() => setIsLoginOpen(true)}>Login</span> </p>
    </div>
  )
}