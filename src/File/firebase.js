import { getAuth } from "firebase/auth";
import { initializeApp } from 'firebase/app'
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/database';
const firebaseConfig = {
    apiKey: "AIzaSyB1ftEdF1cuoGQx1psSqHq7fg8cUIQRhn8",
    authDomain: "ticketbooking-63f47.firebaseapp.com",
    databaseURL: "https://ticketbooking-63f47-default-rtdb.firebaseio.com",
    projectId: "ticketbooking-63f47",
    storageBucket: "ticketbooking-63f47.appspot.com",
    messagingSenderId: "264340883052",
    appId: "1:264340883052:web:0455532b7e7bfe06e3ba49",
    measurementId: "G-ZE01JQ2SFN"
};

// const db = firebaseConfig.database();
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

// export { db };