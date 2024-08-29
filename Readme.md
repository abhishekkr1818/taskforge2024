# Backend Code 
#This is for Shubham User javascript file
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
        const response = await fetch('/api/v1/user/register', { // for registration
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

#This is for Org JavaScript File
const container=document.getElementById('container');
const registerBtn=document.getElementById('register');
const loginBtn=document.getElementById('login');;

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
document.querySelector('#loginForm').addEventListener('submit',async (e)=>{
    e.preventDefault();
    const email = e.target.email.value
    const password = e.target.password.value
    try {
        const response = await fetch('/api/v1/company/login',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        const data = await response.json()
        if(response.ok){
            alert("Login Successful")
            
        } 
        else{
            alert("Invalid Login Credentials")
        }
    } catch (error) {
        console.log("Error during login",error);
        
    }
})
document.querySelector('#registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();  // Prevent form submission and page reload
    const companyName = e.target.companyName.value;
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
        const response = await fetch('/api/v1/company/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ companyName, username, email, password })  // Include all required fields
        });
        const data = await response.json();

        if (response.ok) {
            console.log("Registration Successful", data);
            alert("Registration Successful!");
        } else {
            console.log("Registration failed", data);
            alert(data.message || "Registration failed");
        }
    } catch (error) {
        console.log("Error during registration:", error);
    }
});
