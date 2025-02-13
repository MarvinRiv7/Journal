// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUsnFR7TZy_FVIDtyV43kKsaEqjKgY7zI",
  authDomain: "curso-react2.firebaseapp.com",
  projectId: "curso-react2",
  storageBucket: "curso-react2.firebasestorage.app",
  messagingSenderId: "716810085167",
  appId: "1:716810085167:web:c6b7bb8af201b6b569f7da",
  measurementId: "G-D8S383354V"
};

// Initialize Firebase
export const Firebaseapp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(Firebaseapp)
export const FirebaseDB = getFirestore(Firebaseapp)
const analytics = getAnalytics(Firebaseapp);