import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDIS5dpFmXD6qjmH51HrQ_UMmKWtRvKKxc",
    authDomain: "transparenciaseac.firebaseapp.com",
    projectId: "transparenciaseac",
    storageBucket: "transparenciaseac.appspot.com",
    messagingSenderId: "640440931494",
    appId: "1:640440931494:web:81e2d4d8a42d3422a0d067"
};


    firebase.initializeApp(firebaseConfig)


  export default firebase