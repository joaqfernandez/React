// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyACLpqTbbPs04Tkkn6goUxl4znen04yLkI",
    authDomain: "eccomerce-react-joaqfernandez.firebaseapp.com",
    projectId: "eccomerce-react-joaqfernandez",
    storageBucket: "eccomerce-react-joaqfernandez.appspot.com",
    messagingSenderId: "840860701800",
    appId: "1:840860701800:web:38fa9a053eae7599d157dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);