import LoginService from "../services/LoginService";
import LoginValidator  from "../validators/LoginValidator";
import argon2 from 'argon2'
import { ARGON2_SECRET } from '../../../utils/EnvUtils'
import { TypedReq } from "../../../interfaces";
import { Controller, Post } from "../../../decorators";
import { LOGIN_ON } from "../contracts/LoginContract";

@Controller('/login')
export class LoginController {
  private loginService = new LoginService();

  @Post({
    path: '/',
    validator: new LoginValidator().createValidator
  })
  create = async (req: TypedReq<any, LOGIN_ON>) => {
    const data = { ...req.body, password: await argon2.hash(`${req.body.password}${ARGON2_SECRET}`) }

    const user = await this.loginService.findUser(data);
  }
}