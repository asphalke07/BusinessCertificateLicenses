import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
import {getStorage} from "@firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBOvoYiubO10Yv0u1QmJauCuzs_3l6y6lw",
  authDomain: "businesscertificatelicenseapp.firebaseapp.com",
  projectId: "businesscertificatelicenseapp",
  storageBucket: "businesscertificatelicenseapp.appspot.com",
  messagingSenderId: "490817794697",
  appId: "1:490817794697:web:f3dc5e1bfecf18f2630c58",
  measurementId: "G-S6FY7QE764"
};

  const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);

export {db,storage};

