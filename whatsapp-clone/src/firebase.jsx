import firebase from "firebase"


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD-FD5IEwtUCJydMAuGpkJZJrhnzu-DIo0",
    authDomain: "whatsapp-clone-d7976.firebaseapp.com",
    projectId: "whatsapp-clone-d7976",
    storageBucket: "whatsapp-clone-d7976.appspot.com",
    messagingSenderId: "115936774809",
    appId: "1:115936774809:web:01d7e50a71e738dbc88608",
    measurementId: "G-87D891PPCL"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;