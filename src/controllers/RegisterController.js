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
exports.RegisterController = void 0;
const RegisterService_1 = require("../services/RegisterService");
class RegisterController {
    constructor() {
        this.registerService = new RegisterService_1.RegisterService();
    }
    handleRegister(userRequest) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.registerService.login(userRequest);
                console.log('Token recibido:', response.token);
                localStorage.setItem('token', response.token);
                const { token, userExitDTO } = response;
                return { token, userExitDTO };
            }
            catch (error) {
                console.error('Error al iniciar sesión:', error.message);
                return null;
            }
        });
    }
}
exports.RegisterController = RegisterController;
