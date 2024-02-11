// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use

import {getFirestore} from "firebase/firestore"
import {getStorage} from 'firebase/storage';
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig={
    apiKey: "AIzaSyD3jQrmTbUF7iEsXfiCGeW9sIdTTR2VR5s",
    authDomain: "fir-25869.firebaseapp.com",
    projectId: "fir-25869",
    storageBucket: "fir-25869.appspot.com",
    messagingSenderId: "656953466471",
    appId: "1:656953466471:web:17bf5726cafd0fd3247ec2",
    measurementId: "G-BV4E38G6ZV"
};

// Initialize Firebase
const app=initializeApp(firebaseConfig);
const analytics=getAnalytics(app);

const db=getFirestore(app)
const storage=getStorage(app)
export {db, storage, analytics}