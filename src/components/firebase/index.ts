import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCKqHIomS23AnQf9pahifGEgrQYgkRWypw",
  authDomain: "gym-pro-f4260.firebaseapp.com",
  projectId: "gym-pro-f4260",
  storageBucket: "gym-pro-f4260.appspot.com",
  messagingSenderId: "367451464215",
  appId: "1:367451464215:web:7c2ad988059b79655eb252"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }