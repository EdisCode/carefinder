// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQNQ65YzkYVOfp85p16VDw1iHEzH9PL7Q",
  authDomain: "carefinder-6b691.firebaseapp.com",
  databaseURL: "https://carefinder-6b691-default-rtdb.firebaseio.com",
  projectId: "carefinder-6b691",
  storageBucket: "carefinder-6b691.appspot.com",
  messagingSenderId: "571610794831",
  appId: "1:571610794831:web:2ade47e2d864e3bf2e933a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const store = getFirestore(app);
export const storage = getStorage(app);
export const database = getDatabase(app);

export default app;
