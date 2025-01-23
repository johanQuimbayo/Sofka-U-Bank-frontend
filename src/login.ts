import './assets/styles/login.css';
import './assets/images/sofkalogo.png';

import {AuthController} from "./controllers/AuthController";
import {hideLoading, showLoading} from "./utils/loanding";

const authController = new AuthController();

const loginForm = document.getElementById('login-form') as HTMLFormElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const passwordInput = document.getElementById('password') as HTMLInputElement;



loginForm.addEventListener('submit', async  (event) => {
    event.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) {
        // @ts-ignore
        document.getElementById('email-error').textContent = 'Correo o contraseña incorrectos';
        return;
    }

    showLoading();

    try {
        const result = await authController.handleLogin(email, password);
        if (!result) {
            // @ts-ignore
            document.getElementById('email-error').textContent = 'Correo o contraseña incorrectos';
        }else {
            window.location.href = '/dashboard.html';
        }
    }catch(error) {
        console.log(error);
        // @ts-ignore
        document.getElementById('email-error').textContent = error.message;
    }finally {
        hideLoading();
    }

});
