// Import the necessary Firebase modules
import { initializeApp } from 'firebase/app';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration object
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

// Initialize Firebase Authentication and Firestore
const auth = getAuth(app);
const db = getFirestore(app);

// Export the Firebase modules you need
export { auth, RecaptchaVerifier, signInWithPhoneNumber, db };
