import {getFirestore} from 'firebase/firestore'; 
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBP3UimLRnU2vWzl103jvtbYlqlquviT8Q",
  authDomain: "house-marketplace-0124.firebaseapp.com",
  projectId: "house-marketplace-0124",
  storageBucket: "house-marketplace-0124.appspot.com",
  messagingSenderId: "588309065809",
  appId: "1:588309065809:web:8289d6c3784e5e71be8870"
};

const app = initializeApp(firebaseConfig);

export const db= getFirestore()