
// import ReactDOM from 'react-dom'; //old model
// import './index.css';
// import App from './App';
// ReactDOM.render( <App />,document.getElementById('root'))

// import React from 'react';
// import './index.css';
// import App from './App';
// import { createRoot } from 'react-dom/client';
// import { FirebaseContext } from './store/FirebaseContext';
// import { db } from './Firebase/config/Config';


// const container = document.getElementById('root');
// const root = createRoot(container); 
// root.render(
// <FirebaseContext.Provider value={{db}}>
// <App/>
// <FirebaseContext.Provider/>
// );


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { FirebaseContext } from './store/FirebaseContext';
import { db } from './Firebase/config/Config';;


ReactDOM.render(
    <FirebaseContext.Provider value={{db}}>
        
            <App/>
       
    </FirebaseContext.Provider>
    , document.getElementById('root'));