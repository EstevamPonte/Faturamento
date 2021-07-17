import { getCustomRepository } from 'typeorm'
import { SpendingsRepositories } from "../../repositories/SpendingsRepositories";
import { classToPlain } from 'class-transformer'

class ListSpendingsServices {
  async execute(user_id: number) {
    const spendingsRepositories = getCustomRepository(SpendingsRepositories)

    const spengings = await spendingsRepositories.find({
      where: {
        user_reference: user_id
      }
    })

    return classToPlain(spengings)

  }
}

export {ListSpendingsServices}