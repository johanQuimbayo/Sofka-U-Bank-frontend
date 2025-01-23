import './assets/styles/register.css'
import './assets/images/sofkalogo.png';

import {RegisterController} from "./controllers/RegisterController";
import {UserRequest} from "./models/user/request/UserRequest";
import {hideLoading, showLoading} from "./utils/loanding";

const registerController = new RegisterController();

const registerForm = document.getElementById('register-form') as HTMLFormElement;
const nameInput = document.getElementById('name') as HTMLInputElement;
const lastNameInput = document.getElementById('lastname') as HTMLInputElement;
const documentInput = document.getElementById('document') as HTMLInputElement;
const addressInput = document.getElementById('address') as HTMLInputElement;
const phoneInput = document.getElementById('phone') as HTMLInputElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const passwordInput = document.getElementById('password') as HTMLInputElement;


registerForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = nameInput.value.trim();
    const lastname = lastNameInput.value.trim();
    const document = documentInput.value.trim();
    const address = addressInput.value.trim();
    const phone = phoneInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password || !phone || !document || !address || !lastname || !name) {
        // @ts-ignore
        document.getElementById('password-error').textContent = 'Datos incorrectos, por favor verifique';
        return;
    }

    const user:UserRequest = {
        firstName: name,
        lastName: lastname,
        document: Number(document),
        address: address,
        phone: phone,
        email: email,
        password: password,
    }

    showLoading();
    try {
        const result = await  registerController.handleRegister(user);
        if (!result) {
            // @ts-ignore
            document.getElementById('password-error').textContent = 'Datos incorrectos, por favor verifique';
        }else {
            window.location.href = '/login.html';
        }

    }catch(error) {
        console.log(error);
        // @ts-ignore
        document.getElementById('password-error').textContent = 'Incorrect data. Please check try again ';
    }finally {
        hideLoading();
    }

});
