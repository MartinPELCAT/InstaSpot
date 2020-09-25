import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/main.css";
import { App } from "./App";
import * as serviceWorker from "./serviceWorker";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAqOguaETbj1-u2tM84nXzowgEfsNNcM94",
  authDomain: "instagram-spot.firebaseapp.com",
  databaseURL: "https://instagram-spot.firebaseio.com",
  projectId: "instagram-spot",
  storageBucket: "instagram-spot.appspot.com",
  messagingSenderId: "353801176020",
  appId: "1:353801176020:web:788b9d7b72fe44310b8c41",
  measurementId: "G-7J3M0335YS",
};

initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
