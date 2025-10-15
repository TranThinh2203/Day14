(function(){
const VALID_EMAIL = 'admin@example.com';
const VALID_PASSWORD = '123456';
const loginForm = document.getElementById('login');
const emailInput = document.getElementById('email');
const passInput = document.getElementById('password');
const errorDiv = document.getElementById('error');


if(localStorage.getItem('isLoggedIn') === 'true'){
window.location.href = 'admin.html';
}


loginForm.addEventListener('submit', function(e){
e.preventDefault();
const email = emailInput.value.trim();
const password = passInput.value;
errorDiv.textContent = '';


if(email === VALID_EMAIL && password === VALID_PASSWORD){

localStorage.setItem('isLoggedIn', 'true');

if(!localStorage.getItem('users')){
const defaultUsers = [
{name: 'Nguyễn Văn A', email: 'a@example.com', role: 'User'},
{name: 'Trần Thị B', email: 'b@example.com', role: 'User'}
];
localStorage.setItem('users', JSON.stringify(defaultUsers));
}

window.location.href = 'admin.html';
} else {
errorDiv.textContent = 'Email hoặc mật khẩu không đúng.';
}
});
})();