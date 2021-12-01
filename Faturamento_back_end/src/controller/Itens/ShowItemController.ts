import { Request, Response } from "express";
import { ShowItenServices } from "../../services/Itens/ShowItenServices";

class ShowItemController {
  async handle(request: Request, response: Response) {
    const itensServices = new ShowItenServices()

    const { itemId } = request.query

    const item = await itensServices.execute({iten_id: Number(itemId)})

    return response.json(item)
  }
}

export {ShowItemController}