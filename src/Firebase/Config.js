
import{initializeApp}from 'firebase/app'
import{ getFirestore}from 'firebase/firestore'
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyABiGCsakHvv8BLDfT9F6vuGqrhQafFItk",
  authDomain: "firetute-2158c.firebaseapp.com",
  projectId: "firetute-2158c",
  storageBucket: "firetute-2158c.appspot.com",
  messagingSenderId: "1088675272434",
  appId: "1:1088675272434:web:c060c0158e29d46e1a626b"
  };
  
  // Initialize Firebase
   export const app = initializeApp(firebaseConfig);
   export const db= getFirestore(app)
   export const auth=getAuth(db)
