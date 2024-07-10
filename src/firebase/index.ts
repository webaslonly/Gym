import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAA5KefGdZogcgTTAGCW6EicNvbPKzcW5Q",
  authDomain: "gym-max-fae24.firebaseapp.com",
  projectId: "gym-max-fae24",
  storageBucket: "gym-max-fae24.appspot.com",
  messagingSenderId: "942986696153",
  appId: "1:942986696153:web:d2d2771e43462c6f5335c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }