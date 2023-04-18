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

const productsRef = ref(db, "listProducts");
onValue(productsRef, (snapData) => {
    let i = 0;
    
    while (i < Object.keys(snapData.val()).length) {
        i++;

        let reflink = `listProducts/product${i}`;
        let dbRef = ref(db, reflink);
        onValue(dbRef, (snapshot) => {
            let snapTitle = snapshot.val().title;
            let snapDescription = snapshot.val().description;
            let snapPrice = snapshot.val().price;
            let snapLink = snapshot.val().link;

            let div = document.createElement("div");
            const container = document.querySelector(".allProducts__wrapper");

            div.classList.add("product");
            div.classList.add(`product${i}`);
            container.appendChild(div);

            div.innerHTML = `
            <div class="filter__tags_wrapper">
            </div>
            <img class="product__img" src="${snapLink}" alt=""/>

            <div class="text__wrapper">    
                <div>
                    <div class="product__title">${snapTitle}</div>
                    <div class="product__description">
                        ${snapDescription}
                    </div>
                </div>
                <div class="price__container">
                    <div class="price">${snapPrice}<span>₸</span></div>
                </div>
            </div>
            `;
        });
    }
});

// container.innerHTML = `
// <div class="product">
//     <div class="filter__tags_wrapper">
//     </div>
//         <img class="product__img" src="../src/elf/2000/taste2.jpg" alt=""/>

//         <div class="text__wrapper">
//             <div>
//                 <div class="product__title">Elf Bar 20020</div>
//                 <div class="product__description">
//                     Watermelon lemon
//                 </div>
//             </div>
//             <div class="price__container">
//                 <div class="price">3450<span>₸</span></div>
//             </div>
//         </div>
//     </div>
// `;
