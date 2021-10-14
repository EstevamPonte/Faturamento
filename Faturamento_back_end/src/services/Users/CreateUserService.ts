import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../../repositories/UserRepositories";
import { hash } from "bcryptjs";
import { classToPlain } from 'class-transformer'

interface IUserRequest {
  name: string
  password: string
  salary: string
}

class CreateUserService {
  async execute({name, password, salary}: IUserRequest) {
    const usersRepository = getCustomRepository(UserRepositories)

    if(!password) {
      throw new Error("Senha incorreta")
    }

    const userAlreadyExists = await usersRepository.findOne({
      name
    })

    if(userAlreadyExists) {
      throw new Error('Já existe um usuário com esse nome')
    }

    const passwordHash = await hash(password, 8)

    const user = usersRepository.create({
      name,
      salary,
      password: passwordHash
    })

    await usersRepository.save(user)

    return classToPlain(user)
  }
}

export {CreateUserService}