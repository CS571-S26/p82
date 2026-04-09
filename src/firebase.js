// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARn6qUZGiKzqU3mpvd8k-i55_SS0yGSPQ",
  authDomain: "cs571-badgergdsg.firebaseapp.com",
  projectId: "cs571-badgergdsg",
  storageBucket: "cs571-badgergdsg.firebasestorage.app",
  messagingSenderId: "86973285550",
  appId: "1:86973285550:web:7a22106fec5c7b958a593f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
