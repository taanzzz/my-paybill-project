// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRtVHDANi8ZybGXqFWsc_2c-d1lg6zK5o",
  authDomain: "my-assignment-auth-9da01.firebaseapp.com",
  projectId: "my-assignment-auth-9da01",
  storageBucket: "my-assignment-auth-9da01.firebasestorage.app",
  messagingSenderId: "369535262584",
  appId: "1:369535262584:web:c99d20e379e9f21647728d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const storage = getStorage(app);