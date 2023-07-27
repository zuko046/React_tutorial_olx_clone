import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCdkv0VBp6IzZuBfNEucEKO2bVnH1PvETw",
    authDomain: "fir-6e3ce.firebaseapp.com",
    projectId: "fir-6e3ce",
    storageBucket: "fir-6e3ce.appspot.com",
    messagingSenderId: "394860043398",
    appId: "1:394860043398:web:b8e38533ad7cd2c5b3c507",
    measurementId: "G-C04MSGG1Z5"
  };


export default firebase.initializeApp(firebaseConfig)