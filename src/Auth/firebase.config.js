// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRW272UYAZsvJjCa_BAUlevrannNbetV4",
  authDomain: "seasons-c1591.firebaseapp.com",
  projectId: "seasons-c1591",
  storageBucket: "seasons-c1591.appspot.com",
  messagingSenderId: "280938890680",
  appId: "1:280938890680:web:85598d50f7bdd6cc56bb4d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;