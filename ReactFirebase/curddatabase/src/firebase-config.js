// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6rjZto--f-45ZTf7TH6eu0XHIoFL-S54",
  authDomain: "curdfirebase-a68c6.firebaseapp.com",
  projectId: "curdfirebase-a68c6",
  storageBucket: "curdfirebase-a68c6.appspot.com",
  messagingSenderId: "605711450166",
  appId: "1:605711450166:web:67e9dfa36fdd247ec25897"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)