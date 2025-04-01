// firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Your Firebase configuration (make sure to replace this with your own Firebase config)
const firebaseConfig = {
  apiKey: "AIzaSyB_ArGr5pdt54EHPixVtlRrOU_v0-XdLVI",
  authDomain: "telemedicine-app-8c794.firebaseapp.com",
  projectId: "telemedicine-app-8c794",
  storageBucket: "telemedicine-app-8c794.appspot.com",
  messagingSenderId: "254793477171",
  appId: "1:254793477171:web:e91eea72fcc5d8142a8746",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Auth instance
const auth = getAuth(app);

// Get Firestore instance
const db = getFirestore(app); // Initialize Firestore

// Export Firebase auth and Firestore instances
export { auth, db };
