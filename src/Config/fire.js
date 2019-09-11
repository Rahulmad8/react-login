import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
const config = {
    apiKey: "AIzaSyDrSrux7nE0lQRgKaM2kRmJSe-TPWez38w",
    authDomain: "analytics-fd770.firebaseapp.com",
    databaseURL: "https://analytics-fd770.firebaseio.com",
    projectId: "analytics-fd770",
    storageBucket: "",
    messagingSenderId: "573340372156",
    appId: "1:573340372156:web:45cb8162d4b1ab0a7c94b9"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(config);
  const DB = fire.firestore();
  
  export {
    fire,
    DB,
  }
  