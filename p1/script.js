const root = document.getElementById("root");
let users = [];

const renderUserList = () => {
    if (users.length===0) return "";
    let x= "<h4>Registered Users:</h4>";
    if(users.length==0){
        return "<p>No Users Registered</p>";

    }
    users.forEach(user => {
        x += `<p>${user.name} | ${user.email} | ${user.password}</p>`;
    });
    
    return x;
};


const validateUser = () => {
    const username = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    const found = users.find(u => u.email === username && u.password === password);

    if (found) {
        showHome(found.name);
    } else {
        alert("Invalid Email or Password");
        loginForm();
    }
};

const loginForm = () => {
    const str = `
    <div style="display: flex; gap: 30px;">
        <div>
            <h3>Login Form</h3>
            <p><input type="email" id="login-email" placeholder="Email" /></p>
            <p><input type="password" id="login-password" placeholder="Password" /></p>
            <p><button onclick='validateUser()'>Submit</button></p>
            <p><button onclick='registerForm()'>Create Account</button></p>
        </div>
        <div>
            ${renderUserList()}
        </div>
    </div>`;
    root.innerHTML = str;
};

const saveUser = () => {
    const name = document.getElementById("reg-name").value;
    const email = document.getElementById("reg-email").value;
    const password = document.getElementById("reg-password").value;

    const user = { name, email, password };
    users.push(user);

    alert("User Saved");
    loginForm(); // Show updated list
};

const registerForm = () => {
    const str = `
    <div>
        <h3>Registration Form</h3>
        <p><input type="text" id="reg-name" placeholder="Name" /></p>
        <p><input type="email" id="reg-email" placeholder="Email" /></p>
        <p><input type="password" id="reg-password" placeholder="Password" /></p>
        <p><button onclick='saveUser()'>Submit</button></p>
        <p><button onclick='loginForm()'>Already a member? Login here...</button></p>
    </div>`;
    root.innerHTML = str;
};

const showHome = (name = "User") => {
    const str = `
    <div>
        <h3>Welcome, ${name} 🎉</h3>
        <p><button onclick='loginForm()'>Logout</button></p>
    </div>`;
    root.innerHTML = str;
};

loginForm();
