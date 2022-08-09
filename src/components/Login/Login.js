import React, { useContext, useEffect, useState } from 'react';
import Logo from '../../olx-logo.png';
import { FirebaseContext } from '../../store/Context';         // need to find the problm
import './Login.css';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../Firebase/config/Config';
import { useNavigate } from 'react-router-dom';


export default function Login() {
  const navigate = useNavigate("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  useEffect(() => {
    console.log("login auth :", auth)
  }, [])


  const handleSubmit =  (e) => {

    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user.email)
        console.log("login success")
        navigate("/")
        // ...
      })
      .catch((error) => {
        //const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
        console.log("faild  :", errorMessage)
      })

  }

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            onChange={(e) => { setEmail(e.target.value) }}
            name="email"
            required
          />
          <br />
          <label htmlFor="lpassword">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lpassword"
            onChange={(e) => { setPassword(e.target.value) }}
            name="password"
            required
          />
          <br />
          <br />
          <button type="submit">Login</button>
        </form>

        <a href='/signup'>Signup</a>

      </div>
    </div>
  );
}
