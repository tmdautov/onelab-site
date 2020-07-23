import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

export const firebaseConfig = {
    apiKey: "AIzaSyA_pUudH2nhkbzYYiqCPIY1Sdb-TYZQIrg",
    authDomain: "adilk-efc66.firebaseapp.com",
    databaseURL: "https://adilk-efc66.firebaseio.com",
    projectId: "adilk-efc66",
    storageBucket: "adilk-efc66.appspot.com",
    messagingSenderId: "954892485083",
    appId: "1:954892485083:web:73cfe3cfe668f3354a67fe",
    measurementId: "G-KS56TGG8PP"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig); 
}

export const auth = firebase.auth();
export const db = firebase.firestore();

export default firebase;