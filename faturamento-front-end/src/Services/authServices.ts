import api from "../api";
import { IUser, IUserLogin, IUserRegister } from "../Interfaces/User"

interface IResponseUserLogin {
  data: {
    token: string,
    user: IUser
  }
}
interface IResponseUserRegister {
  data: IUser
}

export function SingInService(user: IUserLogin): Promise<IResponseUserLogin> {
  return api.post("/login", user)
}

export async function RegisterService(user: IUserRegister): Promise<IResponseUserRegister> {
  return await api.post("/user", user)
}