const root = document.getElementById("root"); // Make sure <div id="root"></div> is in HTML

const loginForm = () => {
    const str = `
    <div>
        <h3>Login Form</h3>
        <p><input type="email" id="login-email" placeholder="Email" /></p>
        <p><input type="password" id="login-password" placeholder="Password" /></p>
        <p><button onclick='showHome()'>Submit</button></p>
        <p><button onclick='registerForm()'>Create Account</button></p>
    </div>`;
    root.innerHTML = str;
};

const registerForm = () => {
    const str = `
    <div>
        <h3>Registration Form</h3>
        <p><input type="text" id="reg-name" placeholder="Name" /></p>
        <p><input type="email" id="reg-email" placeholder="Email" /></p>
        <p><input type="password" id="reg-password" placeholder="Password" /></p>
        <p><button onclick='loginForm()'>Submit</button></p>
        <p><button onclick='loginForm()'>Already a member? Login here...</button></p>
    </div>`;
    root.innerHTML = str;
};

const showHome = () => {
    const str = `
    <div>
        <h3>Welcome</h3>
        <p><button onclick='loginForm()'>Logout</button></p>
    </div>`;
    root.innerHTML = str;
};
