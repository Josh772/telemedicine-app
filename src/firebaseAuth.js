import { getAuth } from "firebase/auth";
import { app } from "./firebase"; // Import the initialized Firebase app

// Initialize Firebase Authentication
const auth = getAuth(app);

export { auth };
