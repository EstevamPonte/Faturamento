import { Request, Response } from "express";
import { ListSpendingsServices } from "../../services/Spendings/ListSpendingsServices";

class ListSpendingsController {
  async handle(request: Request, response: Response) {
    const { user_id } = request
    const { date } = request.query
    
    const [year, month] = date.toString().split('-')
    const dateRenge = {year: Number(year), month: Number(month)}

    const listSpendingsServices = new ListSpendingsServices()

    const spendings = await listSpendingsServices.execute({user_id, dateRenge})

    return response.json(spendings)
  }
}

export {ListSpendingsController}