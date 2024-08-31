const container=document.getElementById('container');
const registerBtn=document.getElementById('register');
const loginBtn=document.getElementById('login');;

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
        const response = await fetch('/api/v1/user/login', { // for login
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        const data = await response.json();

        if (response.ok) {   
            window.location.href='/homeuser'
        } else {
            //alert(data.message || "Login failed");
            window.location.href='/loginfailed'
        }
    } catch (error) {
        console.error("Error during login:", error);
    }
});

document.getElementById('registerForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries());

    try {
        const response = await fetch('/api/v1/user/register', { // for registration
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });

        const data = await response.json();

        if (response.ok) {
            alert("Registration Successful!");
        } else {
            alert(data.message || "Registration failed");
        }
    } catch (error) {
        console.error("Error during registration:", error);
    }
});