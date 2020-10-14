import firebase from 'firebase'

/*
var config = { 
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_MESSAGING_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};
*/

var config = {
  apiKey: "AIzaSyBu-kjxWbKLLNImAupudhui0_jL6GSwUWM",
  authDomain: "clapp-8298d.firebaseapp.com",
  databaseURL: "https://clapp-8298d.firebaseio.com",
  projectId: "clapp-8298d",
  storageBucket: "clapp-8298d.appspot.com",
  messagingSenderId: "792748036289",
  appId: "1:792748036289:web:9f8302b30ab22df27c0440",
  measurementId: "G-BX977DVRDT"
};

var fire = firebase.initializeApp(config);
export var database = firebase.database();
export default fire;