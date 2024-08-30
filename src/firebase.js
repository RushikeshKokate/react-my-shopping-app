 
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
 
const firebaseConfig = {
    apiKey: "AIzaSyDl-isV3qgCViW8Od7573uZiMYoTrZJwkU",
    authDomain: "mart-8d332.firebaseapp.com",
    projectId: "mart-8d332",
    storageBucket: "mart-8d332.appspot.com",
    messagingSenderId: "376936607347",
    appId: "1:376936607347:web:350b80836759e58fed4406",
    measurementId: "G-H21VBQJ5M6"
};

 
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
 