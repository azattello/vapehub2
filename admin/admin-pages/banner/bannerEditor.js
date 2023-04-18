import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import {  getDatabase, get, ref, set, push} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-database.js";

// Инициализация Firebase и получение доступа к базе данных
const firebaseConfig = {
    apiKey: "AIzaSyBD0dBVjy8cepGlc4vbCE-m1mT9oxbI10A",
    authDomain: "vapehub-592c5.firebaseapp.com",
    databaseURL: "https://vapehub-592c5-default-rtdb.firebaseio.com",
    projectId: "vapehub-592c5",
    storageBucket: "vapehub-592c5.appspot.com",
    messagingSenderId: "477518572377",
    appId: "1:477518572377:web:1b0eb76547499642abfa48",
    measurementId: "G-5GD5ENSSFB"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

let inputTitle = document.getElementById("banner__text");
let inputDesc = document.getElementById('banner__desc');
let inputLink = document.getElementById('link__img');

const refdb = ref(database, "banner/text");

const btn = document.querySelector('.button__send');
btn.addEventListener('click', function(){

        // запись заглавление в базу данных
        set(ref(database, 'banner/title'), inputTitle.value)
        .then(()=> {
            console.log('Запись в базу данных прошла успешно.');
    
            get(ref(database, "banner/title")).then((snapshot) =>{
                snapshot.exists()
                console.log("banner/title: " + snapshot.val());
            })
            
        })

        // запись подзагаловок в базу данных
        set(ref(database, 'banner/description'), inputDesc.value)
        .then(()=> {
            console.log('Запись в базу данных прошла успешно.');
    
            get(ref(database, "banner/description")).then((snapshot) =>{
                snapshot.exists()
                console.log("banner/description: " + snapshot.val());
            })
            
        })
        .catch((error) => {
            console.error('Ошибка записи в базу данных: ', error);
        });
        
        // запись ссылки в базу данных
        set(ref(database, 'banner/link'), inputLink.value)
        .then(()=> {
            console.log('Запись в базу данных прошла успешно.');
    
            get(ref(database, "banner/link")).then((snapshot) =>{
                snapshot.exists()
                console.log("banner/link: " + snapshot.val());
            })
            
        })
        .catch((error) => {
            console.error('Ошибка записи в базу данных: ', error);
        });
        location.reload();

});


const buttonLink = document.querySelector('.button__link');
buttonLink.addEventListener('click', ()=>{
    const section = document.querySelector('.section');
    section.innerHTML = `
    <img class="section_img" src="${inputLink.value}" alt="">
    `
    

});

