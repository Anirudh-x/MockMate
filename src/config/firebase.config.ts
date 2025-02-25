import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDqzacT6snXWXzDQre9r4Tf2P73Z7uITOQ",
  authDomain: "mockmate-by-anirudh.firebaseapp.com",
  projectId: "mockmate-by-anirudh",
  storageBucket: "mockmate-by-anirudh.firebasestorage.app",
  messagingSenderId: "849790183515",
  appId: "1:849790183515:web:64f644d11ee2159699f77e",
};

const app = getApps.length > 0? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };