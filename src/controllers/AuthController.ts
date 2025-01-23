import {AuthService} from "../services/AuthService";
import {UserResponse} from "../models/user/response/UserResponse";
import axios, {AxiosError} from "axios";

export class AuthController {

    private authService: AuthService;

    constructor() {
        this.authService = new AuthService();
    }

    async handleLogin(email: string, password: string): Promise<{ token: string; userExitDTO: UserResponse } | null> {
        try {
            const response = await this.authService.login({ email, password });
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.userExitDTO));
            const { token, userExitDTO } = response.data;
            return {token, userExitDTO};
        } catch (error:any) {
            if (axios.isAxiosError(error)) {
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
                } else{
                    console.error('Error: No se pudo establecer conexión con el servidor.', error);
                    throw new Error('No se pudo establecer conexión con el servidor.');
                }
            }
            console.error('Error desconocido:', error.message);
            throw new Error('Ocurrió un error desconocido. Intenta de nuevo.');
        }
    }
}
