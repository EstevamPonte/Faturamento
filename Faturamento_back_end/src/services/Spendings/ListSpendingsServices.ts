import { getCustomRepository } from 'typeorm'
import { SpendingsRepositories } from "../../repositories/SpendingsRepositories";
import { classToPlain } from 'class-transformer'
import { ItensRepositorie } from '../../repositories/ItensRepositorie';
import { Itens } from '../../entities/Itens';

interface IDate {
  year: number
  month: number
}
interface ISpendings {
  user_id: number,
  dateRenge: IDate
}

class ListSpendingsServices {
  async execute({user_id, dateRenge}: ISpendings) {
    const spendingsRepositories = getCustomRepository(SpendingsRepositories)

    const timestamp = new Date(dateRenge.year, dateRenge.month) 
    const yearAndMonth = `${dateRenge.year}-${dateRenge.month}`
    const getSpening = await spendingsRepositories.getSpendingFromDate(timestamp, user_id)

    return classToPlain(getSpening)

  }
}

export {ListSpendingsServices}