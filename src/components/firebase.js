// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyBQbhW_ULuGJh2i_vjcyoc68HbbSipyWTA",
    authDomain: "chat-app-1bbbc.firebaseapp.com",
    databaseURL: "https://chat-app-1bbbc.firebaseio.com",
    projectId: "chat-app-1bbbc",
    storageBucket: "chat-app-1bbbc.appspot.com",
    messagingSenderId: "169921058822",
    appId: "1:169921058822:web:3f217fbaf9814b913e4b87",
    measurementId: "G-4ZWTCRFY4S"
  };


// Connection to the backend
const firebaseApp = firebase.initializeApp(firebaseConfig);
// Access to the data base
const db = firebaseApp.firestore();
// Auth for Login 
const auth = firebase.auth();
// Gets you the google services
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
