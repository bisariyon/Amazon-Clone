import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDrSC8BnRUV2oitljPfslUW05Yl7fSVpR0",
  authDomain: "clone-f64f3.firebaseapp.com",
  projectId: "clone-f64f3",
  storageBucket: "clone-f64f3.appspot.com",
  messagingSenderId: "698940320758",
  appId: "1:698940320758:web:2913fd5049e2e3b263b5d7",
  measurementId: "G-89640PLL5E",
};
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

export { db, auth, firebaseApp };