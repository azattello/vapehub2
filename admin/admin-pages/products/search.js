
const searchButton = document.querySelector(".search__img");
searchButton.addEventListener('click', function() {
  const tbody = document.querySelector('.tbody');
        tbody.style.cssText = 'display: none;';
    
    // Получаем значение из поля ввода
    let searchText = document.getElementById('search__input').value;
    // Получаем элементы на странице
    let elements = document.getElementsByTagName('tr');
    // Проходим по всем элементам на странице
    for (let i = 0; i < elements.length; i++) {
      let element = elements[i];
      // Если элемент содержит искомое слово
      if (element.innerHTML.indexOf(searchText) !== -1) {
        // Отмечаем элемент желтым цветом
        console.log(element);
    
        element.style.display = "table-row";
      

        
        

     
        
      }else{
        element.style.display = "none";
        
      }
      const trhead = document.querySelector('.trhead');
      const tbody = document.querySelector('.tbody');
      trhead.style.display = "table-row";
      tbody.style.display = "table-row-group";


    }
})


  