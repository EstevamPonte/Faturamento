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
    .leftJoinAndSelect("itens.control", "control")
    .leftJoinAndSelect("itens.status", "status")
    .getMany()

    return spending
  }
}
//
// (itens.date_created BETWEEN '${start.toISOString()}' AND '${date.toISOString()}')
//2021-07-21T00:30:49.243Z
//2012-08-01T03:00:00.000Z

export {SpendingsRepositories}