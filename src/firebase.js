import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCtTWTeph4PwCr9LAzt09VJEMTEDs9Da6Q",
    authDomain: "react-auth-5a06f.firebaseapp.com",
    projectId: "react-auth-5a06f",
    storageBucket: "react-auth-5a06f.appspot.com",
    messagingSenderId: "925498238487",
    appId: "1:925498238487:web:40dca0163c20d5cad51e52"
  };

  firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth();