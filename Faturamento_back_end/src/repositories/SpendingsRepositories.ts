import { EntityRepository, Repository, getConnection } from 'typeorm'
import { Spendings } from '../entities/Spendings'

@EntityRepository(Spendings)
class SpendingsRepositories extends Repository<Spendings>{
  async getSpendingFromDate(date: Date, user_id: number) {
    const start = new Date(date.getFullYear(), date.getMonth() - 1) // Take the month before
    const end = new Date(date.getFullYear(), date.getMonth() + 1) // Take the month before
    console.log("-----------------")
    console.log(start)
    console.log(date)
    console.log(end)

    const spending = await getConnection().createQueryBuilder()
      .select('spending')
      .from(Spendings, 'spending')
      .where("spending.user_reference = :id", {id: user_id})
      .leftJoinAndSelect("spending.itens", 'itens', `
        ('${start.toISOString()}' BETWEEN itens.date_item AND itens.final_installment)
      `)
      .leftJoinAndSelect("itens.control", "control")
      .leftJoinAndSelect("itens.status", "status")
      .getMany()

    return spending
  }
}
// (itens.date_created BETWEEN '${start.toISOString()}' AND '${date.toISOString()}')

export {SpendingsRepositories}