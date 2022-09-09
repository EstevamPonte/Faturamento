import { getCustomRepository } from "typeorm";
import { ItensRepositorie } from "../../repositories/ItensRepositorie";
import { classToPlain } from 'class-transformer'

interface ISpendings {
  id: number,
  name: string
  instellment?: number
  value: number
  status_id: number
  control_id: number
  spending_id: number
  final_installment_date?: Date
  date_item: Date
}

class UpdateItemServices {
  async execute(fullItem: ISpendings) {
    const spendingsRepositories = getCustomRepository(ItensRepositorie)

    const item = spendingsRepositories.save(fullItem)


    if (!item) {
      throw new Error("Ouve um error ao salvar")
    }

    return {message: "Item salvo"}

  }
}

export {UpdateItemServices}