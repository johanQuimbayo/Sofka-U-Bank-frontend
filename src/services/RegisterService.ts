import {AuthRequest} from "../models/auth/request/AuthRequest";
import {AuthResponse} from "../models/auth/reponse/AuthResponse";
import axios from "axios";
import {UserRequest} from "../models/user/request/UserRequest";

export class RegisterService {


    async login(user: UserRequest): Promise<AuthResponse> {
        try {
            const response = await axios.post<AuthResponse>
            ('http://localhost:8080/api/auth/register', user, {
                headers: {
                    "Content-Type": "application/json"
                }});
            return response.data;
        }catch (error:any) {
            console.error(error);
            throw new Error(error);
        }

    }

}
