// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBNOc2VFDGNTzry4acD5YcFPDp4iBVLfYE",
  authDomain: "grin-mobility-b6289.firebaseapp.com",
  projectId: "grin-mobility-b6289",
  storageBucket: "grin-mobility-b6289.appspot.com",
  messagingSenderId: "509414553560",
  appId: "1:509414553560:web:0c8132fc74128b607a24ad",
  measurementId: "G-SK5H43WTLW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, db, doc, setDoc };
