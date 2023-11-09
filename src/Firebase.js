import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDKMMULbOLa1NmPmWJVnJIAp531-oZOm5k",
  authDomain: "xerocode-7107c.firebaseapp.com",
  projectId: "xerocode-7107c",
  storageBucket: "xerocode-7107c.appspot.com",
  messagingSenderId: "860956237719",
  appId: "1:860956237719:web:a2bc3e189016e46442aed2",
  measurementId: "G-SRCDHWFLGP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {app, auth};