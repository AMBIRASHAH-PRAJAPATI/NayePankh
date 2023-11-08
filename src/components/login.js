import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import google from '../assets/google.svg'
import github from '../assets/github.svg'
// import { useUserAuth } from '../context/UserAuthcontext';

export default function Login() {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  // const [name, setName] = React.useState('');
  // const { login , googlelogin} = useUserAuth();
  // const navigate = useNavigate();

  const handleSubmit = async (e)=> {
    // e.preventDefault();
    // try {
    //   await login(email, password);
    //   navigate('/signinsec');  ///change at last
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const handlegooglelogin = async (e)=> {
    e.preventDefault();
    // try {
    //   await googlelogin();
    //   navigate('/signinsec');  ///change at last
    // } catch (error) {
    //   console.log(error);
    // }
  }


  return (
    <div id='loginpage'>
    <h2>Welcome Again!</h2>
    <p><span>Login To Your Account</span></p>
    <form onSubmit={handleSubmit} className="login-form">
    <input type="text" placeholder='Email-Id' onChange={ (e) => {setEmail(e.target.value)} }/>
    <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
    <button id="loginbtn" onClick={handleSubmit}>Login</button>
    <p>OR</p>
    <div className='otherlogsinbtn'>
    <button onClick={handlegooglelogin}>Login with Google <img src={google} alt="G" /></button>
    <button>Login with Github <img src={github} alt="Git" /></button>
    </div>
    </form>
    <p>Don't have an account?<Link to="signUp">SIGN UP</Link></p>
    </div>
  )
}
