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

let titleFilter = document.getElementById("title");
let tags = document.getElementById("option");


        // // трансл. рус анг
        // function transliterate(str) {
        //     let ru = {
        //         'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'e', 'ж': 'zh', 'з': 'z', 'и': 'i', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'ch', 'ш': 'sh', 'щ': 'shch', 'ъ': '1', 'ы': 'y', 'ь': '1', 'э': 'e', 'ю': 'yu', 'я': 'ya'
        //     };

        //     // for(let t=0,  )
        //     return str.split('').map(function(char) {
        //         return ru[char] || char;
        //     }).join('');

        //     }

        // let transliteratedText =(transliterate(tags.value));
        // let transliteratedTitle =(transliterate(titleFilter.value));

        // let tagsSplit = transliteratedText.split(', ');

        // let tagsJoin2 = []
        // for (let t=0; t < tagsSplit.length; t++){

        //     transliteratedTitle.joun(' ');
        //     let tagsJoin = ("filter_" + transliteratedTitle + "_" + tagsSplit[t]);
        //     tagsJoin2 += (tagsJoin + " ")
        // };
        // console.log(tagsJoin2)




const button = document.querySelector(".button__submit");

onValue(ref(db, "/filter"), (snapData) => {
    let length =
        ((snapData.exists() && Object.keys(snapData.val()).length) || 0) + 1;

    // считаем сколько элементов в списке

    button.addEventListener("click", () => {

        let str = tags.value;
        // let arr = str.split(/[ ,]+/); // ["apple", "banana", "orange"]

        let category = {
            title: titleFilter.value,
            tags: str
        };
        if ((titleFilter.value != "", tags.value != "")) {
            // Записываем объект в базу данных
            set(ref(db, `filter/category${String(length)}`), category)
                .then(() => {
                    console.log("Запись в базу данных прошла успешно.");
                    // document.contact-form.reset();
                    location.reload();
                })
                .catch((error) => {
                    console.log("Ошибка записи в базу данных: ", error);
                });
        } else {
            alert("заполните все поля");
        }
    });
});

// вывод списка на экран
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
            let containerDiv = document.querySelector(".filter__wrapper");
            categoryDiv.classList.add("category");
            categoryDiv.classList.add(`category${i}`);

            // categoryDiv.innerHTML = ` <div class="category__title"><p>${snapTitle}</p> <div class="change${i} category${i} change">Изменить</div></div>
            //             <div class="category__options">
            //                 <div class="option"> ${snapTags}</div>
            //             </div>
            //         `;

            categoryDiv.innerHTML = ` <div class="category__title"><p>${snapTitle}</p> <div class="change${i} category${i} change">Изменить</div></div>
                        <div class="category__options category__options${i}">
                                         
                        </div>
                    `;
            containerDiv.appendChild(categoryDiv);

            let tagsSplit = snapshot.val().tags;
            let words = tagsSplit.split(",");

            for (let z = 0; z < words.length; z++) {
                let containerOption = document.querySelector(`.category__options${i}`);
                let option = document.createElement("option");
                option.classList.add('option')
                containerOption.appendChild(option);
                option.innerHTML = `${words[z]}`;
            }
        });
    }
});

document.addEventListener("click", (event) => {
    let parentClass = event.target.classList[2];
    let parentTarget = event.target.classList[1];

    if (parentClass === "change") {
        let confirmChange = confirm("Хотите внести изменение?"); // Диалоговое окно
        if (confirmChange == true) {
            const buttonChange = document.querySelector(".button__change");
            buttonChange.classList.remove("buttonOff");
            button.classList.add("buttonOff");

            let reflink = `filter/${parentTarget}`;
            let dbref = ref(db, reflink);

            onValue(dbref, (snapshot) => {
                titleFilter.value = snapshot.val().title;
                tags.value = snapshot.val().tags;

                buttonChange.addEventListener("click", () => {
                    let titleChange = document.getElementById("title");
                    let tagsChange = document.getElementById("option");

                    let changeGroup = {
                        title: titleChange.value,
                        tags: tagsChange.value,
                    };

                    set(dbref, changeGroup)
                        .then(() => {
                            console.log("Запись в базу данных прошла успешно.");
                            location.reload();
                        })
                        .catch((error) => {
                            console.log("Ошибка записи в базу данных: ", error);
                        });
                });
            });
        }
    }
});
