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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const AuthService_1 = require("../services/AuthService");
const axios_1 = __importDefault(require("axios"));
class AuthController {
    constructor() {
        this.authService = new AuthService_1.AuthService();
    }
    handleLogin(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.authService.login({ email, password });
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('user', JSON.stringify(response.data.userExitDTO));
                const { token, userExitDTO } = response.data;
                return { token, userExitDTO };
            }
            catch (error) {
                if (axios_1.default.isAxiosError(error)) {
                    if (error.message) {
                        // @ts-ignore
                        const status = error.message.status;
                        switch (status) {
                            case 403:
                                console.error('Error 403: Credenciales incorrectas.');
                                throw new Error('Credenciales incorrectas. Intenta de nuevo.');
                            case 500:
                                console.error('Error 500: Error interno del servidor.');
                                throw new Error('Error del servidor. Intenta de nuevo más tarde.');
                            default:
                                console.error(`Error ${status}: ${error.status}`);
                                throw new Error('Ocurrió un error inesperado. Intenta de nuevo.');
                        }
                    }
                    else {
                        console.error('Error: No se pudo establecer conexión con el servidor.', error);
                        throw new Error('No se pudo establecer conexión con el servidor.');
                    }
                }
                console.error('Error desconocido:', error.message);
                throw new Error('Ocurrió un error desconocido. Intenta de nuevo.');
            }
        });
    }
}
exports.AuthController = AuthController;
