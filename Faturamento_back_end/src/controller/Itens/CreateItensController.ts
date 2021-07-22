import { Request, Response } from "express";
import { CreateItensServices } from "../../services/Itens/CreateItensServices";

class CreateItensController {
  async handle(request: Request, response: Response) {
    const itensServices = new CreateItensServices()

    const {name, control_id, spending_id, status_id, value, instellment} = request.body

    const item = await itensServices.execute({name, control_id, spending_id, status_id, value, instellment})

    return response.json(item)
  }
}

export {CreateItensController}