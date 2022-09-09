import { getCustomRepository } from "typeorm";
import { ItensRepositorie } from "../../repositories/ItensRepositorie";
import { classToPlain } from 'class-transformer'

interface ISpendings {
  iten_id: number,
}

class DeleteItemServices {
  async execute({iten_id}: ISpendings) {
    const spendingsRepositories = getCustomRepository(ItensRepositorie)

    const item = spendingsRepositories.delete(iten_id)


    if (!item) {
      throw new Error("Ouve um error ao deletar")
    }

    return {message: "Item deletado"}

  }
}

export {DeleteItemServices}