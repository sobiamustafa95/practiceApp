// import firebase from "firebase";
// import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCdIDGBhtfXjQblJABBc4OdUvZaXJYzmjQ",
  authDomain: "create-firebase-auth-42fd8.firebaseapp.com",
  projectId: "create-firebase-auth-42fd8",
  storageBucket: "create-firebase-auth-42fd8.appspot.com",
  messagingSenderId: "516932589335",
  appId: "1:516932589335:web:ffccdfcac8df23a3f78952",
};

// // Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);

export default firebase;
