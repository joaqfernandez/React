import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyACLpqTbbPs04Tkkn6goUxl4znen04yLkI",
  authDomain: "eccomerce-react-joaqfernandez.firebaseapp.com",
  projectId: "eccomerce-react-joaqfernandez",
  storageBucket: "eccomerce-react-joaqfernandez.appspot.com",
  messagingSenderId: "840860701800",
  appId: "1:840860701800:web:38fa9a053eae7599d157dd"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  {/*<React.StrictMode>*/}
    <App />
  {/*</React.StrictMode>*/}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
