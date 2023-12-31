import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "coderhouse-entregafinal.firebaseapp.com",
  projectId: "coderhouse-entregafinal",
  storageBucket: "coderhouse-entregafinal.appspot.com",
  messagingSenderId: "921484001474",
  appId: "1:921484001474:web:edb6ff847f136a79f7fb5b"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);