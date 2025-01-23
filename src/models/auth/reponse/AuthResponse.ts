import {UserResponse} from "../../user/response/UserResponse";

export interface AuthResponse {
    userExitDTO : UserResponse,
    token       : string;
}