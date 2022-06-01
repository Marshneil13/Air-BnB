import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDh9Qq__CIRizz6TDbZKFqk5Vs9XF4kYkk",
  authDomain: "air-b2b-app.firebaseapp.com",
  projectId: "air-b2b-app",
  storageBucket: "air-b2b-app.appspot.com",
  messagingSenderId: "579768326228",
  appId: "1:579768326228:web:2d80ce0d9231de799835c1"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();