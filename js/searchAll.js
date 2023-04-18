const searchButton = document.querySelector(".search__img");
searchButton.addEventListener("click", function () {
    const wrapper = document.querySelector(".allProducts__wrapper");

    const footer = document.querySelector(".footer");
    footer.style.display = "none";

    // Получаем значение из поля ввода
    let searchText = document.querySelector(".search__input").value;
    // Получаем элементы на странице
    let elements = document.querySelectorAll(".product__title");
    let elementsDesc = document.querySelectorAll(".product__description");

    // Проходим по всем элементам на странице
    for (let i = 0; i < elements.length; i++) {
        let element = elements[i];
        searchElement = element.innerHTML.indexOf(searchText);

        let element2 = elementsDesc[i];
        searchElement2 = element2.innerHTML.indexOf(searchText);

        // Если элемент содержит искомое слово

        if (searchElement != -1 || searchElement2 != -1) {
            footer.style.display = "flex";
            wrapper.style.cssText = "display: grid;";

            parentELement = element.parentElement.parentElement.parentElement;
            targetElement = parentELement.classList[1];

            let ifElement = (document.querySelector(
                `.${targetElement}`
            ).style.display = "grid");

            const bodyWidth = document.body.clientWidth;
            if (bodyWidth <= 600) {
                wrapper.style.cssText = "display: flex;";
                let ifElement = (document.querySelector(
                    `.${targetElement}`
                ).style.display = "flex");

                /*КОД КОТОРЫЙ ДОЛЖЕН ВЫПОЛНЯТЬСЯ*/
            }
            // Отмечаем элемент желтым цветом
            // element.style.display = "inline";
        } else {
            parentELement = element.parentElement.parentElement.parentElement;
            targetElement = parentELement.classList[1];

            let elseElement = (document.querySelector(
                `.${targetElement}`
            ).style.display = "none");
        }
    }
});
