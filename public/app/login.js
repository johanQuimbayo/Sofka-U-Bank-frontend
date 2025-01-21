document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const emailInput = document.getElementById('email').value;
        const passwordInput = document.getElementById('password').value;

        const userData = localStorage.getItem('user');
        
        if (userData) {
            const parsedData = JSON.parse(userData);

            if (emailInput === parsedData.user && passwordInput === parsedData.password) {
                window.location.href = 'dashboard.html';
            } else {
                document.getElementById('email-error').textContent = 'Correo o contraseña incorrectos';
            }
        } else {
            console.log('No se encontraron datos de usuario en localStorage.');
            document.getElementById('email-error').textContent = 'Correo o contraseña incorrectos';
        }
    });
});