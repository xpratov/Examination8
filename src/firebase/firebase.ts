import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCCEt5N3HF7FrQqJUY_FQxm1fFIHHgPmFw",
  authDomain: "invoices-exam8.firebaseapp.com",
  projectId: "invoices-exam8",
  storageBucket: "invoices-exam8.appspot.com",
  messagingSenderId: "318903394770",
  appId: "1:318903394770:web:20f303be8ca5be1501680b",
  measurementId: "G-3KBDVNG8PX",
  databaseURL: "https://invoices-exam8-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const realDB = getDatabase(app);
const GoogleProvider = new GoogleAuthProvider();

export {app, auth, realDB, GoogleProvider}