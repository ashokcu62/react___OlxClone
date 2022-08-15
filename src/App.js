import React, {useContext, useEffect, useState } from 'react';
import {BrowserRouter as Router,Routes,Route}from 'react-router-dom'
import './App.css';
import Signup from "./Pages/Signup"
import Login from './Pages/Login';
/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import {  AuthContext, FirebaseContext } from './store/Context';
import { onAuthStateChanged } from 'firebase/auth';
import Create from './Pages/Create'
import View from'./Pages/View'
import Post from './store/Postcontext';
function App() {
const{setUser}=useContext(AuthContext)
const{auth}=useContext(FirebaseContext)



  useEffect(()=>{

    /// setting user data
    onAuthStateChanged(auth,(currentUser)=>{
      if(currentUser){
        setUser(currentUser)
        console.log("user logged")
      }else{
      
       console.log("user is not logged")
      }
     })
     
     
  },[])
  return (
    <div>
      {/* post data */}

      <Post>
      < Router>
       <Routes>
       
       <Route  path='/'element={ <Home />}></Route>
       <Route path='/signup' element={ <Signup/>}></Route>
       <Route path='/login' element={  <Login/> }></Route>
       <Route path='/create' element={<Create/> }></Route>
       <Route path='/view' element={<View/> }></Route>
      </Routes>
      
      </Router>
      </Post>

    </div>
  );
}

export default App;

