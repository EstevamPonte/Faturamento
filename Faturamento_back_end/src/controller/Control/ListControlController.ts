import { Request, Response } from "express";
import { ListControlServices } from "../../services/Control/ListControlServices";

class ListControlController {
  async handle(request: Request, response: Response) {
    const listConstrolServices = new ListControlServices()

    const controlList = await listConstrolServices.execute()

    return response.json(controlList)
  }
}

export {ListControlController}