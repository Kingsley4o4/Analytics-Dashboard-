// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBybLlreerMHShNzD998FUzGibWsDX1Ego",
  authDomain: "analyticdashboardlogin.firebaseapp.com",
  projectId: "analyticdashboardlogin",
  storageBucket: "analyticdashboardlogin.firebasestorage.app",
  messagingSenderId: "9484901716",
  appId: "1:9484901716:web:8553938c95f9e5b3403cc1",
  measurementId: "G-F6LQR0KTDK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 export const auth = getAuth(app);

