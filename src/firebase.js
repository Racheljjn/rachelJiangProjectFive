import firebase from "firebase/app";
import "firebase/database";

 const firebaseConfig = {
   apiKey: "AIzaSyC5dBqodpJPXD5yirLGYMYmPCY__x5SA94",
   authDomain: "rachelprojectfive.firebaseapp.com",
   databaseURL: "https://rachelprojectfive.firebaseio.com",
   projectId: "rachelprojectfive",
   storageBucket: "rachelprojectfive.appspot.com",
   messagingSenderId: "171614267684",
   appId: "1:171614267684:web:784e642877bc3cdedd6bb1",
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 export default firebase;

