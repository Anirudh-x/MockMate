
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBvasQw4ROk1ac053DeCibiBSYg3Dfu1FM",
  authDomain: "mockmate-abcca.firebaseapp.com",
  projectId: "mockmate-abcca",
  storageBucket: "mockmate-abcca.firebasestorage.app",
  messagingSenderId: "556358189042",
  appId: "1:556358189042:web:3a4d3ef54ecabf8a30f56b",
  measurementId: "G-HNC9ZG3TV2"
};

// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.FIREBASE_APP_ID,
//   measurementId: process.env.FIREBASE_MEASUREMENT_ID
// };

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
