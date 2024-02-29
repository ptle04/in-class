import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsMlRnl4AYHymATvP_eDn_m6nz6Ke31Jc",
  authDomain: "day-17-demo-54340.firebaseapp.com",
  databaseURL: "https://day-17-demo-54340-default-rtdb.firebaseio.com",
  projectId: "day-17-demo-54340",
  storageBucket: "day-17-demo-54340.appspot.com",
  messagingSenderId: "77862508702",
  appId: "1:77862508702:web:782149e6c9d2b4d697838f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//render the App *inside* of the BrowserRouter
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

registerServiceWorker();
