import {initializeApp} from 'firebase';
import 'firebase/database'

const app = initializeApp({
    apiKey: "AIzaSyCYVyaIqqji_LuRxaW21CRnnQnhvpTvUK8",
    authDomain: "petstore-a34f8.firebaseapp.com",
    databaseURL: "https://petstore-a34f8.firebaseio.com",
    projectId: "petstore-a34f8",
    storageBucket: "petstore-a34f8.appspot.com",
    messagingSenderId: "478344384243",
    appId: "1:478344384243:web:a46307475f1eaa20fd7186",
    measurementId: "G-5PP7YVJSQ1"
});

export const db = app.database();

export const productsRef = db.ref('products');
