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
            //alert("Login Successful")
            window.location.href='/homeorg'
            
        } 
        else{
            //alert("Invalid Login Credentials")
            window.location.href='/loginfailed'
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
