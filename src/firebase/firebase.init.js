// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOdNik-I9ojoQTXrplUmz130gjIH3eEPI",
  authDomain: "my-assignment-project-1c0c1.firebaseapp.com",
  projectId: "my-assignment-project-1c0c1",
  storageBucket: "my-assignment-project-1c0c1.firebasestorage.app",
  messagingSenderId: "1096322284956",
  appId: "1:1096322284956:web:a9f239d370243224735c59",
  measurementId: "G-ETN718SBEM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
