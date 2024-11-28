// src/utils/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCBAM2aNRxLZ9CqWbYc_b1JqLfg7SwBL-c",
    authDomain: "vue-firebase-55133.firebaseapp.com",
    projectId: "vue-firebase-55133",
    storageBucket: "vue-firebase-55133.firebasestorage.app",
    messagingSenderId: "460216290160",
    appId: "1:460216290160:web:02fecc60de9bae26de5db5"
};

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(firebase);

export { auth, googleProvider, db };