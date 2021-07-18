import { getCustomRepository } from 'typeorm'
import { SpendingsRepositories } from '../../repositories/SpendingsRepositories'
import { UserRepositories } from '../../repositories/UserRepositories'

interface ISpendingRequest {
  name: string
  total?: number
  user_reference: number
}

class CreateSpendinsServices {
  async execute({name, total = 0, user_reference}: ISpendingRequest) {
    const spentignsRepositoryes = getCustomRepository(SpendingsRepositories)
    const userRepositories = getCustomRepository(UserRepositories)

    const userExists = await userRepositories.findOne(user_reference)

    if(!userExists) {
      throw new Error('Usuário não existe')
    }

    const spending = spentignsRepositoryes.create({
      name,
      total,
      user_reference
    })

    await spentignsRepositoryes.save(spending)
    
    return spending
  }
}

export {CreateSpendinsServices}