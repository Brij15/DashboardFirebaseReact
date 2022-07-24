// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6uq6LjGz8mn3nVg6y2hTUmWybVw4g_3E",
  authDomain: "dashboard-app-ca6a4.firebaseapp.com",
  projectId: "dashboard-app-ca6a4",
  storageBucket: "dashboard-app-ca6a4.appspot.com",
  messagingSenderId: "399743349005",
  appId: "1:399743349005:web:35152027b4208e3dafc044"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app