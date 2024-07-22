// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyD0Nh8iKhKLgac3ADnN4xvIKC8xOOylY",
  authDomain: "my-react-project-427706.firebaseapp.com",
  projectId: "my-react-project-427706",
  storageBucket: "my-react-project-427706.appspot.com",
  messagingSenderId: "1453990155",
  appId: "1:1453990155:web:9d6c7e4f48ed797197020e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;