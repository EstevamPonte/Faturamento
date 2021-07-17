import { Request, Response } from "express";
import { CreateSpendinsServices } from "../../services/Spendings/CreateSpendinsServices";

class CreateSpendingsController {
  async handle(request: Request, response: Response) {
    const createSpendingServices = new CreateSpendinsServices()

    const {name, user_reference} = request.body

    const spending = await createSpendingServices.execute({name, user_reference})

    return response.json(spending)
  }
}

export {CreateSpendingsController}