import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyCUeC2x4XPJoP1wRSv9HQuzTdIKtBgYz08",
    authDomain: "unichat-a7c57.firebaseapp.com",
    projectId: "unichat-a7c57",
    storageBucket: "unichat-a7c57.appspot.com",
    messagingSenderId: "833962996418",
    appId: "1:833962996418:web:6fbb81831c06d8690f015b",
  })
  .auth();
