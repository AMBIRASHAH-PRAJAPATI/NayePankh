import React from 'react'
import { Link, useNavigate  } from 'react-router-dom';
import google from '../assets/google.svg'
import github from '../assets/github.svg'

export default function Signup() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [name, setName] = React.useState('');
  // const { signup, googlelogin } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e)=> {
    // e.preventDefault();
    // try {
    //   await signup(email, password);
    //   navigate('/signinsec');
    // } catch (error) {
    //   console.log(error);
    // }
  }
  const handlegooglelogin = async (e)=> {
    // e.preventDefault();
    // try {
    //   await googlelogin();
    //   navigate('/signinsec');  ///change at last
    // } catch (error) {
    //   console.log(error);
    // }
  }

  return (
    <div id='signuppage'>
    <h2>Hello!</h2>
    <p><span>create Your Account</span></p>

    <form action="" className="login-form" onSubmit={handleSubmit}>
    <input type="text" placeholder=' First Name' onChange={(e) => setName(e.target.value)}/>
    <input type="text" placeholder='Last Name' />
    <input type="text" placeholder='Email-Id' onChange={(e) => setEmail(e.target.value)}/>
    <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
    <input type="password" placeholder='Confirm Password' />
    <button id="signupbtn" type='submit'>Login</button>
    <p>OR</p>
    <div className='otherlogsinbtn'>
    <button onClick={handlegooglelogin }>Login with Google <img src={google} alt="G" /></button>
    <button>Login with Github <img src={github} alt="Git" /></button>
    </div>
    </form>
    <p>Already have an account? <Link to="/login">LOGIN</Link></p>
    </div>
  )
}