import { getCustomRepository } from "typeorm";
import { ItensRepositorie } from "../../repositories/ItensRepositorie";
import { classToPlain } from 'class-transformer'

interface ISpendings {
  iten_id: number,
}

class ShowItenServices {
  async execute({iten_id}: ISpendings) {
    const spendingsRepositories = getCustomRepository(ItensRepositorie)

    const item = spendingsRepositories.findOne(iten_id, {relations: ['control', 'status']})

    if (!item) {
      throw new Error("Náo existe um item")
    }

    return classToPlain(item)

  }
}

export {ShowItenServices}