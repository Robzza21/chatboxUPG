// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0tSZfcFZfwG0RVT-3YDLV_VZgcyqH3J0",
  authDomain: "chat-75778.firebaseapp.com",
  databaseURL: "https://chat-75778-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "chat-75778",
  storageBucket: "chat-75778.appspot.com",
  messagingSenderId: "46116065696",
  appId: "1:46116065696:web:520dc5eb75a6e5eca454c5",
  measurementId: "G-1F6TWH3Q6E"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)