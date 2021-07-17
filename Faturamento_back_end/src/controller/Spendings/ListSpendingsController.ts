import { Request, Response } from "express";
import { ListSpendingsServices } from "../../services/Spendings/ListSpendingsServices";

class ListSpendingsController {
  async handle(request: Request, response: Response) {
    const { user_id } = request

    const listSpendingsServices = new ListSpendingsServices()

    const spendings = await listSpendingsServices.execute(user_id)

    return response.json(spendings)
  }
}

export {ListSpendingsController}