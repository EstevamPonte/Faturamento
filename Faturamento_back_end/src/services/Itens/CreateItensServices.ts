import { getCustomRepository } from "typeorm";
import { ItensRepositorie } from "../../repositories/ItensRepositorie";
import { SpendingsRepositories } from "../../repositories/SpendingsRepositories";
import { ShowItenServices } from "./ShowItenServices"

interface IItens {
  name: string
  instellment?: number
  value: number
  status_id: number
  control_id: number
  spending_id: number
  final_installment_date?: Date
  date_item: Date
}

class CreateItensServices {
  async execute({name, control_id, spending_id, status_id, value, instellment, final_installment_date, date_item}: IItens) {
    const itensRepositorie = getCustomRepository(ItensRepositorie)
    const spendingsRepositories = getCustomRepository(SpendingsRepositories)
    const showItem = new ShowItenServices()
    
    
    const spending = await spendingsRepositories.findOne({
      where: {
        id: spending_id
      },
      relations: ['itens']
    })

    const item = itensRepositorie.create({
      name,
      control_id,
      spending_id,
      status_id,
      value,
      instellment,
      final_installment: final_installment_date,
      date_item
    })

    await itensRepositorie.save(item)
    
    const totalItens = spending.itens.reduce((a, b) => a + b.value, 0) + item.value

    const savedItem = showItem.execute({iten_id: item.id})

    if(totalItens !== spending.total) {
      await spendingsRepositories.update(spending_id, {total: totalItens})
    }

    return savedItem

  }
}

export {CreateItensServices}