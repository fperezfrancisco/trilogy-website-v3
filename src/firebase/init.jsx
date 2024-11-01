// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpgsfRyOfiYPJubrdc8GL07I-PCbUs7aw",
  authDomain: "trilogy-website-359f6.firebaseapp.com",
  projectId: "trilogy-website-359f6",
  storageBucket: "trilogy-website-359f6.firebasestorage.app",
  messagingSenderId: "737681887425",
  appId: "1:737681887425:web:11430e1d6697b422e1c440",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
