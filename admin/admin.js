if (localStorage.getItem('State') != "user"){
    window.location.replace('../authorization.html')
}

function signout(){
    localStorage.removeItem('State');
    window.location.replace('../authorization.html')

}


const Products = document.querySelector('.edit__cards_container');
Products.addEventListener('click', function(){
  if (localStorage.getItem('State') === "user"){
    window.location.replace('./admin-pages/products/products.html')
  }else{
    window.location.replace('../authorization.html')

  }
  
})
const newProducts = document.querySelector('.edit__cards_container2');
newProducts.addEventListener('click', function(){
  if (localStorage.getItem('State') === "user"){
    window.location.replace('./admin-pages/products/products.html')
  }else{
    window.location.replace('../authorization.html')

  }
})
const filter = document.querySelector('.edit__filter_container');
filter.addEventListener('click', function(){
  if (localStorage.getItem('State') === "user"){
    window.location.replace('./admin-pages/filter/filter.html')
  }else{
    window.location.replace('../authorization.html')

  }
})
const bannerLink = document.querySelector('.edit__banner_container');
bannerLink.addEventListener('click', function(){
  if (localStorage.getItem('State') === "user"){
    window.location.replace('./admin-pages/banner/banner.html')
  }else{
    window.location.replace('../authorization.html')

  }
})




