import { async } from '@firebase/util';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../olx-logo.png';
import { FirebaseDataContext, FirebaseAuthContext } from '../../store/FirebaseContext';
import './Signup.css';

export default function Signup() {
  const navigate = useNavigate("") //route
  const { db } = useContext(FirebaseDataContext) //firebase data base
  const { auth } = useContext(FirebaseAuthContext)//authentication
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setphone] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
console.log("signup page")
  }, [])



  const handleSubmit = (e) => {                               ///===================== signup completed
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        updateProfile(result.user, { displayName: userName })
          .then(() => {
            addDoc(collection(db, 'users')
              , {
                id: result.user.uid,
                userName: userName,
                phoneNumber: phone
              }).then(() => {
                console.log("signup success")
              }).catch((err) => console.log(err.message))

          }).then(() => {
            navigate("/login")
          })
        console.log(result.user.email)
      }).catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage)
      })


  }

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo} alt="logo"></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={userName}
            required
            onChange={(e) => setUserName(e.target.value)}
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
            required
            onChange={(e) => setEmail(e.target.value)}
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
            required
            onChange={(e) => setphone(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
            id="fpassword"
            name="password"
            required
            defaultValue="Doe"
          />
          <br />
          <br />
          <button type="submit">Signup</button>
        </form>

        <a onClick={() => navigate("/login")}>Login</a>

      </div>
    </div>
  );
}
