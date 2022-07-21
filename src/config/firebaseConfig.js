import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCdIDGBhtfXjQblJABBc4OdUvZaXJYzmjQ",
  authDomain: "create-firebase-auth-42fd8.firebaseapp.com",
  projectId: "create-firebase-auth-42fd8",
  storageBucket: "create-firebase-auth-42fd8.appspot.com",
  messagingSenderId: "516932589335",
  appId: "1:516932589335:web:0b3fa6eb685458e6f78952",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
