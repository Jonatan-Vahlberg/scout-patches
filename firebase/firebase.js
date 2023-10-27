// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnp7ZJ41WcGdws2iQLVoOL9pBJkonrcF0",
  authDomain: "scout-patches.firebaseapp.com",
  databaseURL: "https://scout-patches-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "scout-patches",
  storageBucket: "scout-patches.appspot.com",
  messagingSenderId: "934231276415",
  appId: "1:934231276415:web:6d4b14e253163d39f8b84a"
};

// Initialize Firebase
const App = initializeApp(firebaseConfig);

// Get a reference to the auth service

const auth = getAuth(App);

const database = getDatabase(App);

export { 
  App,
  auth,
  database
};
