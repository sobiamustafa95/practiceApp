import firebase from "./firebaseConfig";
import { getAuth } from "firebase/auth";

export const auth = getAuth();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
