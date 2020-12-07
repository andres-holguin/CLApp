import * as firebase from "firebase/app";
import "firebase/database";

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

export default firebase;
