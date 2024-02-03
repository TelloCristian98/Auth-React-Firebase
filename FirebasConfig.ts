// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDawJs8aJT3pMyHcjIfm_GwA7QmiBZB4Ys",
  authDomain: "authentication-dc262.firebaseapp.com",
  projectId: "authentication-dc262",
  storageBucket: "authentication-dc262.appspot.com",
  messagingSenderId: "320184354287",
  appId: "1:320184354287:web:483371c0b0e39c1ab7621a",
  measurementId: "G-DYMTJNLE15"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);