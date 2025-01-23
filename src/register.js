"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./assets/styles/register.css");
require("./assets/images/sofkalogo.png");
const RegisterController_1 = require("./controllers/RegisterController");
const loanding_1 = require("./utils/loanding");
const registerController = new RegisterController_1.RegisterController();
const registerForm = document.getElementById('register-form');
const nameInput = document.getElementById('name');
const lastNameInput = document.getElementById('lastname');
const documentInput = document.getElementById('document');
const addressInput = document.getElementById('address');
const phoneInput = document.getElementById('phone');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
registerForm.addEventListener('submit', (event) => __awaiter(void 0, void 0, void 0, function* () {
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
    const user = {
        firstName: name,
        lastName: lastname,
        document: Number(document),
        address: address,
        phone: phone,
        email: email,
        password: password,
    };
    (0, loanding_1.showLoading)();
    try {
        const result = yield registerController.handleRegister(user);
        if (!result) {
            // @ts-ignore
            document.getElementById('password-error').textContent = 'Datos incorrectos, por favor verifique';
        }
        else {
            window.location.href = '/login.html';
        }
    }
    catch (error) {
        console.log(error);
        // @ts-ignore
        document.getElementById('password-error').textContent = 'Incorrect data. Please check try again ';
    }
    finally {
        (0, loanding_1.hideLoading)();
    }
}));
