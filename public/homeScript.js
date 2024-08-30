document.addEventListener('DOMContentLoaded', () => {
    const loginButtonUser = document.querySelector('#loginButtonUser');
    const loginButtonOrg = document.querySelector('#loginButtonOrg');

    if (loginButtonUser) {
        loginButtonUser.addEventListener('click', () => {       
            window.location.href = '/loginuser';
        });
    }

    if (loginButtonOrg) {
        loginButtonOrg.addEventListener('click', () => {       
            window.location.href = '/loginorg';
        });
    }
});
