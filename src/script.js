const container=document.getElementById('container');
const registerBtn=document.getElementById('register');
const loginBtn=document.getElementById('login');;

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

<<<<<<< HEAD
=======
document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (response.ok) {
            // Handle successful login, e.g., redirect to dashboard
            alert("Login Successful!");
        } else {
            // Handle errors
            alert(data.message || "Login failed");
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
        const response = await fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });

        const data = await response.json();

        if (response.ok) {
            // Handle successful registration, e.g., redirect to login
            alert("Registration Successful!");
        } else {
            // Handle errors
            alert(data.message || "Registration failed");
        }
    } catch (error) {
        console.error("Error during registration:", error);
    }
});
>>>>>>> 1312b03c8992e88a57fe16c5c3e5bca116912bc4
