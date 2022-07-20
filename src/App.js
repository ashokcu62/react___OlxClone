import React from 'react';
import {BrowserRouter as Router,Routes,Route}from 'react-router-dom'
import './App.css';
import Signup from "./Pages/Signup"
/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';


function App() {
  return (
    <div>
      < Router>
       <Routes>
       <Route  path='/'element={ <Home />}></Route>
       <Route path='/signup' element={ <Signup/>}></Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;

