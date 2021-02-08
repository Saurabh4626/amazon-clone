import firebase from 'firebase';


const app = firebase.initializeApp({ 
    apiKey: "AIzaSyCPcM3Jfv_q1wfTLFDJytZL8HBTMGxEgEY",
    authDomain: "clone-94444.firebaseapp.com",
    projectId: "clone-94444",
    storageBucket: "clone-94444.appspot.com",
    messagingSenderId: "719857064132",
    appId: "1:719857064132:web:031a5ccf57ed07b3fed191",
    measurementId: "G-62W0FW8HF6"
});

const auth=firebase.auth();

export {auth};