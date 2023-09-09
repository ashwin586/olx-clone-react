import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'


const firebaseConfig = {
  apiKey: "AIzaSyAuhBDhcGrLjbML0Gmw1viAXESLVAQ5VaM",
  authDomain: "olx-clone-20e4e.firebaseapp.com",
  projectId: "olx-clone-20e4e",
  storageBucket: "olx-clone-20e4e.appspot.com",
  messagingSenderId: "740810462503",
  appId: "1:740810462503:web:bb6e6bbe30ca628c8d8502",
};

export default firebase.initializeApp(firebaseConfig);