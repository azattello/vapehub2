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

// вывод фильтра на экран
const filterRef = ref(db, "filter");
onValue(filterRef, (snapData) => {
    let i = 0;

    while (i < Object.keys(snapData.val()).length) {
        i++;

        let reflink = `filter/category${i}`;
        let dbRef = ref(db, reflink);
        onValue(dbRef, (snapshot) => {
            let titleFilter = snapshot.val().title;
            let tagsFilter = snapshot.val().tags;

            let select = document.createElement("select");
            let container = document.querySelector(".filter__container");
            select.classList.add("select");
            select.classList.add(`select${i}`);
            container.appendChild(select);

            let tagsSplit = snapshot.val().tags;
            let words = tagsSplit.split(",");

            select.innerHTML = `
            <option class="option__selected${i}" selected disabled>
                ${titleFilter}
            </option>
            `;

            for (let z = 0; z < words.length; z++) {
                let containerOption = document.querySelector(`.select${i}`);
                let option = document.createElement("option");
                containerOption.appendChild(option);
                option.innerHTML = `<option>${words[z]}</option>`;
            }
        });

        // вывод фильтра на экран для второго фильтра2
        onValue(dbRef, (snapshot) => {
            let titleFilter = snapshot.val().title;
            let tagsFilter = snapshot.val().tags;

            let select = document.createElement("select");
            let container = document.querySelector(".filter__container2");
            select.classList.add("select");
            select.classList.add(`select__${i}`);
            container.appendChild(select);

            let tagsSplit = snapshot.val().tags;
            let words = tagsSplit.split(",");

            select.innerHTML = `
            <option class="option__selected" selected disabled>
                ${titleFilter}
            </option>
            `;

            for (let z = 0; z < words.length; z++) {
                let containerOption = document.querySelector(`.select__${i}`);
                let option = document.createElement("option");
                containerOption.appendChild(option);
                option.innerHTML = `<option>${words[z]}</option>`;
            }
        });
    }
});

// document inputs
let title = document.getElementById("title");
let description = document.getElementById("description");
let link = document.getElementById("link");
let price = document.getElementById("price");
const button_submit = document.getElementById("button_submit");

// считаем сколько элементов в списке
onValue(ref(db, "listProducts/"), (snapData) => {
    let count = (snapData.exists() && Object.keys(snapData.val()).length) || 0;
    count = count + 1;

    // функция при нажатии на кнопку
    button_submit.addEventListener("click", function () {
        // Объект - получаем значение импутов и сохраняем в объект

        const parentSelect = document.querySelector(".filter__container");
        const childrenSelect = parentSelect.querySelectorAll(".select");
        const countChildSelect = childrenSelect.length;

        let selectJoin = "" ;

        for (let p = 1; p < countChildSelect + 1; p++) {
            let selectGet = document.querySelector(`.select${p}`);
            selectJoin += selectGet.value + " ";
        }

        console.log(selectJoin)
        let group = {
            title: title.value,
            description: description.value,
            link: link.value,
            price: price.value,
            filter: selectJoin,
        };

        // заполните все поля
        if (
            (title.value != "",
            description.value != "",
            link.value != "",
            price.value != "")
        ) {
            // Записываем объект в базу данных
            set(ref(db, `listProducts/product${String(count)}`), group)
                .then(() => {
                    console.log("Запись в базу данных прошла успешно.");
                    document.contact - form.reset();
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

            // let div = document.createElement('div');
            // let container = document.querySelector('.products');

            let tr = document.createElement("tr");
            let container = document.querySelector(".tbody");
            tr.classList.add("product");
            tr.classList.add(`product${i}`);
            container.appendChild(tr);

            tr.innerHTML = `   <td>${i}</td>
                <td>${snapTitle}</td>
                <td>${snapDescription}</td>
                <td>${snapPrice}₸</td>
                <td class="change" >Изменить</td>
            `;
        });
    }
});

// отслеживаем клик по экрану
document.addEventListener("click", (event) => {
    // улавливаем клик
    let parentClass = event.target.parentNode.classList[0]; // выводим в переменную класс по индексу 1
    let parentTarget = event.target.parentNode.classList[1]; // выводим в переменную класс по индексу 2

    if (parentClass === "product") {
        let numberInText = parentTarget.replace(/[^0-9]/g, ""); // возможно понадобится оставляем только цифру из строки класса
        let confirmChange = confirm("Хотите внести изменение?"); // Диалоговое окно

        // Условия диалога
        if (confirmChange == true) {
            // отключаем основную форму
            const buttonAdd = document.querySelector(".button__add");
            buttonAdd.classList.add("disable");
            // Включаем нужную нам форму
            const formContainer = document.querySelector(".form__2");
            formContainer.classList.remove("disable");
            const buttonAddTwo = document.querySelector(".button__add_2");
            buttonAddTwo.classList.remove("disable");

            // прии нажатии на кнопку закрыть окно второстипенную форму отключаем, оснавную включаем
            buttonAddTwo.textContent = "Закрыть окно";
            buttonAddTwo.addEventListener("click", () => {
                formContainer.classList.add("disable");
                buttonAdd.classList.remove("disable");
                buttonAddTwo.classList.add("disable");
            });

            const firstForm = document.querySelector(".form");
            const formClassName = String(firstForm.classList[1]);

            if (formClassName != "disable") {
                firstForm.classList.add("disable");
            }

            // Читаем из базы данных чтобы изменить значение входящих данных
            let reflink = `listProducts/${parentTarget}`;
            let dbRef = ref(db, reflink);

            onValue(dbRef, (snapshot) => {
                let snapTitle = snapshot.val().title;
                let snapDescription = snapshot.val().description;
                let snapLink = snapshot.val().link;
                let snapPrice = snapshot.val().price;
                let snapFilter = snapshot.val().filter;

                let title = (document.getElementById("title2").value =
                    snapTitle);
                let description = (document.getElementById(
                    "description2"
                ).value = snapDescription);
                let link = (document.getElementById("link2").value = snapLink);
                let price = (document.getElementById("price2").value =
                    snapPrice);
                // let filter = (document.getElementById("filter2").value =
                //     snapFilter);
            });

            // добавляем функцию для второй формы
            const changeSubmit = document.getElementById("button_submit_2");

            changeSubmit.addEventListener("click", () => {
                // получаем значение входных данных
                let title = document.getElementById("title2").value;
                let description = document.getElementById("description2").value;
                let link = document.getElementById("link2").value;
                let price = document.getElementById("price2").value;

                if (
                    (title != "", description != "", link != "", price != "")
                    // фильтр
                ) {
                    const parentSelect =
                        document.querySelector(".filter__container");
                    const childrenSelect =
                        parentSelect.querySelectorAll(".select");
                    const countChildSelect = childrenSelect.length;

                    let selectJoin = "";

                    for (let p = 1; p < countChildSelect + 1; p++) {
                        let selectGet = document.querySelector(`.select__${p}`);
                        selectJoin += selectGet.value + " ";
                    }

                    // собираем объект из полученных данных
                    const changeGroup = {
                        title: title,
                        description: description,
                        link: link,
                        price: price,
                        filter: selectJoin
                        // фильтр
                    };

                    // Записываем объект в базу данных
                    set(ref(db, `listProducts/${parentTarget}`), changeGroup)
                        .then(() => {
                            console.log("Запись в базу данных прошла успешно.");
                            document.contact - form.reset();
                            location.reload();
                        })
                        .catch((error) => {
                            console.log("Ошибка записи в базу данных: ", error);
                        });
                } else {
                    alert("Заполните все поля");
                }
            });
        } else {
        }
    }
});
