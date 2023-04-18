import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import {
    getDatabase,
    get,
    ref,
    set,
    onValue,
} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-database.js";

// Инициализация Firebase и получение доступа к базе данных
const firebaseConfig = {
    apiKey: "AIzaSyBD0dBVjy8cepGlc4vbCE-m1mT9oxbI10A",
    authDomain: "vapehub-592c5.firebaseapp.com",
    databaseURL: "https://vapehub-592c5-default-rtdb.firebaseio.com",
    projectId: "vapehub-592c5",
    storageBucket: "vapehub-592c5.appspot.com",
    messagingSenderId: "477518572377",
    appId: "1:477518572377:web:1b0eb76547499642abfa48",
    measurementId: "G-5GD5ENSSFB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// вывод списка на экран
const productsRef = ref(db, "banner");
onValue(productsRef, (snapData) => {
        let reflink = `banner`;
        let dbRef = ref(db, reflink);
        onValue(dbRef, (snapshot) => {
            let title = snapshot.val().title;
            let description = snapshot.val().description;
            let link = snapshot.val().link;


            const titleContainer = document.querySelector('.map__tastes')
            .innerText = title;  
            
            const descriptionContainer = document.querySelector('.map__paragraph')
            .innerText = description;

            const bgImage = document.querySelector('.section')
            .style.backgroundImage = `url('${link}')`;
        });
    
});


