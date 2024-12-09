// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Import the authentication module
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfSUB3C45UXV51Td0Fn0OGFt-alNRXBes",
  authDomain: "country-visa.firebaseapp.com",
  projectId: "country-visa",
  storageBucket: "country-visa.firebasestorage.app",
  messagingSenderId: "1016634063079",
  appId: "1:1016634063079:web:232272aeced6715b4d8a42",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
