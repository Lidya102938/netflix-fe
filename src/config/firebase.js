// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiMcabDKLifMB7tGgdUVtkFhns097Sl4U",
  authDomain: "neetflix-4464a.firebaseapp.com",
  projectId: "neetflix-4464a",
  storageBucket: "neetflix-4464a.appspot.com",
  messagingSenderId: "752309298904",
  appId: "1:752309298904:web:5bf540c126e5534d5299ad",
  measurementId: "G-NK0THH2NT6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

export default { app, analytics, db };
