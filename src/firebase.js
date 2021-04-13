import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBBmPssjra7muad97SWkkUuYvXe5fQJIuE",
    authDomain: "react-login-auth-543fa.firebaseapp.com",
    projectId: "react-login-auth-543fa",
    storageBucket: "react-login-auth-543fa.appspot.com",
    messagingSenderId: "462262413542",
    appId: "1:462262413542:web:fcf677a5db47917c9f3327"
  };

  firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth();