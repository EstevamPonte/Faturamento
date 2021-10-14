import { Request, Response } from "express";
import { CreateItensServices } from "../../services/Itens/CreateItensServices";

class CreateItensController {
  async handle(request: Request, response: Response) {
    const itensServices = new CreateItensServices()

    let final_installment_date: Date

    const {name, control_id, spending_id, status_id, value, instellment} = request.body

    if (instellment) {
      const nowDate = new Date()
      final_installment_date = new Date(nowDate.getFullYear(), nowDate.getMonth() + instellment, nowDate.getDate())
    }

    const item = await itensServices.execute({name, control_id, spending_id, status_id, value, instellment, final_installment_date})

    return response.json(item)
  }
}

export {CreateItensController}