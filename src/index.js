import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAu5D5ozEkCR-NCE3Pfak3xa3wq_eqgytI",
  authDomain: "clapp-5ac46.firebaseapp.com",
  databaseURL: "https://clapp-5ac46.firebaseio.com",
  projectId: "clapp-5ac46",
  storageBucket: "clapp-5ac46.appspot.com",
  messagingSenderId: "1018795609155",
  appId: "1:1018795609155:web:3d3c20986ca3ce5ba018f6",
  measurementId: "G-Q2BWFW4MPK"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
