

if (localStorage.getItem('State') != "user"){
    window.location.replace('../../../authorization.html')
}

function signout(){
    localStorage.removeItem('State');
    window.location.replace('../../../authorization.html')

}

const burger = document.querySelector('.burger');
const back = document.querySelector('.back');
const dropdown = document.querySelector('.dropdown__wrapper');

burger.addEventListener('click', function burgerClick(){
    burger.classList.add("burger_on")
    back.classList.remove("back_on")
    dropdown.classList.add("dropdown_open")

    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  // Добавить стили, чтобы отключить прокрутку
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollPosition}px`;
})

back.addEventListener('click', function backClick(){
    back.classList.add("back_on")
    burger.classList.remove("burger_on")
    
    dropdown.classList.remove("dropdown_open")
    
    var scrollPosition = Math.abs(parseInt(document.body.style.top));
    // Удалить стили, чтобы включить прокрутку
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.top = '';
    // Прокрутить страницу на прежнее место
    window.scrollTo(0, scrollPosition);

})

back.addEventListener('click', function backClick(){
    back.classList.add("back_on")
    burger.classList.remove("burger_on")
    
    dropdown.classList.remove("dropdown_open")
    
    var scrollPosition = Math.abs(parseInt(document.body.style.top));
    // Удалить стили, чтобы включить прокрутку
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.top = '';
    // Прокрутить страницу на прежнее место
    window.scrollTo(0, scrollPosition);

})



const afilter = document.querySelector('.a__filter');
afilter.addEventListener('click', function(){
    window.location.replace('../filter/filter.html')
});
const abannerLink = document.querySelector('.a__banner');
abannerLink.addEventListener('click', function(){
    window.location.replace('../banner/banner.html')
});
const panel = document.querySelector('.a__panel');
panel.addEventListener('click', function(){
    window.location.replace('../../admin.html')
});



const form = document.querySelector('.form') 
const button__add = document.querySelector('.button__add');

button__add.addEventListener('click', function(){
    form.classList.toggle('disable')
    button__add.textContent = 'Закрыть окно';
    if (form.classList.contains('disable') ){
        button__add.textContent = 'Добавить новый товар'

    }
})


// вставка изображение check link

const buttonCheck = document.querySelector('.button__link')
.addEventListener('click', ()=>{
    const inputLink = document.querySelector('.input__link').value;
    checkContainer = document.querySelector('.check__link')
    .innerHTML = `
    <img class="check__img" src="${inputLink}" >

    `
});

const buttonCheck2 = document.querySelector('.button__link2')
.addEventListener('click', ()=>{
    const inputLink = document.querySelector('.input__link2').value;
    checkContainer = document.querySelector('.check__link2')
    .innerHTML = `
    <img class="check__img" src="${inputLink}" >

    `
});
