import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAbm2h8HrmdZwIi8hVentAs0Lf4fzv4jfU',
  authDomain: 'assignment-11-effective.firebaseapp.com',
  projectId: 'assignment-11-effective',
  storageBucket: 'assignment-11-effective.appspot.com',
  messagingSenderId: '602688099308',
  appId: '1:602688099308:web:ce379fa3c7a9c27b37e6c9',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth