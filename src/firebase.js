// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA150MNfeMalk1mk5OcNZi6RDrS707W_d8",
  authDomain: "ai-image-generator-b7375.firebaseapp.com",
  projectId: "ai-image-generator-b7375",
  storageBucket: "ai-image-generator-b7375.appspot.com",
  messagingSenderId: "1035455256092",
  appId: "1:1035455256092:web:db4cf63f9a0d38c7d3b1d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};