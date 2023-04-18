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


const Aproducts = document.querySelector('.a__products');
Aproducts.addEventListener('click', function(){
    window.location.replace('../products/products.html')
});
const newproducts = document.querySelector('.a__products2');
newproducts.addEventListener('click', function(){
    window.location.replace('../products/products.html')
});
const banner = document.querySelector('.a__banner');
banner.addEventListener('click', function(){
    window.location.replace('../banner/banner.html')
});
const panel = document.querySelector('.a__panel');
panel.addEventListener('click', function(){
    window.location.replace('../../admin.html')
});