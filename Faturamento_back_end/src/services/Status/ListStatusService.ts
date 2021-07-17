import { getCustomRepository } from 'typeorm'
import { StatusRepositories } from '../../repositories/StatusRepositories'

class ListStatusServices {
  async execute() {
    const statusRepositorie = getCustomRepository(StatusRepositories)

    const statusList = await statusRepositorie.find()

    return statusList
  }
}

export {ListStatusServices}