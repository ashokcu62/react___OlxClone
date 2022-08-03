import React, {useContext, useEffect, useState } from 'react';
import {BrowserRouter as Router,Routes,Route}from 'react-router-dom'
import './App.css';
import Signup from "./Pages/Signup"
import Login from './Pages/Login';
/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import {  FirebaseDataContext } from './store/FirebaseContext';



function App() {
 
  useEffect(()=>{
  },[])
  return (
    <div>
      < Router>
       <Routes>
       <Route  path='/'element={ <Home />}></Route>
       <Route path='/signup' element={ <Signup/>}></Route>
       <Route path='/login' element={  <Login/> }></Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;

