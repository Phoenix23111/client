import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const fbapikey = import.meta.env.VITE_FIREBASE_API_KEY;
const fbprojid = import.meta.env.VITE_FIREBASE_PROJECT_ID;
const fbauthdom = import.meta.env.VITE_FIREBASE_PROJECT_DOMAIN;
const fbmsgingid = import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID;
const fbappid = import.meta.env.VITE_FIREBASE_API_APP_ID;
const fbstoragebucket = import.meta.env.VITE_FIREBASE_STORAGE_BUCKET;

const firebaseConfig = {
  apiKey: fbapikey,
  authDomain: fbauthdom,
  projectId: fbprojid,
  storageBucket: fbstoragebucket,
  messagingSenderId: fbmsgingid,
  appId: fbappid,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, signInWithPopup, googleProvider };
