  
import{initializeApp}from 'firebase/app'
import{  getFirestore}from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyCYP52P-LQG54soJuXyZI-fEWFWgmTFezU",
    authDomain: "olxclone-59a6d.firebaseapp.com",
    projectId: "olxclone-59a6d",
    storageBucket: "olxclone-59a6d.appspot.com",
    messagingSenderId: "176802107371",
    appId: "1:176802107371:web:cedfd3870151856f9953ae"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const db=getFirestore(app)