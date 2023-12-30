import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDIuqBDKg3kKelBRjEWte2_CGC4kTk44Co",
  authDomain: "twin-learn-task.firebaseapp.com",
  projectId: "twin-learn-task",
  storageBucket: "twin-learn-task.appspot.com",
  messagingSenderId: "677886593226",
  appId: "1:677886593226:web:47ca0374c399e729958c33",
  measurementId: "G-8G2G2TFR80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

