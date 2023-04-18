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

const filterBtn = document.querySelector(".filter__img");
filterBtn.addEventListener("click", () => {
    const header = document.querySelector(".header");
    header.classList.add("off");
    const panel = document.querySelector(".panel");
    panel.classList.add("offPanel");

    const filterWrapper = document.querySelector(".filter__wrapper");
    filterWrapper.classList.add("filter__open");

    const search = document.querySelector(".search");
    search.classList.add("offSearch");

    const filter = document.querySelector(".filter");
    filter.classList.add("offFilter");

    const backWrapper = document.querySelector(".back__container");
    backWrapper.classList.remove("back__container_of");

    const category = document.querySelector(".category__wrapper");
    category.classList.remove("categoryClose");

    const footer = document.querySelector(".footer");
    footer.classList.add("footerOff");

    const buttonFilter = document.querySelector(".button__filter_wrapper");
    buttonFilter.classList.remove("buttonOff");

    const allProducts = document.querySelector('.allProducts__wrapper');
    allProducts.classList.add('allProductsOff');
});
const backArrow = document.querySelector(".back__arrow");
backArrow.addEventListener("click", ()=>{
    closeDropdown();
});

function closeDropdown() {
    
    const header = document.querySelector(".header");
    header.classList.remove("off");
    const panel = document.querySelector(".panel");
    panel.classList.remove("offPanel");

    const filterWrapper = document.querySelector(".filter__wrapper");
    filterWrapper.classList.remove("filter__open");

    const search = document.querySelector(".search");
    search.classList.remove("offSearch");

    const filter = document.querySelector(".filter");
    filter.classList.remove("offFilter");

    const backWrapper = document.querySelector(".back__container");
    backWrapper.classList.add("back__container_of");

    const category = document.querySelector(".category__wrapper");
    category.classList.add("categoryClose");

    const footer = document.querySelector(".footer");
    footer.classList.remove("footerOff");

    const buttonFilter = document.querySelector(".button__filter_wrapper");
    buttonFilter.classList.add("buttonOff");
    
    const allProducts = document.querySelector('.allProducts__wrapper');
    allProducts.classList.remove('allProductsOff');
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const filterRef = ref(db, "/filter");

onValue(filterRef, (snapData) => {
    let i = 0;

    while (i < Object.keys(snapData.val()).length) {
        i++;

        let reflink = `/filter/category${i}`;
        let dbRef = ref(db, reflink);
        onValue(dbRef, (snapshot) => {
            let snapTitle = snapshot.val().title;
            let snapTags = snapshot.val().tags;

            let categoryDiv = document.createElement("div");
            let containerDiv = document.querySelector(".category__wrapper");
            categoryDiv.classList.add("category");
            categoryDiv.classList.add(`category${i}`);

            categoryDiv.innerHTML = ` <div class="category__title">${snapTitle}</div>
                        <div class="category__options category__options${i}">
                                         
                        </div>
                    `;
            containerDiv.appendChild(categoryDiv);

            let words = snapTags.split(",");

            for (let z = 0; z < words.length; z++) {
                let containerOption = document.querySelector(`.category__options${i}`);
                let option = document.createElement("option");
                option.classList.add("option");

                option.setAttribute("id", "option");

                containerOption.appendChild(option);
                option.innerHTML = `${words[z]}`;
                const options = document.querySelectorAll(".option");

                option.classList.add(`option${options.length}`);
            }
        });
    }
    // Получить все блоки на странице
    const options = document.querySelectorAll(".option");
    let tagList = "";
    // Добавить обработчик событий на каждый блок
    for (let i = 0; i < options.length; i++) {
        options[i].addEventListener("click", function (event) {
            // Определить, на какой блок пользователь нажал
            const clickedBlock = event.target;
            // Добавить новый класс к блоку, на который нажали
            clickedBlock.classList.toggle("optionActive");
            let clickedBlockText = clickedBlock.textContent;
            tagList += clickedBlockText + " ";

        });
    }

    const button_filter = document.querySelector(".button__filter");

    button_filter.addEventListener("click", () => {
        console.log(tagList);
        closeDropdown();
        

        
    });
});




  
