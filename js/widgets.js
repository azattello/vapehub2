const modal = document.querySelector(".modal");
const buttonTrue = document.querySelector(".button__modal_true");
const buttonFalse = document.querySelector(".button__modal_false");
const preloader = document.querySelector(".preloader");
function Widget() {
    document.body.style.overflow = "hidden";
    modal.style.overflow = "hidden";
    preloader.style.display = "none";

    buttonTrue.addEventListener("click", () => {
        modal.classList.add("modalOff");
        localStorage.setItem("21", "true");
        preloader.style.display = "block";

        setTimeout(rowfunc, 2500);
        function rowfunc() {
            preloader.classList.add("loading");
            document.body.style.overflow = "auto";
            modal.style.overflow = "auto";

            setTimeout(sityfunc, 1000);
            function sityfunc() {
                const modalSity = document.querySelector(".modal__city");
                modalSity.classList.add("citiesOff");
                modalSity.style.overflow = "hidden";
                document.body.style.overflow = "hidden";
            }
        }
    });

    buttonFalse.addEventListener("click", () => {
        window.location.reload();
    });
}
Widget();

const ustKamenogorsk = document.querySelector(".city__ust_kamenogorsk");
ustKamenogorsk.addEventListener("click", () => {
    localStorage.setItem("city", "UK");
    const modalSity = document.querySelector(".modal__city");
    modalSity.classList.remove("citiesOff");
    modalSity.style.overflow = "auto";
    document.body.style.overflow = "auto";

    const containerSocial = document.querySelector(
        ".footer__contacts_container"
    );
    containerSocial.innerHTML = `
    <a class="href__social" target="_blank" href="https://instagram.com/vapehub_uka?igshid=YmMyMTA2M2Y="><img src="./src/mdi_instagram.png" alt="" /> <p>@vapehub_uka</p></a>
    `;
});

const semey = document.querySelector(".city__semey");
semey.addEventListener("click", () => {
    localStorage.setItem("city", "Semey");
    console.log(semey);
    const modalSity = document.querySelector(".modal__city");
    modalSity.classList.remove("citiesOff");
    modalSity.style.overflow = "auto";
    document.body.style.overflow = "auto";

    const containerSocial = document.querySelector(
        ".footer__contacts_container"
    );
    containerSocial.innerHTML = `
    <a class="href__social" target="_blank" href="https://instagram.com/vapehub_semey?igshid=YmMyMTA2M2Y="><img src="./src/mdi_instagram.png" alt="" /> <p>@vapehub_semey</p></a>
    `;
});

const pavlodar = document.querySelector(".city__pavlodar");
pavlodar.addEventListener("click", () => {
    localStorage.setItem("city", "Pavlodar");
    console.log(pavlodar);
    const modalSity = document.querySelector(".modal__city");
    modalSity.classList.remove("citiesOff");
    modalSity.style.overflow = "auto";
    document.body.style.overflow = "auto";

    const containerSocial = document.querySelector(
        ".footer__contacts_container"
    );
    containerSocial.innerHTML = `
    <a class="href__social" target="_blank" href="https://instagram.com/vapehub_7182?igshid=YmMyMTA2M2Y="><img src="./src/mdi_instagram.png" alt="" /> <p>@vapehub_7182</p></a>
    `;
});

window.onload = function () {
    if (localStorage.getItem("21") === "true") {
        modal.style.display = "none";
        preloader.style.display = "block";
        setTimeout(rowfunc, 2500);
        function rowfunc() {
            preloader.classList.add("loading");
            document.body.style.overflow = "auto";
            modal.style.overflow = "auto";
        }
    }
    localStorage.removeItem("21");
};
