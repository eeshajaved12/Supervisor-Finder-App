import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEap4VWTX6wQxJ2AXSKqPtYiQhGOdXeXg",
  authDomain: "esha-fyp-1507e.firebaseapp.com",
  projectId: "esha-fyp-1507e",
  storageBucket: "esha-fyp-1507e.appspot.com",
  messagingSenderId: "1084769208316",
  appId: "1:1084769208316:web:938d7a8a460b88778f1479"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Export the instances you need
export { app, auth };