// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

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

export { auth, RecaptchaVerifier, signInWithPhoneNumber };
