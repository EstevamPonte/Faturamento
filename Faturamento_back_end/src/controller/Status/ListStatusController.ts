import { Request, Response } from 'express'
import {ListStatusServices} from '../../services/Status/ListStatusService'

class ListStatusController {
  async handle(request: Request, response: Response) {
    const listStatusServices = new ListStatusServices()

    const listStaus = await listStatusServices.execute()

    
    return response.json(listStaus)
  }
}

export {ListStatusController}