// function toggleForm(form) {
//   document.getElementById('login-form').style.display = form === 'login' ? 'block' : 'none';
//   document.getElementById('signup-form').style.display = form === 'signup' ? 'block' : 'none';
// }

// function signup() {
//   const name = document.getElementById('signup-name').value;
//   const email = document.getElementById('signup-email').value;
//   const password = document.getElementById('signup-password').value;

//   if (name && email && password) {
//     const user = { name, email, password };
//     localStorage.setItem('user', JSON.stringify(user));
//     alert("Signup successful! Now login.");
//     toggleForm('login');
//   } else {
//     alert("Please fill all fields.");
//   }
// }

// function login() {
//   const email = document.getElementById('login-email').value;
//   const password = document.getElementById('login-password').value;
//   const storedUser = JSON.parse(localStorage.getItem('user'));

//   if (storedUser && email === storedUser.email && password === storedUser.password) {
//     document.getElementById('auth-container').style.display = 'none';
//     document.getElementById('welcome-container').style.display = 'block';
//     document.getElementById('welcome').innerText = `Welcome, ${storedUser.name}! 🎉`;
//   } else {
//     document.getElementById('auth-container').style.display = 'none';
//     document.getElementById('denied-container').style.display = 'block';
//   }
// }
const loginForm = () => {
    const str = `<div>
    <h3>Login Form</h3>
    <p><button onclick='showHome()'>Submit</button></p>
    <p><button onclick='registerForm()'>Create Account</button></p>
    `
    root.innerHTML = str + "</div>"
}

const registerForm = () => {
     const str = `<div>
    <h3>Registration Form</h3>
    <p><button onclick='loginForm()'>Submit</button></p>
    <p><button onclick='loginForm()'>Already a member Login here...</button></p>
    `
    root.innerHTML = str + "</div>"
}

const showHome = () => {
     const str = `<div>
    <h3>Welcome</h3>
    <p><button onclick='loginForm()'>Logout</button></p>
    `
    root.innerHTML = str + "</div>"
}