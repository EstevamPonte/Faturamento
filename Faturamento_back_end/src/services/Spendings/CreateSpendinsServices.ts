import { getCustomRepository } from 'typeorm'
import { SpendingsRepositories } from '../../repositories/SpendingsRepositories'

interface ISpendingRequest {
  name: string
  total?: number
  user_reference: number
}

class CreateSpendinsServices {
  async execute({name, total = 0, user_reference}: ISpendingRequest) {
    const spentignsRepositoryes = getCustomRepository(SpendingsRepositories)

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