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
    let newSpendingList = []

    const timestamp = new Date(dateRenge.year, dateRenge.month)
    const getSpening = await spendingsRepositories.getSpendingFromDate(timestamp, user_id)

    for (const spendings of getSpening) {
      const valuePerMonth = spendings.itens.reduce((previousValue, currentValue) => previousValue + currentValue.value, 0)
      newSpendingList.push({value_per_month:valuePerMonth, ...spendings})
    }

    return classToPlain(newSpendingList)

  }
}

export {ListSpendingsServices}