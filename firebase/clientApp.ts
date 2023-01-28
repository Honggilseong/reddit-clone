import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "redditclone-a0e67.firebaseapp.com",
  projectId: "redditclone-a0e67",
  storageBucket: "redditclone-a0e67.appspot.com",
  messagingSenderId: "538364487248",
  appId: "1:538364487248:web:e9cfa90955edacfd079355",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, firestore, auth, storage };
