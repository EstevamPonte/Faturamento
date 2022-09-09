import { Request, Response } from "express";
import { UpdateItemServices } from "../../services/Itens/UpdateItemServices";

class UpdateItemController {
  async handle(request: Request, response: Response) {
    const itensServices = new UpdateItemServices()

    let final_installment_date: Date

    const {id, name, control_id, spending_id, status_id, value, instellment, date_item} = request.body
    const dateRegister = new Date(date_item)

    if (instellment > 1) {
      final_installment_date = new Date(dateRegister.getFullYear(), dateRegister.getMonth() + instellment, dateRegister.getDate())
    } else {
      final_installment_date = dateRegister;
    }

    const item = await itensServices.execute({id, name, control_id, spending_id, status_id, value, instellment, final_installment_date, date_item: dateRegister})

    return response.json(item)
  }
}

export {UpdateItemController}