// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAmTu-6fnaCjxhM3b-jRLSPucoFhRGq-_Y",
    authDomain: "teste-projeto-7fe94.firebaseapp.com",
    projectId: "teste-projeto-7fe94",
    storageBucket: "teste-projeto-7fe94.appspot.com",
    messagingSenderId: "456907023920",
    appId: "1:456907023920:web:7de9171936a52e44a1eff5",
    measurementId: "G-TF3BPWDWYW"
  };

  // Initialize Firebase
if (firebase.app.length === 0){
    Firebase = firebase.initializeApp(firebaseConfig);
}

export default Firebase;