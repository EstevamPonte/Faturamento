import { EntityRepository, Repository } from 'typeorm'
import { Spendings } from '../entities/Spendings'

@EntityRepository(Spendings)
class SpendingsRepositories extends Repository<Spendings>{

}

export {SpendingsRepositories}