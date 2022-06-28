import UserRegisterRepository from "../../users/repositories/UserRegisterRepository";
import { LOGIN_ON } from "../contracts/LoginContract";

export default class LoginService {
    private userRegisterRepo = new UserRegisterRepository();

    findUser = (data: LOGIN_ON) => this.userRegisterRepo.findUserByUsername(data);
}
