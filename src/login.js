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
require("./assets/styles/login.css");
require("./assets/images/sofkalogo.png");
const AuthController_1 = require("./controllers/AuthController");
const loanding_1 = require("./utils/loanding");
const authController = new AuthController_1.AuthController();
const loginForm = document.getElementById('login-form');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
loginForm.addEventListener('submit', (event) => __awaiter(void 0, void 0, void 0, function* () {
    event.preventDefault();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    if (!email || !password) {
        // @ts-ignore
        document.getElementById('email-error').textContent = 'Correo o contraseña incorrectos';
        return;
    }
    (0, loanding_1.showLoading)();
    try {
        const result = yield authController.handleLogin(email, password);
        if (!result) {
            // @ts-ignore
            document.getElementById('email-error').textContent = 'Correo o contraseña incorrectos';
        }
        else {
            window.location.href = '/dashboard.html';
        }
    }
    catch (error) {
        console.log(error);
        // @ts-ignore
        document.getElementById('email-error').textContent = error.message;
    }
    finally {
        (0, loanding_1.hideLoading)();
    }
}));
