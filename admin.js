(function(){
if(localStorage.getItem('isLoggedIn') !== 'true'){
window.location.href = 'login.html';
}

const logoutBtn = document.getElementById('logoutBtn');
const userForm = document.getElementById('userForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const roleSelect = document.getElementById('role');
const editingIndexInput = document.getElementById('editingIndex');
const usersTableBody = document.querySelector('#usersTable tbody');


function getUsers(){
try{
return JSON.parse(localStorage.getItem('users') || '[]');
} catch(e){
return [];
}
}


function saveUsers(users){
localStorage.setItem('users', JSON.stringify(users));
}


function render(){
const users = getUsers();
usersTableBody.innerHTML = '';
users.forEach((u, idx) => {
const tr = document.createElement('tr');
tr.innerHTML = `
<td>${idx + 1}</td>
<td>${escapeHtml(u.name)}</td>
<td>${escapeHtml(u.email)}</td>
<td>${escapeHtml(u.role)}</td>
<td class="actions">
<button data-index="${idx}" class="editBtn">Sửa</button>
<button data-index="${idx}" class="deleteBtn danger">Xóa</button>
</td>
`;
usersTableBody.appendChild(tr);
});



document.querySelectorAll('.editBtn').forEach(btn => btn.addEventListener('click', onEdit));
document.querySelectorAll('.deleteBtn').forEach(btn => btn.addEventListener('click', onDelete));
}


})();