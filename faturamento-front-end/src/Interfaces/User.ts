export interface IUserContext {
  signed: boolean,
  handleSingIn(value: IUserLogin): Promise<void>,
  handleSingOut(): void,
  user: IUser | null
}

export interface IUser {
  id: number,
  name: string,
  salary: number,
  created_at: string,
  updated_at: string
}

export interface IUserLogin {
  name: string,
  password: string,
}

export interface IUserRegister {
  name: string,
  password: string,
  confirmPassword: string
}

export interface IRegister {
  handleRegister(value: IUserRegister): Promise<void>,
}