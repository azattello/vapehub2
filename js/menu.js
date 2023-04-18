const burger = document.querySelector('.burger');
const back = document.querySelector('.back');
const dropdown = document.querySelector('.dropdown__wrapper');

burger.addEventListener('click', function burgerClick(){
    burger.classList.add("burger_on")
    back.classList.remove("back_on")
    dropdown.classList.add("dropdown_open")

})

back.addEventListener('click', function backClick(){
    back.classList.add("back_on")
    burger.classList.remove("burger_on")
    dropdown.classList.remove("dropdown_open")


})



