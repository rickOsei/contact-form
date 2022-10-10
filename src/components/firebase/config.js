import { initializeApp } from "firebase/app";
import { collection, getFirestore, getDocs } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyoFTeM3J_EZrSbqInB6eo9mA6oeADsuk",
  authDomain: "fir-contact-form-3425d.firebaseapp.com",
  projectId: "fir-contact-form-3425d",
  storageBucket: "fir-contact-form-3425d.appspot.com",
  messagingSenderId: "511987362419",
  appId: "1:511987362419:web:c9618087b7207a476dd806",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// init service firestore
export const db = getFirestore(app);
