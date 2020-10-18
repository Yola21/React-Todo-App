import firebase from "firebase";

const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyDrRDL5AMORS_g6w0lQ7CYgSxxp5ZdziXI",
    authDomain: "react-todo-app-ef6e3.firebaseapp.com",
    databaseURL: "https://react-todo-app-ef6e3.firebaseio.com",
    projectId: "react-todo-app-ef6e3",
    storageBucket: "react-todo-app-ef6e3.appspot.com",
    messagingSenderId: "999311074317",
    appId: "1:999311074317:web:78be3ee573e4ee9847e144",
    measurementId: "G-QGLMMTN0JD"
});

const db = firebaseApp.firestore();

export default db ;