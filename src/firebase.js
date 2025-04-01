// firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // Import Storage

// Your Firebase configuration
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

// Get Firebase services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app); // Initialize Storage

// Export Firebase instances
export { auth, db, storage };
