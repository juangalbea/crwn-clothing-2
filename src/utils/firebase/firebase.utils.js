import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZWt8WCUJI2b6TeWBNpfrogGt4Y9BwHR0",
  authDomain: "crwn-clothing-db-2-3e796.firebaseapp.com",
  projectId: "crwn-clothing-db-2-3e796",
  storageBucket: "crwn-clothing-db-2-3e796.appspot.com",
  messagingSenderId: "91349832523",
  appId: "1:91349832523:web:cb20d4e042a04710888ece",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  // const userDocRef = doc(db, 'users',);
};
