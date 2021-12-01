import { EntityRepository, Repository, getConnection } from 'typeorm'
import { Spendings } from '../entities/Spendings'

@EntityRepository(Spendings)
class SpendingsRepositories extends Repository<Spendings>{
  async getSpendingFromDate(date: Date, user_id: number) {
    const start = new Date(date.getFullYear(), date.getMonth() - 1) // Take the month before

    const spending = await getConnection().createQueryBuilder()
      .select('spending')
      .from(Spendings, 'spending')
      .where("spending.user_reference = :id", {id: user_id})
      .leftJoinAndSelect("spending.itens", 'itens', `
        (itens.date_created BETWEEN '${start.toISOString()}' AND '${date.toISOString()}')
      `)
      .leftJoinAndSelect("spending.itens", 'iten', `
        (iten.final_installment > '${start.toISOString()}' AND iten.date_created < '${date.toISOString()}')
      `)
      .leftJoinAndSelect("iten.control", "control")
      .leftJoinAndSelect("iten.status", "status")
      .getMany()

    return spending
  }
}
// (itens.date_created BETWEEN '${start.toISOString()}' AND '${date.toISOString()}')

export {SpendingsRepositories}