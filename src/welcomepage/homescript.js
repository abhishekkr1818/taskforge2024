
document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.querySelector('#loginButtonUser');
    loginButton.addEventListener('click', () => {       
        window.location.href = '/loginuser';
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.querySelector('#loginButtonOrg');
    loginButton.addEventListener('click', () => {       
        window.location.href = '/loginorg';
    });
});
