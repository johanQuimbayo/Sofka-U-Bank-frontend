import {RegisterService} from "../services/RegisterService";
import {UserRequest} from "../models/user/request/UserRequest";
import {UserResponse} from "../models/user/response/UserResponse";

export class RegisterController {

    private registerService: RegisterService;

    constructor() {
        this.registerService = new RegisterService();
    }

    async handleRegister(userRequest:UserRequest):Promise<{ token: string; userExitDTO: UserResponse } | null> {
        try {
            const response = await this.registerService.login(userRequest);
            console.log('Token recibido:', response.token);
            localStorage.setItem('token', response.token);
            const { token, userExitDTO } = response;
            return {token, userExitDTO};
        } catch (error: any) {
            console.error('Error al iniciar sesión:', error.message);
            return null;
        }
    }
}