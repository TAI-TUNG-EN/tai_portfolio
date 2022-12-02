// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4m3tQbbCQQYMid18su53ArpOEftpdqIA",
  authDomain: "tai-portfolio.firebaseapp.com",
  projectId: "tai-portfolio",
  storageBucket: "tai-portfolio.appspot.com",
  messagingSenderId: "93212133082",
  appId: "1:93212133082:web:0afee9a8ad2f2a535b07e3",
  measurementId: "G-MVKS7X1GWZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;