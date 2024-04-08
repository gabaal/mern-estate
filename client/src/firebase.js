// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-6da80.firebaseapp.com",
  projectId: "mern-estate-6da80",
  storageBucket: "mern-estate-6da80.appspot.com",
  messagingSenderId: "929651197099",
  appId: "1:929651197099:web:a30693c872c861ed6de3ee",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
