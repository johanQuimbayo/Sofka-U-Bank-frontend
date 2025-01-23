import {AuthRequest} from "../models/auth/request/AuthRequest";
import {AuthResponse} from "../models/auth/reponse/AuthResponse";
import axios, {AxiosError} from "axios";

export class AuthService {


    async login(authData: AuthRequest): Promise<any> {
        try {
            const response = await axios.post<AuthResponse>
            ('http://localhost:8080/api/auth/authenticate', authData, {
                headers: {
                    "Content-Type": "application/json"
                }});
            return response;
        }catch (error:any) {
            throw new AxiosError(error);
        }

    }

}
