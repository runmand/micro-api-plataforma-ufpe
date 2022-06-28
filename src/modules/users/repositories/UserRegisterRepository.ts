import UsersRegisters from "../../../database/entities/UsersRegisters";
import { getRepository } from "typeorm";

export default class UserRegisterRepository {
  private repo = getRepository(UsersRegisters)

  createEntity = (data: any) => this.repo.create(data as UsersRegisters)

  findUserByUsername = (data:any) => this.repo.findOne({ where: { username: data.username, email: data.username } });
}