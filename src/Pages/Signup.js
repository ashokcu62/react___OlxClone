import React, { useState } from 'react';
// import {Link} from 'react-router-dom';
import Logo from '../olx-logo.png';
import './Signup.css';

export default function Signup() {
  const [userName,setUserName]=useState('')
  const [email,setEmail]=useState('')
  const[phone,setphone]=useState('')
  const [password,setPassword]=useState('')
  const handleSubmit= (e)=>{
    e.preventDefault();
    console.log(userName)
  }

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}  alt="logo"></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={userName}
            onChange={(e)=>setUserName(e.target.value)}
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="femail"
            name="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="fphone"
            value={phone}
            onChange={(e)=>setphone(e.target.value)}
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            id="fpassword"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button  type="submit">Signup</button>
        </form>
       
          <a href="#">Login</a>
        
      </div>
    </div>
  );
}
