import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBRC-KfeKB_4cA9TTemCru8x7GUjb-sHwU",
    authDomain: "food-app-463d9.firebaseapp.com",
    databaseURL: "https://food-app-463d9-default-rtdb.firebaseio.com",
    projectId: "food-app-463d9",
    storageBucket: "food-app-463d9.appspot.com",
    messagingSenderId: "620524958752",
    appId: "1:620524958752:web:630c148bbdebd27d797845",
    measurementId: "G-PTW3K7ZXFN"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app)
const storage = getStorage(app)

export { app, firestore, storage };