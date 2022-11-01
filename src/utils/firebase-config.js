import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAGf4TU-w1Ld_bhlMMNwOLz1I5x-q8h19Q",
  authDomain: "react-netflix-clone-6114e.firebaseapp.com",
  projectId: "react-netflix-clone-6114e",
  storageBucket: "react-netflix-clone-6114e.appspot.com",
  messagingSenderId: "910553625849",
  appId: "1:910553625849:web:ad79a0e39b82252c43de28",
  measurementId: "G-S0DDBHPCZT",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
