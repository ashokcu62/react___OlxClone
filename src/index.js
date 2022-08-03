
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import {  FirebaseAuthContext, FirebaseDataContext } from './store/FirebaseContext';
import { auth, db } from './Firebase/config/Config';



const container = document.getElementById('root');
const root = createRoot(container); 
root.render(
     <FirebaseAuthContext.Provider value={{auth}}>
    < FirebaseDataContext.Provider value={{db}}>

        <App />
    </ FirebaseDataContext.Provider>
    </FirebaseAuthContext.Provider>
      
    );