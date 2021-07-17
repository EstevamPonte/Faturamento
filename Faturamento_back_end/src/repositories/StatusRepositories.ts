import {EntityRepository, Repository} from 'typeorm'
import { Status } from '../entities/Status'

@EntityRepository(Status)
class StatusRepositories extends Repository<Status> {

}

export {StatusRepositories}