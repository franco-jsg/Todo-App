// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAodXV6NFsXgr5kzUePx4_nIpukF8MPjgg",
  authDomain: "todo-app-c3f93.firebaseapp.com",
  projectId: "todo-app-c3f93",
  storageBucket: "todo-app-c3f93.appspot.com",
  messagingSenderId: "765826009898",
  appId: "1:765826009898:web:d2a43c07f3b07bac456c53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export { app, auth } 