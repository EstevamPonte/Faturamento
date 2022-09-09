import { Request, Response } from "express";
import { DeleteItemServices } from "../../services/Itens/DeleteItemServices";

class DeleteItemController {
  async handle(request: Request, response: Response) {
    const itensServices = new DeleteItemServices()

    const { id } = request.params

    const item = await itensServices.execute({iten_id: Number(id)})

    return response.json(item)
  }
}

export {DeleteItemController}