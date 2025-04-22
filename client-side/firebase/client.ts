
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

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
