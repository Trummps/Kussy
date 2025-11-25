//Iniciar Firebase
import { initializeApp } from "firebase/app";
//base de datos
import { getFirestore } from "firebase/firestore";
//autenticacion
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBhqPlnLorRJ2Z_e127TJSewROWPca3eLo",
  authDomain: "trummps-86e4b.firebaseapp.com",
  projectId: "trummps-86e4b",
  storageBucket: "trummps-86e4b.firebasestorage.app",
  messagingSenderId: "263543159931",
  appId: "1:263543159931:web:5f8b1e3b7cc759f1bfb6de",
  measurementId: "G-C39DKNYLZ4"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//exportaciones
export default app;
export { db, getAuth };
