// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// Import the functions you need from the SDKs you need

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYIETbOxz-aVQpAbyqeauYLKujhAh4p1o",
  authDomain: "dysl-assistant-ai.firebaseapp.com",
  projectId: "dysl-assistant-ai",
  storageBucket: "dysl-assistant-ai.appspot.com",
  messagingSenderId: "732579589256",
  appId: "1:732579589256:web:9472bccb4919b71e42833d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };