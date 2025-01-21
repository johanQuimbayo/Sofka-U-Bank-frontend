document.addEventListener('DOMContentLoaded', () => {
    const name = document.querySelector('#name');
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
    const buttonRegister = document.querySelector('button[type="submit"]');
    const nameError = document.querySelector('#name-error');
    const emailError = document.querySelector('#email-error');
    const passwordError = document.querySelector('#password-error');

    const data = {
        name: "",
        user: "",
        password: ""
    };

    buttonRegister.addEventListener('click', (e) => {
        e.preventDefault();

        const nameValue = name.value.trim();
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();

        let isValid = true;

        nameError.textContent = '';
        if (!nameValue) {
            nameError.textContent = 'Por favor, ingresa tu nombre completo.';
            isValid = false;
        }

        emailError.textContent = '';
        if (!emailValue) {
            emailError.textContent = 'Por favor, ingresa tu correo electrónico.';
            isValid = false;
        } else if (!isValidEmail(emailValue)) {
            emailError.textContent = 'Por favor, ingresa un correo electrónico válido.';
            isValid = false;
        }

        passwordError.textContent = '';
        if (!passwordValue) {
            passwordError.textContent = 'Por favor, ingresa tu contraseña.';
            isValid = false;
        } else if (passwordValue.length < 9) {
            passwordError.textContent = 'La contraseña debe tener al menos 9 caracteres.';
            isValid = false;
        }

        if (isValid) {
            data.name = nameValue;
            data.user = emailValue;
            data.password = passwordValue;

            localStorage.setItem('user', JSON.stringify(data));

            console.log('Datos guardados en localStorage:', data);

            window.location.href = 'login.html';
        }
    });

    function isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});
