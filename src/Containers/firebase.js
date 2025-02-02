// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth , GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACWt_3TzFaHcgyyNq2sP4einQQtjZuF3g",
  authDomain: "my-first-firebase-projec-11718.firebaseapp.com",
  projectId: "my-first-firebase-projec-11718",
  storageBucket: "my-first-firebase-projec-11718.firebasestorage.app",
  messagingSenderId: "1043664261871",
  appId: "1:1043664261871:web:9dadc4b95294db788b811a",
  measurementId: "G-DDJEC6C7MC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();

export const firestore = getFirestore(app);