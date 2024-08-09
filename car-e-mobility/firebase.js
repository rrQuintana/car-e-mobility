// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCG3jwth3T76HCbBmvE8_9GhxCHs7BlNvk",
  authDomain: "care-webapp.firebaseapp.com",
  projectId: "care-webapp",
  storageBucket: "care-webapp.appspot.com",
  messagingSenderId: "866827705157",
  appId: "1:866827705157:web:dd71a722b20979c7933c2c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);

export default app;
