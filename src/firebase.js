import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";


var firebaseConfig = {
    apiKey: "AIzaSyAfal25StD_ud5ncnxwl1MtDBRwvF-Wq_Y",
    authDomain: "react-slack-bc820.firebaseapp.com",
    databaseURL: "https://react-slack-bc820.firebaseio.com",
    projectId: "react-slack-bc820",
    storageBucket: "react-slack-bc820.appspot.com",
    messagingSenderId: "203202524282",
    appId: "1:203202524282:web:de95da3461c78e7af337c3",
    measurementId: "G-F9MM5MNQV5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export default firebase;