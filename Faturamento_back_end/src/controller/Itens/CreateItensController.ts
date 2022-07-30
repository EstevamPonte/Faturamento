import { Request, Response } from "express";
import { CreateItensServices } from "../../services/Itens/CreateItensServices";

class CreateItensController {
  async handle(request: Request, response: Response) {
    const itensServices = new CreateItensServices()

    let final_installment_date: Date

    const {name, control_id, spending_id, status_id, value, instellment, date_item} = request.body
    const dateRegister = new Date(date_item)

    if (instellment > 1) {
      final_installment_date = new Date(dateRegister.getFullYear(), dateRegister.getMonth() + instellment, dateRegister.getDate())
    } else {
      final_installment_date = dateRegister;
    }

    const item = await itensServices.execute({name, control_id, spending_id, status_id, value, instellment, final_installment_date, date_item: dateRegister})

    return response.json(item)
  }
}

export {CreateItensController}