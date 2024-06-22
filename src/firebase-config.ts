// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmXlZyd-uRTbxCFC6b5Gs9VBG379tYCrA",
  authDomain: "iths-crossplatform-a312e.firebaseapp.com",
  projectId: "iths-crossplatform-a312e",
  storageBucket: "iths-crossplatform-a312e.appspot.com",
  messagingSenderId: "62582510810",
  appId: "1:62582510810:web:f584426f0ccf74f4f581e3"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore()