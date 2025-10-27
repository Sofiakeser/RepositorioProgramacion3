import app from "firebase/app";
import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyDVjA5fxHz5hU_qUnjVgApyEDsuxR-wMGQ",
    authDomain: "proyecto1-2025-a5cf1.firebaseapp.com",
    projectId: "proyecto1-2025-a5cf1",
    storageBucket: "proyecto1-2025-a5cf1.firebasestorage.app",
    messagingSenderId: "995159761",
    appId: "1:995159761:web:7b6bf011c93b3e2712dff0"
  };

app.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const storage = app.storage()
export const db = app.firestore()