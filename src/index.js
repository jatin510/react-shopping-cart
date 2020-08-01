import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALwv8SW5T0TXOMgdEfXFNPnAfTf7BlFV0",
  authDomain: "cart-9b1e5.firebaseapp.com",
  databaseURL: "https://cart-9b1e5.firebaseio.com",
  projectId: "cart-9b1e5",
  storageBucket: "cart-9b1e5.appspot.com",
  messagingSenderId: "400347920522",
  appId: "1:400347920522:web:df84c9c40d446aaa721573",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
