import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAKsb-QyYsx8J_RiHrYo3y5nbcWz1jlny4",
    authDomain: "firegram-ef397.firebaseapp.com",
    projectId: "firegram-ef397",
    storageBucket: "firegram-ef397.appspot.com",
    messagingSenderId: "775158601815",
    appId: "1:775158601815:web:2f69c614da7e063fb72b12"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFireStore = firebase.firestore();

export {
    projectFireStore,
    projectStorage
};