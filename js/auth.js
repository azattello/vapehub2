localStorage.setItem('email', 'admin@vapehub.kz');
localStorage.setItem('password', 'admin04');

const localEmail = localStorage.getItem("email");
const localPassword = localStorage.getItem("password");

const email = document.getElementById('email');
const password = document.getElementById('password');
const btn = document.getElementById('button_login');


function btnClick(){
    
    if (email.value === localEmail && password.value === localPassword){
        localStorage.setItem('State', 'user');

        
    
    } else {
    // Ошибка авторизации
    alert('Ошибка авторизации')
    }

}

const stateUser = localStorage.getItem('State')

if (stateUser == "user"){
    window.location.replace('../admin/admin.html')
}



