import { Repository, EntityRepository } from 'typeorm'
import { Itens } from '../entities/Itens'

@EntityRepository(Itens)
class ItensRepositorie extends Repository<Itens> {

}

export {ItensRepositorie}