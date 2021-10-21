// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "fir-gallery-test.firebaseapp.com",
    databaseURL: "https://fir-gallery-test-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "fir-gallery-test",
    storageBucket: "fir-gallery-test.appspot.com",
    messagingSenderId: "200663262455",
    appId: "1:200663262455:web:6b7b3de41ea9c805c11ff2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectStorage, projectFirestore, timestamp};