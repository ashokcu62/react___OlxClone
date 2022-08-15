
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import Context, {  FirebaseContext } from './store/Context';
import { auth, db,storage } from './Firebase/config/Config';


const container = document.getElementById('root');
const root = createRoot(container); 
root.render(
     
    <Context>

        < FirebaseContext.Provider value={{db,auth,storage}}>
            
            <App />
         
        </ FirebaseContext.Provider>
       
    </Context>
      
    );