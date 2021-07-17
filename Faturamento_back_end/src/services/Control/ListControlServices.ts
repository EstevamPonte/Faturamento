import {getCustomRepository} from 'typeorm'
import { ControlRepositories } from '../../repositories/ControlRepositories'

class ListControlServices {
  async execute() {
    const controlRepositori = getCustomRepository(ControlRepositories)

    const controls = await controlRepositori.find()

    return controls
  }
}

export {ListControlServices}