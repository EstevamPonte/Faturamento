import { EntityRepository, Repository } from 'typeorm'
import { Control } from '../entities/Control'

@EntityRepository(Control)
class ControlRepositories extends Repository<Control> {

}

export {ControlRepositories}