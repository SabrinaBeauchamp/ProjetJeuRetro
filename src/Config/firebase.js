import {initializeApp} from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database';


const firebaseConfig = {
  apiKey: "AIzaSyDzIx3CuicPted-trvkHOI61YJqxYbrzws",
  authDomain: "jeuxretro-723cc.firebaseapp.com",
  projectId: "jeuxretro-723cc",
  storageBucket: "jeuxretro-723cc.appspot.com",
  messagingSenderId: "1070164019250",
  appId: "1:1070164019250:web:e285d123a089e6c699d42b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

const dab = getDatabase(app)


export {db, auth, dab};